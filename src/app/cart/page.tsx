'use client'
import { useContext, useState } from "react";
import { CarService } from "../service/shop.service";
import { IProduct } from "../types/app.types";
import { ShopContext } from "../context/shop-context";
import { CartItem } from "./CartItem";
import Link from "next/link";
import { Footer } from "../Footer/footer";
import "./cart.css"
import { useProducts } from "../hooks/useProducts";


const Cart = () => {
    const { cartItems } = useContext(ShopContext)
    const [ products, setProducts ] = useState<IProduct[]>()
    const getData = async () => {
        const products = await CarService.getData()
        setProducts(products)
    }
    getData()
    const totalPrice = cartItems.reduce((total, cartItem) => {
        const item = products?.find(i => i.id === cartItem.id)
        return total + (item?.price || 0) * cartItem.quantity
    }, 0
)
    return (
        <>
         <div className="cart">
            <div className="title">
                <p>Shopping Cart</p>
            </div>
            <div className="item">
                { cartItems.map(item => (
                    <CartItem key={item.id} {...item}/>
                ))}
            </div>
            { cartItems.length > 0 ? (
            <div className="checkout">
                <p>SUBTOTAL: ${totalPrice}</p>
                <Link href='/checkout' style={{textDecoration: 'none'}}><li>Checkout</li></Link>
            </div>
            ) : (
                <div className="empty">
                    <h1>Your Cart Is Empty</h1>
                </div>
            )}
         </div>
            <Footer />
        </>
    )
}

export default Cart
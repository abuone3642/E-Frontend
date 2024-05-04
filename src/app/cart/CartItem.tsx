'use client'
import { useContext, useState } from "react"
import { CarService } from "../service/shop.service"
import { ICartItemsProps, IProduct } from "../types/app.types"
import trash from "../Assets/trash.png"
import Image from "next/image"
import { ShopContext } from "../context/shop-context"
import "./CartItem.css"

export const CartItem = ({ id, quantity }: ICartItemsProps) => {
   const { removeFromCart, decreaseQuantity, increaseQuantity } = useContext(ShopContext)
   const [ products, setProducts ] = useState<IProduct[]>()
   const getData = async () => {
     const products = await CarService.getData()
     setProducts(products)
   }
   getData()
    const item = products?.find(i => i.id === id)
    if(item == null) return null

    return (
        <div className="cartItem">
           <div className="column1"> 
           <h3>PRODUCT</h3>
            <div className="box">
              <img src={item.images} alt="" />
              <p>{item.name}</p> 
            </div>
           </div>
           <div className="column">
            <h3>PRICE</h3>
            <p>{item.price}</p>
           </div>
           <div className="column">
            <h3>QUANTITY</h3>
            <div className="box">
                <span onClick={() => decreaseQuantity(id)}>-</span>
                <p>{quantity}</p>
                <span onClick={() => increaseQuantity(id)}>+</span>
            </div>
           </div>
           <div className="column">
            <h3>TOTAL</h3>
            <h4>${quantity * item.price}</h4>
           </div>
          <div className="trash">
            <button onClick={() => removeFromCart(id)}><Image src={trash} alt="" /></button>
          </div>
        </div>
    )
}
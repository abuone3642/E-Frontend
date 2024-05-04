'use client'
import { IProduct } from "../../types/app.types"
import Image from "next/image";
import "./product.css"
import { CarService } from "@/app/service/shop.service";
import { memo, useContext, useEffect, useMemo, useState } from "react";
import { ShopContext } from "@/app/context/shop-context";
import { useParams } from "next/navigation";
import cart from "../../Assets/shopping-cart.png"
import Link from "next/link";
import Review from "@/app/Reviews/Reviews";

const ProductItem = () => {
  const { increaseQuantity, getItemQuantity } = useContext(ShopContext)
  const [ product, setProduct ] = useState<IProduct>()
  //const { getProduct } = useContext(ShopContext)
  //const product = memo(memoProduct)
  const quantity = getItemQuantity(product?.id as number)

  const params = useParams<{id: string}>()
  const getProduct = useMemo(() => async () => {
    const product = await CarService.getById(params.id);
    setProduct(product)
}, [product])
  useEffect(() => {
    getProduct()
}, [product])

  //const getProduct = async () => {
    //const product = await CarService.getById(params.id)
    //setProduct(product)
  //} 
  //getProduct()
     return(
      <div className="singleProduct">
        <div className="product">
          <div className="img">
          <Image src={product?.images as string} alt="" width={540} height={600}/>
          </div>
          <div className="text">
           <h1>{product?.name}</h1>
           <h2>${product?.price}</h2>
           <div className="square"></div>
           <p>{product?.description}</p>
           <div className="square"></div>
           <span>CATEGORY:<p>{product?.category}</p></span>
           <span>BRAND:</span>
           <div className="square"></div>
           <span>QUANTITY:<p className='span'>{quantity}</p></span>
           <div className="square"></div>
           {quantity === 0 ?(
            <li onClick={() => increaseQuantity(product?.id as number)}>Add To Cart</li>
           ) : (
            <div className='cart'>
               <Link href='/cart'><Image src={cart} alt="" /></Link>
               <p onClick={() => increaseQuantity(product?.id as number)}>+1</p>
            </div>
           )}
           </div>
        </div>
        <div className="reviews">
         <Review productId={product?.id as number} />
        </div> 
        </div>
    )
}

export default ProductItem

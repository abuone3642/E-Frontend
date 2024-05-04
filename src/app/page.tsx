'use client'
import React, { FC, useContext } from "react"
import Image from "next/image"
import Link from "next/link"
import "./home.css"
import grid from "./Assets/grid.png"
import laptop from "./Assets/laptop.png"
import smartwatch from "./Assets/smart-watch.png"
import smartphone from "./Assets/smartphone.png"
import tablet from "./Assets/tablet.png"
import console from "./Assets/console.png"
import arrow from "./Assets/right-arrow.png"
import { IProduct, IProductData } from "./types/app.types"
import { ShopContext } from "./context/shop-context"
import { Footer } from "./Footer/footer"
import { CarService } from "./service/shop.service"
import { GetStaticProps } from "next"
import { useParams } from "next/navigation"
import Header from "./Header/Header"
import Banner from "./Banner/Banner"


const Home = () => {

  //const products: IProduct[] = await CarService.getData();
  const { products, reviews } = useContext(ShopContext)
  const category = useParams<{category: string}>()

  return(
    <>
    <div className="home">
      <Header />
      <Banner />
      <ul>
        <Link href='/' style={{textDecoration: "none"}}><li><Image className="img" src={grid} alt="" />All</li></Link>
        <Link href='/products/Smartphone' style={{textDecoration: "none"}}><li><Image className="img" src={smartphone} alt="" />Smartphone</li></Link>
        <Link href=':Laptop' style={{textDecoration: "none"}}><li><Image className="img" src={laptop} alt="" />Laptop</li></Link>
        <Link href=':Tablet' style={{textDecoration: "none"}}><li><Image className="img" src={tablet} alt="" />Tablet</li></Link>
        <Link href=':Smartwatch' style={{textDecoration: "none"}}><li><Image className="img" src={smartwatch} alt="" />Smartwatch</li></Link>
        <Link href='/:Gaming' style={{textDecoration: "none"}}><li><Image className="img" src={console} alt="" />Gaming</li></Link>
      </ul>
      <div className="products">
        {products.map((product: IProduct) => {
           return (
            <div className="product" key={product.id}>
              <div className="img">
               <Image src={product.images} alt="" width={230} height={260} />
              </div>
              <div className="square"></div>
              <div className="text">
               <p>{product.name}</p>
               <h4>{reviews.filter(review => {
                return review.productId == product.id
               }).length} reviews</h4>
               <h3>${product.price}</h3>
               <Link href={`/product/${product.id}`} style={{textDecoration:"none"}}>
                <div className="view">
                 <p className="view">View</p>
                 <Image className="img" src={arrow} alt="" />
                </div>
               </Link>
              </div>
            </div>
           )
        })}
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Home
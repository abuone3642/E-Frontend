'use client'
import Header from "@/app/Header/Header"
import { useParams } from "next/navigation"
import "./category.css"
import Banner from "@/app/Banner/Banner"
import Link from "next/link"
import Image from "next/image"
import grid from "../../Assets/grid.png"
import laptop from "../../Assets/laptop.png"
import smartwatch from "../../Assets/smart-watch.png"
import smartphone from "../../Assets/smartphone.png"
import tablet from "../../Assets/tablet.png"
import console from "../../Assets/console.png"
import "./category.css"


const CategoryPage = () => {

    const params = useParams<{category: string}>()

    return (
        <div className="categoryPage">
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
        
        </div>
    )
}

export default CategoryPage
import './footer.css'
import facebook from "../Assets/facebook.png"
import twitter from "../Assets/twitter.png"
import instagram from "../Assets/instagram.png"
import youtube from "../Assets/youtube.png"
import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="box">
                <h1>Shop Categories</h1>
                <Link href='/products/:category' style={{textDecoration:"none"}}><p>Smartphone</p></Link>
                <Link href='/products/:category' style={{textDecoration:"none"}}><p>Laptop</p></Link>
                <Link href='/products/:category' style={{textDecoration:"none"}}><p>Tablet</p></Link>
                <Link href='/products/:category' style={{textDecoration:"none"}}><p>Smartwatch</p></Link>
                <Link href='/products/:category' style={{textDecoration:"none"}}><p>Gaming</p></Link>
            </div>
            <div className="box">
                <h1>Customer Service</h1>
                <Link href='/' style={{textDecoration:"none"}}><p>Contact Us</p></Link>
                <Link href='/' style={{textDecoration:"none"}}><p>Shopping Policy</p></Link>
                <Link href='/' style={{textDecoration:"none"}}><p>Returns & Exchanges</p></Link>
                <Link href='/' style={{textDecoration:"none"}}><p>Watches</p></Link>
                <Link href='/' style={{textDecoration:"none"}}><p>FAQs</p></Link>
            </div>
            <div className="box">
                <h1>About Us</h1>
                <p className="text">
                  Our electronics shop is a haven for tech enthusiasts, hobbyists, and professionals alike. Stepping into one of these stores often feels like entering a realm where innovation and imagination converge with the tangible world of circuits, components, and gadgets.
                  In an electronics shop, shelves are lined with a dazzling array of products ranging from microcontrollers to LEDs, from resistors to Raspberry Pis. It's a place where you can find everything you need to embark on a DIY electronics project, 
                  repair a malfunctioning device, or simply explore the latest advancements in technology.<br/><br/>
                  2024 E~Shop. All rights reserved.
                </p>
            </div>
            <div className="box">
                <h1>Follow Us</h1>
                <div className="buttons">
                    <a href=""><Image src={facebook} alt="" /></a>
                    <a href=""><Image src={twitter} alt="" /></a>
                    <a href=""><Image src={instagram} alt="" /></a>
                    <a href=""><Image src={youtube} alt="" /></a>
                </div>
            </div>
        </div>
    )
}
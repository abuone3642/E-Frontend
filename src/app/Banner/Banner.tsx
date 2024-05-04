import Image from "next/image"
import bannerimg from "../Assets/Component 1.png"
import "./Banner.css"


const Banner = () => {
    return (
        <div className="banner">
        <div className="text">
          <h1>Summer Sale!</h1>
          <p>Enjoy discounts on selected items</p>
          <h2>GET 50% OFF</h2>
        </div>
        <div className="images">
          <Image className="img" src={bannerimg} alt=""/>
        </div>
      </div>
    )
}

export default Banner
import Link from "next/link"
import Image from "next/image"
import save from "../Assets/heart.png"
import cart from "../Assets/shopping-cart.png"
import "./Header.css"


const Header = () => {
    return (
        <header>
        <p>E~Shop</p>
        <div className="input">
          <input type="text" placeholder="Explore E~Shop" />
          <button>Search</button>
        </div>
        <div className="icons">
         <Link href="/save"><Image className="img" src={save} alt="" /></Link>
         <Link href="/cart"><Image className="img" src={cart} alt="" /></Link>
        </div>
      </header>
    )
}

export default Header
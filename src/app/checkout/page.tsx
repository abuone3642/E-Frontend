'use client'
import { useContext, useState } from "react"
import { ShopContext } from "../context/shop-context"
import { INewUser, IProduct } from "../types/app.types"
import { CarService } from "../service/shop.service"
import "./checkout.css"
import { Footer } from "../Footer/footer"
import { LoadingBox } from "../LoadingBox/LoadingBox"
import { useRouter } from "next/navigation"



const Checkout = () => {
    const [userAddress, setUserAddress] = useState("")
    const { cartItems, products, user } = useContext(ShopContext)
    const { push } = useRouter()

      const totalPrice = cartItems.reduce((total, cartItem) => {
        const item = products?.find(i => i.id === cartItem.id)
        return total + (item?.price || 0) * cartItem.quantity
    }, 0
)
//const userString = window.localStorage.getItem("user")
//const parsedUser = JSON.parse(userString)
const orderItems = JSON.stringify(cartItems)
const orderPrice = totalPrice
const addOrder = async () => {
    const userEmail = user.email.toString()
    const order = await CarService.addOrder({ userEmail, userAddress, orderItems, orderPrice })
}

if(cartItems.length == 0) {
     push('/succes')
}
    
    return (
        <>
        { totalPrice == 0 ? (
            <div className="loadingBox">
                <LoadingBox />
            </div>
        ) : (

        <div className="checkout">
            <form onSubmit={() => addOrder()}>
                <p className="title">Enter your details to complete checkout</p>
                <label>Address Information</label>
                <select name="Country or region" id="">
                    <optgroup label="Uzbekistan">
                      <option value="tashkent">Tashkent</option>
                      <option value="Samarkhand">Samarkhand</option>
                      <option value="Buxara">Buxara</option>
                    </optgroup>
                </select>
                <input type="text" placeholder="Address line 1" value={userAddress} onChange={e => setUserAddress(e.target.value)} />   
                <label>Payment Information</label>
                <input type="text" placeholder="Cart number" /> 
                    <input type="text" placeholder="Expiration" />
                    <input type="text" placeholder="CVC" />                                                       
                <h3>TOTAL: ${totalPrice}</h3>
                <input type="submit" />
            </form>
        </div>
        )}
        <Footer />
        </>
    )
}

export default Checkout
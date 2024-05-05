'use client'
import { FC, useCallback, useContext, useState } from "react"
import { CarService } from "../service/shop.service"
import "./reviews.css"
import Image from "next/image"
import plus from "../Assets/add.png"
import { ShopContext } from "../context/shop-context"
import { useParams } from "next/navigation"
import { IReview } from "../types/app.types"

interface productId {
    productId: number
}

const Review: FC<productId> = ({ productId }) => {
    const [review, setReview] = useState("")
    const { user, reviews } = useContext(ShopContext)
    const userName = user.name 

    const addReview = async () => {
        const newReview = await CarService.addReview({ review, userName, productId })
        return newReview
    }

    return (
        <div className="review">
           <div className="title">
            <h2>Product Reviews</h2>
            <div className="input">
             <textarea placeholder="Leave your review" value={review} onChange={e => setReview(e.target.value)}></textarea>
             <button onClick={() => addReview()}>add review</button>
            </div>
           </div>
            { reviews.filter(
                review => {
                    return review.productId == productId
                }
            ).map(review => {
                return (
                 <div className="reviewBox">
                    <h5>{review.userName}</h5>
                    <p>{review.review}</p>
                 </div>
                )
            })}
        </div>
    )
}

export default Review
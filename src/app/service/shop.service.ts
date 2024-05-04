import axios from "axios";
import { IProduct, IOrder, INewUser, IReview } from "../types/app.types";
import Home from "../page";
import { useState } from "react";
import { error } from "console";


export const CarService = {
    
    async getData() {
    const data = await fetch("http://localhost:5000/products", {
      next: {
        revalidate: 3600
      }
    });
    return data.json()
},

   async getById(id: string) {
    const data = await fetch(`http://localhost:5000/products/${id}`, {
      next: {
        revalidate: 3600
      }
    })
    return data.json()
  },

  async addOrder({ userEmail, userAddress, orderItems, orderPrice }: IOrder) {
    const order = await axios.post<IOrder>("http://localhost:5000/order", {
        userEmail,
        userAddress,
        orderItems,
        orderPrice,
    })
    return order.data
  },

  async newUser({ name, email, password }: INewUser) {
    try {
      const user = await axios.post("http://localhost:5000/auth", {
        name,
        email,
        password,
    });
     return user.data
    } catch(err) {
      console.error(err)
    }
  },

  async addReview({ review, userName, productId }: IReview) {
    try {
      const newReview = await axios.post("http://localhost:5000/product/review", {
         review,
         userName,
         productId,
      });
      return newReview.data
    } catch(err) {
        console.error(err)
    }
  },

  async getReviews() {
    try {
      const reviews = await fetch("http://localhost:5000/product/reviews" , {
        next: {
          revalidate: 3600
        }
      });
      return reviews.json()
    } catch(err) {
      console.error(err)
    }
  }
}
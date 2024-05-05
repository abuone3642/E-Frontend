'use client'
import React, { createContext, useState, useContext, use, useMemo, useEffect } from "react";
import { ICartItemsProps, INewUser, IProduct, IReview, IUserStrig, ShoppingCartContext } from "../types/app.types";
import { CarService } from "../service/shop.service";
import { useParams } from "next/navigation";

export const ShopContext = createContext({} as ShoppingCartContext)

export function ShoppingCartProvider(props: any) {
    const [cartItems, setCartItem] = useState<ICartItemsProps[]>([])
    const [products, setProducts] = useState<IProduct[]>([])
    const [product, setProduct] = useState<IProduct>()
    const [user, setUser] = useState<INewUser>()
    const [reviews, setReviews] = useState<IReview[]>([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )

    const getUser = useMemo(() => () => {
      const userString = window.localStorage.getItem("user") 
      const user = JSON.parse(String(userString))
      setUser(user)
    }, [])
    useEffect(() => {
        getUser()
    }, [])

    //getProductList
    const getProducts = useMemo(() => async () => {
        const products = await CarService.getData();
        setProducts(products)
    }, [products])
    useEffect(() => {
        getProducts();
    }, [products])

    // getReviews
    const getReviews = async () => {
        const reviews = await CarService.getReviews();
        setReviews(reviews)
    }
    useEffect(() => {
        getReviews()
    }, [reviews])

    //getSingleProduct
    //const params = useParams<{id: string}>()
    //const getProduct = useMemo(() => async (id: string) => {
        //const product = await CarService.getById(id);
        //return product
    //}, [])

    const increaseQuantity = (id: number) => {
      setCartItem(currItems => {
        if(currItems.find(item => item.id === id) == null) {
            return [...currItems, { id, quantity: 1 }]
        } else {
            return currItems.map(item => {
                if(item.id === id) {
                    return { ...item, quantity: item.quantity + 1 }
                } else {
                    return item
                }
            })
        }
      })
    }
    const getItemQuantity = (id: number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    const decreaseQuantity = (id: number) => {
        setCartItem(currItems => {
          if (currItems.find(item => item.id === id)?.quantity === 1) {
              return currItems.filter(item => item.id !== id)
          } else {
              return currItems.map(item => {
                  if (item.id === id) {
                      return { ...item, quantity: item.quantity - 1 }
                  } else {
                      return item
                  } 
              })
          }
        })
    }
    const removeFromCart = (id: number) => {
        setCartItem(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }
    return (
        <ShopContext.Provider value={{ getItemQuantity, increaseQuantity, decreaseQuantity, removeFromCart, user, reviews, products, cartQuantity, cartItems }}>
            {props.children}
        </ShopContext.Provider>
    )
}


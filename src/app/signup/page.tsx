"use client"
import React, { useEffect, useState } from "react";
import "./signup.css"
import Image from "next/image";
import { ZodType, object, z } from "zod"
import googlei from "../Assets/google.png"
import axios from "axios"
import { INewUser } from "../types/app.types";
import { useForm } from "react-hook-form" 
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"; 
import { CarService } from "../service/shop.service";


const signUpForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState<INewUser>();
    const [error, setError] = useState("")
    
    const onSubmitForm = async (e: any) => {
        e.preventDefault();
        const newUser = await CarService.newUser({ name, email, password })
        setUser(newUser);
        if(newUser !== "This email already exists") {
          window.location.pathname = '/'
        } else {
              setError(newUser)
            }
        };
window.localStorage.setItem("user", JSON.stringify(user))
console.log(user);
   
    const schema: ZodType<INewUser> = z.object({
        name: z.string().min(4).max(15),
        email: z.string().email(),
        password: z.string().min(4).max(15)
    });
    const { register, handleSubmit, formState:{ errors } } = useForm<INewUser>({ resolver: zodResolver(schema) })
    return(
        <div className="signUpForm">
            <p className="title">A~Shop</p>
            <form onSubmit={onSubmitForm}>
                <p className="title">Sign up to A~Shop</p>
                <ul>
                 <Image className="img" src={googlei} alt="" />
                 <li>Sign up with Google Account</li>
                </ul>
                <div className="line"></div>
                <input type="text" placeholder="Name" {...register("name")} value={name} onChange={e => setName(e.target.value)}  />
                { errors.name && <span>{errors.name.message}</span> }
                <input type="email" placeholder="Email" {...register("email")} value={email} onChange={e => setEmail(e.target.value)} />
                { errors.email && <span>{errors.email.message}</span> }
                <input type="password" placeholder="Password" {...register("password")} value={password} onChange={e => setPassword(e.target.value)} />
                { errors.password && <span>{errors.password.message}</span> }
                <span>{error}</span>                                                               
                <input type="submit" />
                <div className="navigate">
                 <p>Already have an account?</p>
                 <Link href="/signin" style={{color:"#111"}}>Login</Link>
                </div>
            </form>
        </div>
    )
}

export default signUpForm
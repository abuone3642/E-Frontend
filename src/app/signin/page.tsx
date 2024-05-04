"use client"
import React, { useState } from "react"
import "./signin.css"
import Image from "next/image";
import { ZodType, z } from "zod"
import googlei from "../Assets/google.png"
import axios from "axios"
import { IUser } from "../types/app.types";
import { useForm } from "react-hook-form" 
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link";

const SignInForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({})

  const onSubmitForm = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password
      });
      setUser(response.data);
    if(response.statusText == "Created") {
        window.location.pathname = '/'
    } //else if(response.data !== "Password is Incorrect") {
        //window.location.pathname= '/'
    //}; 
        
    } catch (err) {
        console.error(err)
    }
};
console.log(user)

  const checkUser = () => {
     if(user == "Not found") {
        return <span>Not found</span>
    } else if(user == "Password is Incorrect") {
        return <span>Password is Incorrect</span>
    }
}

    const schema: ZodType<IUser> = z.object({
        email: z.string().email(),
        password: z.string().min(4).max(15)
    });
    const { register, handleSubmit, formState:{ errors } } = useForm<IUser>({ resolver: zodResolver(schema) })
    return(
        <div className="signInForm">
            <p className="title">A~Shop</p>
            <form onSubmit={onSubmitForm}>
                <p className="title">Sign up to A~Shop</p>
                <ul>
                 <Image className="img" src={googlei} alt="" />
                 <li>Sign up with Google Account</li>
                </ul>
                <div className="line"></div>
                <input type="email" placeholder="Email" {...register("email")} value={email} onChange={e => {setEmail(e.target.value)}} />
                { errors.email && <span>{errors.email.message}</span> }
                <input type="password" placeholder="Password" {...register("password")} value={password} onChange={e => {setPassword(e.target.value)}} />    
                { errors.password && <span>{errors.password.message}</span> } 
                {checkUser()}                                                              
                <input type="submit" />
                <div className="navigate">
                 <p>Do not have an account?</p>
                 <Link href="/signup" style={{color:"#111"}}>Sign up</Link>
                </div>
            </form>
        </div>
    )
}

export default SignInForm
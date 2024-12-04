"use client"
import {  useEffect, useState } from "react";
import Login from "../components/account/login/login";
import Register from "../components/account/register/register";

const Account = () => {
    const [page,setPage] = useState("login");
    const [components,setComponents] = useState(<Login />);

    useEffect(()=>{
        if (window.location.search==="?signup")
            setComponents(<Register />)
    },[])

    const toggleRegister = ()=>{
        setPage("register")
        setComponents(<Register />)
    }
    const toggleLogin = ()=>{
        setPage("login")
        setComponents(<Login />)
    }

    return (
        <div className="layout max-w-[660px] mx-auto">
            {components}
            {page === "login" ?
            <div className="mb-12">
                <p className="mt-10 mb-5 text-2xl">Dont&apos; have account yet ?</p>
                <button onClick={toggleRegister} className="text-black bg-lightLight w-full h-12 rounded-3xl">Create account</button>
            </div>
            :
            <div className="mb-12">
                <p className="mt-10 mb-5 text-2xl">Already have an account ?</p>
                <button onClick={toggleLogin} className="text-black bg-lightLight w-full h-12 rounded-3xl">Login</button>
            </div>
            }
        </div>
    );
}
 
export default Account;
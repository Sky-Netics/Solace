"use client"

import Link from "next/link";
import React from "react";
import { FiMoon } from "react-icons/fi";
import { TfiHeadphoneAlt } from "react-icons/tfi";


const NavUser = () => {

    const switchTheme = ()=>{
        if (document.documentElement.classList[0] === undefined)
            document.documentElement.classList.add("dark");
        else 
            document.documentElement.classList.remove("dark");
    }

    return ( 
        <div className="bg-white border-black border">
            <div className="p-2 space-y-2">
                <div>
                    <Link href={"/account"}><button className="bg-black text-white w-full py-[10px] rounded-3xl">Sign in</button></Link>
                </div>
                <div>
                    <Link href={"/account?signup"}><button className="bg-gray-300 hover:bg-gray-400 text-black w-full py-2 rounded-3xl">Sign up</button></Link>
                </div>
            </div>
            <hr className="border-gray-300"/>
            <div className="p-3 text-black">
                <div onClick={switchTheme} className="h-14 cursor-pointer hover:bg-gray-200 p-2 flex">
                    <div className="flex gap-3 items-center">
                        <FiMoon size={26}/>
                        <p >Switch to dark mode</p>
                    </div>
                </div>
                <div className="h-14 cursor-pointer hover:bg-gray-200 p-2 mt-1 flex">
                    <div className="flex gap-3 items-center">
                        <TfiHeadphoneAlt size={26}/>
                        <p >Support center</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NavUser;
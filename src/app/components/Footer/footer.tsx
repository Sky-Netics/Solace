"use client"

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FaFacebookF, FaLinkedinIn, FaXTwitter  } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
    const category = useRef<HTMLDivElement|null>(null);
    const order = useRef<HTMLDivElement|null>(null);
    const about = useRef<HTMLDivElement|null>(null);
    const help = useRef<HTMLDivElement|null>(null);
    const menuItems = [category,order,about,help]

    
    const openFooter = (e:React.MouseEvent<HTMLDivElement>)=>{
        if (window.innerWidth > 640)
            return 0;
        menuItems.forEach((item)=>{
            if (item.current)
                item.current.style.height = '30px';
        })

        if (e.currentTarget.offsetHeight < 40){
            e.currentTarget.style.height = '130px';
            const targetNode =  e.currentTarget.childNodes[1]
            const svg = e.currentTarget.childNodes[0].childNodes[1].childNodes[0]
            if (targetNode instanceof HTMLElement && svg instanceof SVGSVGElement){
                svg.style.rotate = "180deg";
                targetNode.style.opacity = '0.2';
            }
        }else{
            e.currentTarget.style.height = '30px';
            const targetNode =  e.currentTarget.childNodes[1]
            const svg = e.currentTarget.childNodes[0].childNodes[1].childNodes[0]
            if (targetNode instanceof HTMLElement && svg instanceof SVGSVGElement){
                svg.style.rotate = "0deg";
                targetNode.style.opacity = '0';
            }
        }
    }

    return ( 
        <div className="bg-black text-white py-8 px-4 md:px-10 lg:px-16 xl:px-28 xl:py-24 md:py-10 lg:py-16">
            <div className="sm:flex sm:flex-col md:flex-row">
                <p className="text-3xl mb-8">SOLACE</p>
                <div className="space-y-8 sm:space-y-0 sm:flex sm:justify-around md:ml-auto md:gap-10 lg:gap-20 xl:gap-28">
                    <div ref={category} className="h-8 sm:h-32 overflow-hidden transition-all duration-500" onClick={e=>openFooter(e)}>
                        <div className="flex justify-between items-center">
                            <p>Categories</p>
                            <div className="sm:hidden"><IoIosArrowDown className="transition-all" /></div>
                        </div>
                        <div className="py-2 opacity-0 sm:opacity-20 text-sm px-1 transition-all duration-500 space-y-1">
                            <Link href={"/"}>Beds</Link>
                            <p>Chairs</p>
                            <p>Sofas</p>
                            <p>Tables</p>
                        </div>
                    </div>
                    <div ref={order} className="h-8 sm:h-32 overflow-hidden transition-all duration-500" onClick={e=>openFooter(e)}>
                        <div className="flex justify-between items-center">
                            <p>Orders</p>
                            <div className="sm:hidden"><IoIosArrowDown className="transition-all"/></div>
                        </div>
                        <div className="py-2 opacity-0 sm:opacity-20 text-sm px-1 transition-all duration-500 space-y-2">
                            <p>Orders and delivery</p>
                            <p>Returns and refunds</p>
                            <p>Payment and pricing</p>
                        </div>
                    </div>
                    <div ref={about} className="h-8 sm:h-32 overflow-hidden transition-all duration-500" onClick={e=>openFooter(e)}>
                        <div className="flex justify-between items-center">
                            <p>About</p>
                            <div className="sm:hidden"><IoIosArrowDown className="transition-all"/></div>
                        </div>
                        <div className="py-2 opacity-0 sm:opacity-20 text-sm px-1 transition-all duration-500 space-y-2">
                            <p>About us</p>
                            <p>Blog</p>
                            <p>Careers</p>
                        </div>
                    </div>
                    <div ref={help} className="h-8 sm:h-32 overflow-hidden transition-all duration-500" onClick={e=>openFooter(e)}>
                        <div className="flex justify-between items-center">
                            <p>Need help?</p>
                            <div className="sm:hidden"><IoIosArrowDown className="transition-all"/></div>
                        </div>
                        <div className="py-2 opacity-0 sm:opacity-20 text-sm px-1 transition-all duration-500 space-y-2">
                            <p>FAQs</p>
                            <p>Support center</p>
                            <p>Contact us</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-10 mt-12 px-6">
                <div><FaLinkedinIn size={23}/></div>
                <div><FaFacebookF size={23}/></div>
                <div><FaXTwitter size={23}/></div>
            </div>
            <hr  className="opacity-50 mx-2 my-8"/>
            <div className="opacity-50 text-lg space-y-1 sm:flex sm:gap-8 h-9 sm:items-center">
                <div>© 2024 Solace. All rights reserved.</div>
                <div className="flex gap-8">
                    <p>Privacy Policy</p>
                    <p>Terms & Condition</p>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;


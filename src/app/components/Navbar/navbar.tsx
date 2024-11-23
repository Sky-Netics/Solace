"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


type Navs= {
    title: string,
    link: string
}

const Navbar = () => {

    const route = usePathname()
    const [showResponsiveHeader, setShowResponsiveHeader] = useState<boolean>(false)
    

    const navs:Navs[] = [
        {
            title: 'Shop',
            link: '/shop'
        },
        {
            title: 'Collections',
            link: '/collections'
        },
        {
            title: 'About Us',
            link: '/about-us'
        },

    ]


    const showHeaderHandler = ()=>{
        setShowResponsiveHeader((prev)=> !prev)
        console.log(showResponsiveHeader)
    }

    return ( 
        <div className="flex justify-between items-center border-b py-5 px-[87px] max-xl:px-[45px]">

            <div className="max-[900px]:hidden">
                <ul className="flex">
                    {
                        navs.map((item)=>(
                            <li key={item.title} className="px-2">
                                <Link 
                                    href={item.link} 
                                    className={`inline-block p-2  ${route === item.link ? 'border-b border-black ' : ''}`}>
                                    {item.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="min-[900px]:hidden mr-4">

                <svg 
                onClick={showHeaderHandler}
                width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                    <title>Bars icon</title>
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.70801 5C2.70801 4.65482 2.98783 4.375 3.33301 4.375H16.6663C17.0115 4.375 17.2913 4.65482 17.2913 5C17.2913 5.34518 17.0115 5.625 16.6663 5.625H3.33301C2.98783 5.625 2.70801 5.34518 2.70801 5ZM2.70801 10C2.70801 9.65482 2.98783 9.375 3.33301 9.375H16.6663C17.0115 9.375 17.2913 9.65482 17.2913 10C17.2913 10.3452 17.0115 10.625 16.6663 10.625H3.33301C2.98783 10.625 2.70801 10.3452 2.70801 10ZM2.70801 15C2.70801 14.6548 2.98783 14.375 3.33301 14.375H16.6663C17.0115 14.375 17.2913 14.6548 17.2913 15C17.2913 15.3452 17.0115 15.625 16.6663 15.625H3.33301C2.98783 15.625 2.70801 15.3452 2.70801 15Z" fill="currentColor"></path>
                </svg>

            </div>

            <div className="min-[900px]:hidden">

                {
                    showResponsiveHeader && (
                        <div className="w-full h-full fixed left-0 top-0 z-100 bg-white">

                            <div className="w-full flex justify-between items-center border-b py-5 px-4">
                                <h1 className="text-[20px]"> Menue </h1>
                            
                                <div onClick={showHeaderHandler}>
                                    <svg className="cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </div>
                            </div>

                            <div className="border-b pt-5 pl-4">
                                <button className="bg-gray-200 py-2 px-4 text-[14px] rounded-3xl">Shop all</button>

                                <ul className="pr-4 mt-4">
                                    <li className="flex justify-between items-center px-4 hover:bg-gray-100 cursor-pointer transition py-3 rounded-xl">
                                        Beds
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><title>Chevron right icon</title><path fillRule="evenodd" clipRule="evenodd" d="M7.55806 4.55806C7.80214 4.31398 8.19786 4.31398 8.44194 4.55806L13.4419 9.55806C13.686 9.80214 13.686 10.1979 13.4419 10.4419L8.44194 15.4419C8.19786 15.686 7.80214 15.686 7.55806 15.4419C7.31398 15.1979 7.31398 14.8021 7.55806 14.5581L12.1161 10L7.55806 5.44194C7.31398 5.19786 7.31398 4.80214 7.55806 4.55806Z" fill="currentColor"></path></svg>
                                    </li>
                                    <li className="flex justify-between items-center px-4 hover:bg-gray-100 cursor-pointer transition py-3 rounded-xl">
                                        Chairs
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><title>Chevron right icon</title><path fillRule="evenodd" clipRule="evenodd" d="M7.55806 4.55806C7.80214 4.31398 8.19786 4.31398 8.44194 4.55806L13.4419 9.55806C13.686 9.80214 13.686 10.1979 13.4419 10.4419L8.44194 15.4419C8.19786 15.686 7.80214 15.686 7.55806 15.4419C7.31398 15.1979 7.31398 14.8021 7.55806 14.5581L12.1161 10L7.55806 5.44194C7.31398 5.19786 7.31398 4.80214 7.55806 4.55806Z" fill="currentColor"></path></svg>
                                    </li>
                                    <li className="flex justify-between items-center px-4 hover:bg-gray-100 cursor-pointer transition py-3 rounded-xl">
                                        Sofas
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><title>Chevron right icon</title><path fillRule="evenodd" clipRule="evenodd" d="M7.55806 4.55806C7.80214 4.31398 8.19786 4.31398 8.44194 4.55806L13.4419 9.55806C13.686 9.80214 13.686 10.1979 13.4419 10.4419L8.44194 15.4419C8.19786 15.686 7.80214 15.686 7.55806 15.4419C7.31398 15.1979 7.31398 14.8021 7.55806 14.5581L12.1161 10L7.55806 5.44194C7.31398 5.19786 7.31398 4.80214 7.55806 4.55806Z" fill="currentColor"></path></svg>
                                    </li>
                                    <li className="flex justify-between items-center px-4 hover:bg-gray-100 cursor-pointer transition py-3 rounded-xl">
                                        Tables
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><title>Chevron right icon</title><path fillRule="evenodd" clipRule="evenodd" d="M7.55806 4.55806C7.80214 4.31398 8.19786 4.31398 8.44194 4.55806L13.4419 9.55806C13.686 9.80214 13.686 10.1979 13.4419 10.4419L8.44194 15.4419C8.19786 15.686 7.80214 15.686 7.55806 15.4419C7.31398 15.1979 7.31398 14.8021 7.55806 14.5581L12.1161 10L7.55806 5.44194C7.31398 5.19786 7.31398 4.80214 7.55806 4.55806Z" fill="currentColor"></path></svg>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul className="pr-4 mt-4">
                                    <li className="px-4 py-3">
                                        <Link href={'/collection'}>
                                            Collection
                                        </Link>
                                    </li>
                                    <li className="px-4 py-3">
                                        <Link href={'./about-us'}>
                                            About Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    )
                }

            </div>

            <div>
                <Link href={'/'} >
                    <svg width="122" height="28" viewBox="0 0 122 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 medium:h-7">
                        <title>Solace Logo</title>
                        <path d="M13.0255 24C8.58222 24 5.19426 21.6944 4.5 17.6389H7.27702C8.19344 20.2222 10.0263 21.3333 13.1088 21.3333C16.1079 21.3333 18.1352 20.1389 18.1352 18.3889C18.1352 16.8611 16.8577 16 13.7197 15.3611L11.6092 14.9722C7.16594 14.1667 5.08317 12.25 5.02763 9.5C4.97209 6.19444 8.11013 4 12.7478 4C16.6356 4 19.8569 5.97222 20.8011 9.55555H17.8852C17.1077 7.61111 14.9694 6.66667 12.6089 6.66667C9.69303 6.66667 7.88797 7.75 7.88797 9.52778C7.88797 10.9722 9.19316 11.8333 12.109 12.3333L14.2196 12.6944C18.996 13.5 20.9677 15.4444 20.9955 18.2778C21.0233 21.6667 17.7464 24 13.0255 24Z" fill="currentColor"></path>
                        <path d="M32.9527 24C27.2321 24 22.8166 19.6389 22.8166 14C22.8166 8.36111 27.2321 4 32.9527 4C38.6734 4 43.0889 8.36111 43.0889 14C43.0889 19.6389 38.6734 24 32.9527 24ZM32.9527 21.3333C37.035 21.3333 40.173 18.1389 40.173 14C40.173 9.86111 37.035 6.66667 32.9527 6.66667C28.8705 6.66667 25.7325 9.86111 25.7325 14C25.7325 18.1389 28.8705 21.3333 32.9527 21.3333Z" fill="currentColor"></path><path d="M49.6235 21.0556H59.8985V23.7222H46.8465V4.27778H49.6235V21.0556Z" fill="currentColor"></path><path d="M78.1212 23.7222L75.7607 19.2778H65.9023L63.4308 23.7222H60.3205L69.568 7.55556L67.8185 4.27778H71.1231L81.4259 23.7222H78.1212ZM67.3464 16.7222H74.4L70.9843 10.2222L67.3464 16.7222Z" fill="currentColor"></path>
                        <path d="M81.8283 14C81.8283 8.36111 86.1605 4 91.7978 4C96.1022 4 99.7123 6.63889 100.99 10.6667H97.9072C96.7964 8.27778 94.7137 6.66667 91.7978 6.66667C87.7989 6.66667 84.7442 9.86111 84.7442 14C84.7442 18.1389 87.7989 21.3333 91.7978 21.3333C94.7137 21.3333 96.7964 19.7222 97.9072 17.3333H100.99C99.7123 21.3611 96.1022 24 91.7978 24C86.1605 24 81.8283 19.6389 81.8283 14Z" fill="currentColor"></path><path d="M117.5 6.88889H107.225V12.6944H116.667V15.3056H107.225V21.1111H117.5V23.7222H104.448V4.27778H117.5V6.88889Z" fill="currentColor"></path>
                    </svg>
                </Link>
            </div>

            <div>
                <ul className="flex px-5 ml-20">

                    <li className="px-3 py-3 hover:bg-gray-200 ">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>Search icon</title>
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.66667 3.125C6.32995 3.125 3.625 5.82995 3.625 9.16667C3.625 12.5034 6.32995 15.2083 9.66667 15.2083C13.0034 15.2083 15.7083 12.5034 15.7083 9.16667C15.7083 5.82995 13.0034 3.125 9.66667 3.125ZM2.375 9.16667C2.375 5.13959 5.63959 1.875 9.66667 1.875C13.6937 1.875 16.9583 5.13959 16.9583 9.16667C16.9583 13.1937 13.6937 16.4583 9.66667 16.4583C5.63959 16.4583 2.375 13.1937 2.375 9.16667Z" fill="currentColor"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.9747 13.4747C14.2188 13.2306 14.6145 13.2306 14.8586 13.4747L18.4419 17.0581C18.686 17.3021 18.686 17.6979 18.4419 17.9419C18.1979 18.186 17.8021 18.186 17.5581 17.9419L13.9747 14.3586C13.7306 14.1145 13.7306 13.7188 13.9747 13.4747Z" fill="currentColor"></path>
                        </svg>
                    </li>

                    <li className="px-3 py-3">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>User Icon</title>
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.4997 3.125C8.54367 3.125 6.95801 4.71066 6.95801 6.66667C6.95801 8.62267 8.54367 10.2083 10.4997 10.2083C12.4557 10.2083 14.0413 8.62267 14.0413 6.66667C14.0413 4.71066 12.4557 3.125 10.4997 3.125ZM5.70801 6.66667C5.70801 4.0203 7.85331 1.875 10.4997 1.875C13.146 1.875 15.2913 4.0203 15.2913 6.66667C15.2913 9.31303 13.146 11.4583 10.4997 11.4583C7.85331 11.4583 5.70801 9.31303 5.70801 6.66667Z" fill="currentColor"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.34369 12.344C6.71114 10.9766 8.5658 10.2083 10.4997 10.2083C12.4335 10.2083 14.2882 10.9766 15.6557 12.344C17.0231 13.7115 17.7913 15.5661 17.7913 17.5C17.7913 17.8452 17.5115 18.125 17.1663 18.125C16.8212 18.125 16.5413 17.8452 16.5413 17.5C16.5413 15.8976 15.9048 14.3609 14.7718 13.2279C13.6387 12.0949 12.102 11.4583 10.4997 11.4583C8.89732 11.4583 7.3606 12.0949 6.22757 13.2279C5.09454 14.3609 4.45801 15.8976 4.45801 17.5C4.45801 17.8452 4.17819 18.125 3.83301 18.125C3.48783 18.125 3.20801 17.8452 3.20801 17.5C3.20801 15.5661 3.97623 13.7115 5.34369 12.344Z" fill="currentColor"></path>
                        </svg>
                    </li>

                    <li className="px-4 py-4">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>Bag icon</title>
                            <path d="M6.6598 18.7083C7.433 18.7083 8.0598 18.0554 8.0598 17.25C8.0598 16.4446 7.433 15.7917 6.6598 15.7917C5.88661 15.7917 5.2598 16.4446 5.2598 17.25C5.2598 18.0554 5.88661 18.7083 6.6598 18.7083Z" fill="currentColor"></path>
                            <path d="M15.4598 18.7083C16.233 18.7083 16.8598 18.0554 16.8598 17.25C16.8598 16.4446 16.233 15.7917 15.4598 15.7917C14.6866 15.7917 14.0598 16.4446 14.0598 17.25C14.0598 18.0554 14.6866 18.7083 15.4598 18.7083Z" fill="currentColor"></path><path d="M18.4038 6.06665C18.2918 5.91665 18.1158 5.83332 17.9398 5.83332H4.8438L4.0918 2.17498C4.0838 2.12498 4.0678 2.07498 4.0438 2.02498C4.0038 1.94165 3.9478 1.86665 3.8758 1.80832C3.8118 1.74998 3.7318 1.70832 3.6438 1.69165C3.5958 1.67498 3.5398 1.67498 3.4918 1.67498H1.8998C1.5718 1.66665 1.2998 1.94998 1.2998 2.29165C1.2998 2.63332 1.5718 2.91665 1.8998 2.91665H3.0118L3.7638 6.59165C3.7638 6.59165 3.7638 6.60832 3.7638 6.61665L5.0278 12.775C5.1318 13.2917 5.4118 13.7667 5.8118 14.0917C6.2038 14.4083 6.6838 14.5833 7.1638 14.5833C7.1798 14.5833 7.1958 14.5833 7.2118 14.5833H15.0358C15.5318 14.5833 16.0198 14.4 16.4118 14.075C16.7958 13.75 17.0758 13.2917 17.1798 12.7833L18.4998 6.59165C18.5398 6.40832 18.4998 6.21665 18.3798 6.06665H18.4038ZM16.0278 12.5167C15.9798 12.75 15.8518 12.9583 15.6758 13.1083C15.4998 13.2583 15.2758 13.3417 15.0518 13.3417H7.2118C6.9798 13.3583 6.74781 13.2667 6.57181 13.1167C6.3878 12.9667 6.2598 12.75 6.2118 12.5167L5.0998 7.09165H17.1878L16.0278 12.525V12.5167Z" fill="currentColor"></path>
                        </svg>
                    </li>
    
                </ul>
            </div>
            
        </div>
     );
}
 
export default Navbar;
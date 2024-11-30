'use client'
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import image1 from '../../../../public//assets/chair2.webp'
import { useState } from "react"
import { p } from "motion/react-client"

const ProductDetails = () =>{

    const [indexSelected, setIndexSelected] = useState(1)
    const [count, setCount] = useState(1)
    const [showDescriptionBox, setShowDescriptionBox] = useState(false)
    const [showDimensionsBox, setShowDimensionsBox] = useState(false)
    const [showDesignBox, setShowDesignBox] = useState(false)
    const [showShippingBox, setShippingBox] = useState(false)

    const params = useParams()
    const product = params.product ? (params.product as string).replace(/-/g, ' ') : "Untitled name";

    const indexHandler = (index: number)=>{
        setIndexSelected(index)
    }


    const increaseCount = ()=>{
        if(count < 10){
            setCount(count + 1)
        }
    }

    const decreaseCount = ()=> {
        
            if(count > 1){
                setCount(count -1)
            }
    }

    const descriptionBoxHandler = () =>{
        setShowDescriptionBox((prev)=> !prev)
        setShowDimensionsBox(false)
        setShowDesignBox(false)
        setShippingBox(false)
    }

    const dimensionsBoxHandler = ()=> {
        setShowDimensionsBox((prev)=> !prev)
        setShowDescriptionBox(false)
        setShowDesignBox(false)
        setShippingBox(false)
    }

    const designBoxHandler = ()=>{
        setShowDesignBox((prev)=> !prev)
        setShowDescriptionBox(false)
        setShowDimensionsBox(false)
        setShippingBox(false)
    }

    const shippingBoxHandler = () =>{
        setShippingBox((prev)=> !prev)
        setShowDescriptionBox(false)
        setShowDimensionsBox(false)
        setShowDesignBox(false)
    }

    return(
        <div className="px-[100px] py-9 flex flex-col">

                <div className="mb-3 flex">
                    <Link href={'/'} className="mr-2">Home page</Link>
                    <p>/</p>
                    <p className="mx-2">
                        <Link href={"/Swivel-Chairs"}>
                            Swivel Chairs
                        </Link>
                    </p>
                    <p>/</p>

                    <p className="mx-2">
                        <Link href={"/Chairs"}>
                            Swivel Chairs
                        </Link>
                    </p>
                    <p>/</p>

                    <p className="text-[#656464] ml-2">{product}</p>
                </div>

                <div className="flex w-full mt-9">
                    
                    <div className="w-[58%]">
                        <Image src={image1} alt="Image" className="w-[767px] h-[530px] object-cover"/>
                    </div>
                    
                    <div className="w-[42%] flex flex-col items-center pl-[120px]">

                        <div className="border-b w-[440px] h-fit">
                            <p className="text-[#6c6c6c] text-[14px]">Savannah</p>

                            <h1 className="text-[32px] leading-tight mt-1">Savannah - Stainless Swivel Chair</h1>

                            <p className="my-6 text-[24px]">€399.00</p>
                        </div>

                        <div className="w-[440px] mt-6">
                            <h1 className="text-[#505050] flex text-[14px]">Color: <p className="ml-1 text-black">Dark beige</p></h1>

                        <div className="flex w-full mt-4">
                            <button 
                                className={`w-[48px] h-[48px] bg-[#bf8b51] mr-2 ${indexSelected === 1 && 'border'} border-black`}
                                onClick={()=>indexHandler(1)}    
                            >

                            </button>

                            <button 
                                className={`w-[48px] h-[48px] bg-[#c28875] ${indexSelected === 2 && 'border'} border-black`}
                                onClick={()=>indexHandler(2)}
                            >

                            </button>
                        </div>

                        <div className="w-full flex justify-between mt-5">

                            <div className="border flex justify-between w-[100px]  bg-gray-100 rounded-md items-center">
                                <button className="w-[30px] py-2 hover:bg-gray-300 rounded-tl-md rounded-bl-md transition" onClick={decreaseCount}>-</button>
                                    {count}
                                <button className="w-[30px] py-2 hover:bg-gray-300 rounded-tr-md rounded-br-md transition" onClick={increaseCount}>+</button>
                            </div>

                            <div className="bg-black text-white w-[330px] rounded-3xl flex justify-center items-center text-[14px]">
                                Add to cart
                            </div>

                        </div>

                        <div className="flex flex-col w-full mt-10">
                            
                            <div className="flex pb-5 cursor-pointer justify-between flex-col">
                                <div className="flex justify-between" onClick={descriptionBoxHandler}>
                                    <p className="font-semibold">Description</p>

                                    <div>
                                        {
                                         showDescriptionBox ? 
                                         (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Minus thin icon</title><path fillRule="evenodd" clipRule="evenodd" d="M3.5415 10C3.5415 9.65482 3.82133 9.375 4.1665 9.375H15.8332C16.1783 9.375 16.4582 9.65482 16.4582 10C16.4582 10.3452 16.1783 10.625 15.8332 10.625H4.1665C3.82133 10.625 3.5415 10.3452 3.5415 10Z" fill="currentColor"></path></svg>
                                         ):
                                         (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Plus Icon</title><path fillRule="evenodd" clipRule="evenodd" d="M9.99984 3.54163C10.345 3.54163 10.6248 3.82145 10.6248 4.16663V9.37496H15.8332C16.1783 9.37496 16.4582 9.65478 16.4582 9.99996C16.4582 10.3451 16.1783 10.625 15.8332 10.625H10.6248V15.8333C10.6248 16.1785 10.345 16.4583 9.99984 16.4583C9.65466 16.4583 9.37484 16.1785 9.37484 15.8333V10.625H4.1665C3.82133 10.625 3.5415 10.3451 3.5415 9.99996C3.5415 9.65478 3.82133 9.37496 4.1665 9.37496H9.37484V4.16663C9.37484 3.82145 9.65466 3.54163 9.99984 3.54163Z" fill="currentColor"></path></svg>
                                         )
                                        }
                                        
                                    </div>
                                </div>
                                
                                {
                                    showDescriptionBox &&
                                    (
                                        <p className="text-[14px] text-[#6c6c6c] tracking-normal mt-5">
                                            Mauris vel mauris a diam lobortis rutrum in ac purus. Proin nec mi id tortor suscipit volutpat sit amet vitae orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sit amet varius orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse pulvinar odio sit amet semper vestibulum. Maecenas id maximus est, ut congue nisi. Etiam facilisis fermentum mauris. Suspendisse sit amet dui congue, blandit sem at, aliquet dolor. Praesent semper feugiat varius. Maecenas vehicula tortor risus, in vestibulum massa faucibus ut. In non turpis sed ante fringilla molestie. Maecenas tempor tortor orci, sed ultrices libero vehicula ac. Donec scelerisque non magna nec dictum. Nullam condimentum purus vel purus rutrum, ut imperdiet est sollicitudin. Pellentesque condimentum sed eros sed faucibus.
                                        </p>
                                    )
                                }

                                
                            </div>

                            <div className="flex py-5 cursor-pointer justify-between flex-col" >
                               <div className="flex justify-between" onClick={dimensionsBoxHandler}>
                                <p className="font-semibold">Dimensions</p>

                                <div>
                                
                                {
                                    showDimensionsBox ? 
                                        (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Minus thin icon</title><path fillRule="evenodd" clipRule="evenodd" d="M3.5415 10C3.5415 9.65482 3.82133 9.375 4.1665 9.375H15.8332C16.1783 9.375 16.4582 9.65482 16.4582 10C16.4582 10.3452 16.1783 10.625 15.8332 10.625H4.1665C3.82133 10.625 3.5415 10.3452 3.5415 10Z" fill="currentColor"></path></svg>
                                        ):
                                        (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Plus Icon</title><path fillRule="evenodd" clipRule="evenodd" d="M9.99984 3.54163C10.345 3.54163 10.6248 3.82145 10.6248 4.16663V9.37496H15.8332C16.1783 9.37496 16.4582 9.65478 16.4582 9.99996C16.4582 10.3451 16.1783 10.625 15.8332 10.625H10.6248V15.8333C10.6248 16.1785 10.345 16.4583 9.99984 16.4583C9.65466 16.4583 9.37484 16.1785 9.37484 15.8333V10.625H4.1665C3.82133 10.625 3.5415 10.3451 3.5415 9.99996C3.5415 9.65478 3.82133 9.37496 4.1665 9.37496H9.37484V4.16663C9.37484 3.82145 9.65466 3.54163 9.99984 3.54163Z" fill="currentColor"></path></svg>
                                        )
                                }
                                </div>
                                </div>

                                {
                                    showDimensionsBox && (
                                        <ul className="text-[14px] mt-5">
                                            <li className="flex font-semibold my-1">Depth: <p className="text-[#6c6c6c] ml-1 font-normal">45</p> </li>
                                            <li className="flex font-semibold my-1">Width: <p className="text-[#6c6c6c] ml-1 font-normal">65</p> </li>
                                            <li className="flex font-semibold my-1">Height: <p className="text-[#6c6c6c] ml-1 font-normal">78</p> </li>
                                        </ul>
                                    )
                                }
                            </div>

                            <div className="flex py-5 cursor-pointer justify-between flex-col" >
                               <div className="flex justify-between" onClick={designBoxHandler}>
                                <p className="font-semibold">Design</p>

                                <div>
                                
                                {
                                    showDesignBox ? 
                                        (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Minus thin icon</title><path fillRule="evenodd" clipRule="evenodd" d="M3.5415 10C3.5415 9.65482 3.82133 9.375 4.1665 9.375H15.8332C16.1783 9.375 16.4582 9.65482 16.4582 10C16.4582 10.3452 16.1783 10.625 15.8332 10.625H4.1665C3.82133 10.625 3.5415 10.3452 3.5415 10Z" fill="currentColor"></path></svg>
                                        ):
                                        (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Plus Icon</title><path fillRule="evenodd" clipRule="evenodd" d="M9.99984 3.54163C10.345 3.54163 10.6248 3.82145 10.6248 4.16663V9.37496H15.8332C16.1783 9.37496 16.4582 9.65478 16.4582 9.99996C16.4582 10.3451 16.1783 10.625 15.8332 10.625H10.6248V15.8333C10.6248 16.1785 10.345 16.4583 9.99984 16.4583C9.65466 16.4583 9.37484 16.1785 9.37484 15.8333V10.625H4.1665C3.82133 10.625 3.5415 10.3451 3.5415 9.99996C3.5415 9.65478 3.82133 9.37496 4.1665 9.37496H9.37484V4.16663C9.37484 3.82145 9.65466 3.54163 9.99984 3.54163Z" fill="currentColor"></path></svg>
                                        )
                                }
                                </div>
                                </div>


                            </div>


                            <div className="flex py-5 cursor-pointer justify-between">
                                <p className="font-semibold">Shipping & Returns</p>

                                <div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Plus Icon</title><path fillRule="evenodd" clipRule="evenodd" d="M9.99984 3.54163C10.345 3.54163 10.6248 3.82145 10.6248 4.16663V9.37496H15.8332C16.1783 9.37496 16.4582 9.65478 16.4582 9.99996C16.4582 10.3451 16.1783 10.625 15.8332 10.625H10.6248V15.8333C10.6248 16.1785 10.345 16.4583 9.99984 16.4583C9.65466 16.4583 9.37484 16.1785 9.37484 15.8333V10.625H4.1665C3.82133 10.625 3.5415 10.3451 3.5415 9.99996C3.5415 9.65478 3.82133 9.37496 4.1665 9.37496H9.37484V4.16663C9.37484 3.82145 9.65466 3.54163 9.99984 3.54163Z" fill="currentColor"></path></svg>
                                </div>
                            </div>
                            
                        </div>

                        </div>

                    </div>

                </div>

        </div>
    )
}

export default ProductDetails
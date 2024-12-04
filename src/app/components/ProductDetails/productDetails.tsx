'use client'
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent'

type ClientData = {
    thumbnail: string,
    title : string,
    images: Array<T>,
    description: string
}

const ProductDetails = ({ data }) =>{

    const [clientData] = useState<ClientData>(data.product);




    const [indexSelected, setIndexSelected] = useState(1)
    const [count, setCount] = useState(1)
    const [showDescriptionBox, setShowDescriptionBox] = useState(false)
    const [showDimensionsBox, setShowDimensionsBox] = useState(false)
    const [showDesignBox, setShowDesignBox] = useState(false)
    const [showShippingBox, setShippingBox] = useState(false)
    const [showFullscreenImage, setShowFullscreenImage] = useState(false)
    const [productData] = useState<null | string>(null)
    const [currentImageIndex, seCurrentImageIndex] = useState(0)




    console.log(productData)

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

    console.log(clientData)

    return(
        <div className=" py-9 flex flex-col">

                
                <div className="mb-3 flex px-[100px] max-xl:px-[25px] max-md:text-[14px] max-sm:text-[10px]">
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

                <div className="flex w-full mt-9 px-[100px] max-xl:px-[25px] max-[950px]:flex-col">
                    
                    <div className="w-[58%] max-xl:w-[50%] max-[950px]:w-[100%]">
                        <Image src={clientData.thumbnail} width={767} height={530} alt="Image" className="w-[767px] h-[530px] object-cover max-md:h-[330px] " onClick={()=>setShowFullscreenImage(true)}/>
                    </div>

                    {
                        showFullscreenImage && (
                            <div className="w-full absolute inset-0 h-screen bg-white flex justify-between z-50">
                                <div className="flex flex-col gap-5 items-center w-[25%] pt-10">

                                    {
                                        clientData.images.map((item, index)=>(
                                            <div key={item.id}>
                                                <Image src={item.url} alt={item.id} width={100} height={100} onClick={()=>seCurrentImageIndex(index)}/>
                                            </div>
                                        ))
                                    }
                                    
                                </div>

                                <div className="w-[50%] flex justify-center items-center">
                                    <Image src={clientData.images[currentImageIndex].url} width={550} height={550} alt="chair" />
                                </div>

                                <div className="w-[25%] flex items-start justify-end pr-[50px] pt-5">
                                    <button onClick={()=>setShowFullscreenImage(false)}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </button>
                                </div>
                            </div>
                        )
                    }
                    
                    

                    <div className="w-[42%] flex flex-col items-center pl-[120px] max-[950px]:pl-0 max-[950px]:w-full max-lg:pt-[40px]">

                        <div className="border-b w-[440px] h-fit max-sm:w-[350px]">
                            <p className="text-[#6c6c6c] text-[14px]">{clientData.title}</p>

                            <h1 className="text-[32px] leading-tight mt-1 max-sm:text-[28px]">{clientData.title}</h1>

                            <p className="my-6 text-[24px]">€399.00</p>
                        </div>

                        <div className="w-[440px] mt-6 max-sm:w-[350px]">
                            <h1 className="text-[#505050] flex text-[14px]">Color: <p className="ml-1 text-black dark:text-white">Dark beige</p></h1>

                        <div className="flex w-full mt-4">
                            <button 
                                className={`w-[48px] h-[48px] bg-[#bf8b51] mr-2 ${indexSelected === 1 && 'border-2'} border-black dark:border-white`}
                                onClick={()=>indexHandler(1)}    
                            >

                            </button>

                            <button 
                                className={`w-[48px] h-[48px] bg-[#c28875] ${indexSelected === 2 && 'border-2'} border-black dark:border-white`}
                                onClick={()=>indexHandler(2)}
                            >

                            </button>
                        </div>

                        <div className="w-full flex justify-between mt-5 max-sm:flex-col ">

                            <div className="border flex justify-between w-[100px]  bg-gray-100 rounded-md items-center">
                                <button className="w-[30px] py-2 hover:bg-gray-300 rounded-tl-md rounded-bl-md transition dark:text-black" onClick={decreaseCount}>-</button>
                                   <p className="dark:text-black">
                                   {count}
                                   </p>
                                <button className="w-[30px] py-2 hover:bg-gray-300 rounded-tr-md rounded-br-md transition dark:text-black" onClick={increaseCount}>+</button>
                            </div>

                            <div className="bg-black text-white w-[330px] rounded-3xl flex justify-center items-center text-[14px] max-sm:mt-5 max-sm:py-2">
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

                                <AnimatePresence initial={false}>
                                    {showDescriptionBox && (
                                        <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                        >
                                        <p className="text-[14px] text-[#6c6c6c] tracking-normal mt-5">
                                            {clientData.description}
                                        </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                
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


                                <AnimatePresence initial={false}>
                                    {showDimensionsBox && (
                                        <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                        >

                                        <ul className="text-[14px] mt-5">
                                            <li className="flex font-semibold my-1">Depth: <p className="text-[#6c6c6c] ml-1 font-normal">45</p> </li>
                                            <li className="flex font-semibold my-1">Width: <p className="text-[#6c6c6c] ml-1 font-normal">65</p> </li>
                                            <li className="flex font-semibold my-1">Height: <p className="text-[#6c6c6c] ml-1 font-normal">78</p> </li>
                                        </ul>
                                        </motion.div>
                                    )

                                    }
                                </AnimatePresence>
                                
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

                                <AnimatePresence initial={false}>  
                                {
                                    showDesignBox && (
                                        <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                        >
                                            <p className="text-[14px] mt-5 text-[#6c6c6c]">
                                                <span className="font-semibold text-black mr-1">Style:</span> 
                                                <span>Mid-century modern design with clean lines, tapered legs, and a minimalist aesthetic that complements a wide range of interior styles.</span>
                                            </p>
                                        </motion.div>
                                    )
                                }
                                </AnimatePresence>
                                </div>


                            <div className="flex py-5 cursor-pointer justify-between flex-col">
                                
                            <div className="flex justify-between" onClick={shippingBoxHandler}>
                                
                                <p className="font-semibold">Shipping & Returns</p>

                                {
                                    showShippingBox ? 
                                        (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Minus thin icon</title><path fillRule="evenodd" clipRule="evenodd" d="M3.5415 10C3.5415 9.65482 3.82133 9.375 4.1665 9.375H15.8332C16.1783 9.375 16.4582 9.65482 16.4582 10C16.4582 10.3452 16.1783 10.625 15.8332 10.625H4.1665C3.82133 10.625 3.5415 10.3452 3.5415 10Z" fill="currentColor"></path></svg>
                                        ):
                                        (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Plus Icon</title><path fillRule="evenodd" clipRule="evenodd" d="M9.99984 3.54163C10.345 3.54163 10.6248 3.82145 10.6248 4.16663V9.37496H15.8332C16.1783 9.37496 16.4582 9.65478 16.4582 9.99996C16.4582 10.3451 16.1783 10.625 15.8332 10.625H10.6248V15.8333C10.6248 16.1785 10.345 16.4583 9.99984 16.4583C9.65466 16.4583 9.37484 16.1785 9.37484 15.8333V10.625H4.1665C3.82133 10.625 3.5415 10.3451 3.5415 9.99996C3.5415 9.65478 3.82133 9.37496 4.1665 9.37496H9.37484V4.16663C9.37484 3.82145 9.65466 3.54163 9.99984 3.54163Z" fill="currentColor"></path></svg>
                                        )
                                }
                            </div>
                            </div>

                            <AnimatePresence initial={false}>
                            {
                                showShippingBox && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <ul className="text-[#6c6c6c] text-[14px] list-disc leading-6 pr-5 tracking-wide">
                                            <li>
                                                Free standard shipping on all orders within the continental U.S. Expedited shipping options are available at an additional cost. Orders typically ship within 3-5 business days.
                                            </li>
                                                
                                            <li>
                                                We offer a 30-day return policy. If you are not completely satisfied with your purchase, you can return the chair for a full refund or exchange, provided it is in its original condition and packaging.
                                            </li>
                                        </ul>
                                    </motion.div>
                                )
                            }
                            </AnimatePresence>
                            
                        </div>

                        </div>

                    </div>

                </div>

                <div className="mt-[150px]">
                    <CarouselComponent title="Complete the look"/>
                </div>


        </div>
    )
}

export default ProductDetails
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { IoCartOutline, IoFilterSharp } from "react-icons/io5";
import Filter from "../filter/page";

const fetchData = async (url:string)=>{
    const response = await fetch(url,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    })
    return response.json()
}


const ProductWrapper = async ({url}:{url:string}) => {
    const products:ProductType[] = await fetchData(url);
    const productlength = products.length

    return ( 
        <div>
            <div className="px-7">
                <div className="my-10">
                    <Link href='/' className="flex items-center gap-2">
                        <div><FaArrowLeft /></div>
                        <p>Back To Home Page</p>
                    </Link>
                    <p className="mt-2 text-4xl">All Products</p>
                </div>
                <div>
                    <p className="opacity-50">{productlength} Products</p>
                    <Filter />
                </div>
                <div>
                    {products.map((product,i)=>{
                        return (
                            <div key={i}>
                                <div className="mb-5 w-full h-80 relative">
                                    <Image className="w-full h-80" src={product.image} width={400} height={1000} alt={`prodcut${i}`} priority/>
                                    <div className="bg-gray-600 w-12 rounded-full h-12 absolute bottom-3 right-3 flex justify-center items-center"><IoCartOutline size={25} color="white"/></div>
                                </div>
                                <div className="text-center">
                                    <p>{product.title}</p>
                                    <p className="font-bold my-5">€{product.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default ProductWrapper;
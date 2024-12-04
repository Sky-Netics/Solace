import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import Filter from "../filter/page";
import shopType from "@/app/interFaces/shopType";

const fetchData = async (url:string)=>{
    const response = await fetch(url,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "x-publishable-api-key":"pk_78dbacd39fb1e3331dd2df342cf7cb798e32a587187049f1f2bc2a18e9afd7ce",
        }
    })
    return response.json()
}

// type of storing items in a cookie 
// {"id":{"q":1},...}
// {"1":{"q":2},"2":{"q":1}}

const ProductWrapper = async ({url,topic,path}:{url:string,topic:string,path:string}) => {
    const response = await fetchData(url);
    const products:shopType[] = response.products
    const productlength = products.length
    
    return ( 
        <div>

            <div className="px-[47px] xl:px-[87px]">
                <div className="my-10">
                    <Link href='/' className="flex items-center gap-2">
                        <div><FaArrowLeft /></div>
                        <p>{path}</p>
                    </Link>
                    <p className="mt-2 text-4xl">{topic}</p>
                </div>
                <div>
                    <p className="text-lightLight">{productlength} Products</p>
                    <Filter />
                </div>
                <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {products.map((product,i)=>{
                        return (
                            <div key={i}>
                                <div className="mb-5 w-full relative group">
                                    <Link href={`/shop/${product.title.replaceAll(' ', '-')}`}>
                                    <Image className="w-full h-80 sm:h-[500px]" src={product.thumbnail} width={400} height={1000} alt={`prodcut${i}`} priority/>
                                    </Link>
                                    <div className="bg-foreground w-12 rounded-full h-12 absolute bottom-3 right-3 flex justify-center items-center transition-opacity duration-300 sm:opacity-0 group-hover:opacity-100"><IoCartOutline size={25} className="text-background"/></div>
                                </div>
                                <div className="text-center">
                                    <Link href={`/shop/${product.title.replaceAll(' ', '-')}`}>
                                    <p>{product.title}</p>
                                    </Link>
                                    <p className="font-bold my-5">€120</p>
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
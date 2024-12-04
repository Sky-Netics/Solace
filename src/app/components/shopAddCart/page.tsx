'use client'
import { addToCart } from "@/app/action/cartActions";
import { IoCartOutline } from "react-icons/io5";

const ShopAddCart = ({id}:{id:string}) => {
    return (
        <div onClick={()=>addToCart(id)} className="bg-foreground w-12 rounded-full h-12 absolute bottom-3 right-3 flex justify-center items-center transition-opacity duration-300 sm:opacity-0 group-hover:opacity-100"><IoCartOutline size={25} className="text-background"/></div>
     );
}
 
export default ShopAddCart;
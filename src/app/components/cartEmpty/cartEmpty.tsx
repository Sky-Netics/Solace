import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const CartEmpty = () => {
    return ( 
        <div className="flex flex-col justify-center items-center text-center pt-16">
            <div><IoCartOutline size={60} className="text-foreground"/></div>
            <div className="my-5">
                <p className="text-xl mb-2">Your Shopping cart is empty</p>
                <p className="text-lightLight">Are you looking for inspiration</p>
            </div>
            <div className="mt-3">
                <Link href='/' className="bg-foreground text-background p-3 rounded-3xl">Explore Home Page</Link>
            </div>
        </div>
     );
}
 
export default CartEmpty;
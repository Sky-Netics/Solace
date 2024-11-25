"use client"

import { useState } from "react";
import CarouselComponent from "../components/CarouselComponent/CarouselComponent";
import CartEmpty from "../components/cartEmpty/cartEmpty";
import CartItem from "../components/cartItem/cartItem";

const Cart = () => {
    const [empty,setEmpty] = useState(false);

    return ( 
        <div className="bg-lightDark">
            {
            empty ? <CartEmpty />
            : <CartItem />
            }
            <div className="pt-24">
                <CarouselComponent title="You may also like"/>
            </div>
        </div>
     );
}
 
export default Cart;
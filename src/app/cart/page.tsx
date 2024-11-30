"use client"

import {  useState } from "react";
import CarouselComponent from "../components/CarouselComponent/CarouselComponent";
import CartEmpty from "../components/cartEmpty/cartEmpty";
import CartItem from "../components/cartItem/cartItem";

const Cart = () => {
    const [products,setProducts] = useState([
        {src:"/assets/Carousel-Images/3.jpg",title:"Ashton - Oak Recliner",color:"Caramel",price:"1400.00",quantity:"1"},
        {src:"/assets/green-chair.jpg",title:"Savannah - Teak Dining Chair",color:"Bottle green",price:"499.00",quantity:"2"},
        {src:"/assets/Carousel-Images/1.jpg",title:"Ashton - Wooden Chair",color:"Brown",price:"399.00",quantity:"3"}
    ])

    return ( 
        <div className="bg-background">
            {
            products.length === 0 ? <CartEmpty />
            : <CartItem products={products} setProducts={setProducts}/>
            }
            <div className="pt-24">
                <CarouselComponent title="You may also like"/>
            </div>
        </div>
     );
}
 
export default Cart;
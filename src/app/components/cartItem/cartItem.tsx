import Image from "next/image";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

const CartItem = () => {
    const [products,setProducts] = useState([
        {src:"/assets/Carousel-Images/3.jpg",title:"Ashton - Oak Recliner",color:"Caramel",price:"1,400.00",quantity:1},
        {src:"/assets/green-chair.jpg",title:"Savannah - Teak Dining Chair",color:"Bottle green",price:"499.00",quantity:2},
        {src:"/assets/Carousel-Images/1.jpg",title:"Ashton - Wooden Chair",color:"Brown",price:"399.00",quantity:3}
    ])

    return ( 
        <div>
            <div className="layout">
            {products.map((product,i)=>{
                return (
                    <div key={i} className="bg-lightDarkTransparent mt-3">
                    <div className="flex justify-between items-center pr-4">
                        <div><Image className="w-24 h-24 object-cover" src={product.src} width={100} height={100} alt={product.title}/></div>
                        <div>
                            <p>{product.title}</p>
                            <p className="text-lightLight">{product.color}</p>
                        </div>
                        <div className="bg-lightDark w-10 h-10 flex justify-center items-center rounded-full"><FiTrash2 /></div>
                    </div>
                </div>
                )
            })}
            </div>
        </div>
     );
}
 
export default CartItem;
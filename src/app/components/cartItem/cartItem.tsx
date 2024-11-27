
import Image from "next/image";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { MdPercent } from "react-icons/md";


const CartItem = () => {
    const [selectedOption,setSelectedOption] = useState("");
    const [products,setProducts] = useState([
        {src:"/assets/Carousel-Images/3.jpg",title:"Ashton - Oak Recliner",color:"Caramel",price:"1,400.00",quantity:"1"},
        {src:"/assets/green-chair.jpg",title:"Savannah - Teak Dining Chair",color:"Bottle green",price:"499.00",quantity:"2"},
        {src:"/assets/Carousel-Images/1.jpg",title:"Ashton - Wooden Chair",color:"Brown",price:"399.00",quantity:"3"}
    ])

    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>,index:number)=>{
        const updatedProducts = [...products];
        updatedProducts[index] = { 
            ...updatedProducts[index], quantity: e.target.value, 
        };
        setProducts(updatedProducts);
    }

    return ( 
        <div>
            <div className="layout text-foreground">
                {products.map((product,i)=>{
                    return (
                        <div key={i} className="bg-transparent mt-3">
                            <div className="flex justify-between items-center pr-4">
                                <div><Image className="w-24 h-24 object-cover" src={product.src} width={100} height={100} alt={product.title}/></div>
                                <div>
                                    <p>{product.title}</p>
                                    <p className="text-lightLight">{product.color}</p>
                                </div>
                                <div className="bg-background w-10 h-10 flex justify-center items-center rounded-full"><FiTrash2 className="text-foreground"/></div>
                            </div>
                            <div className="text-center">
                                <p>€ {product.price}</p>
                                <div className="border w-24 mx-auto my-2 p-2">
                                    <select className="w-full mx-auto" value={product.quantity} onChange={e=>handleChange(e,i)}>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="mt-16">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div><MdPercent size={32} /></div>
                            <div><p className="text-2xl">Have Promo code ?</p></div>
                        </div>
                        <div><BiChevronDown size={32} /></div>
                    </div>
                    <div>
                        <div><input type="text" placeholder="Enter promo code" /></div>
                        <div><button className="bg-lightLight text-black w-20 h-10">Active</button></div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default CartItem;
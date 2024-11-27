import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { MdPercent } from "react-icons/md";
import productType from "@/app/interFaces/productType";

interface CartItemProps{
    products: productType[],
    setProducts: React.Dispatch<React.SetStateAction<productType[]>>
}

const CartItem:React.FC<CartItemProps> = ({products,setProducts}) => {
    
    const [totalPrice,setTotalPrice] = useState(0);

    const promoContainer = useRef<HTMLDivElement|null>(null);

    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>,index:number)=>{
        const updatedProducts = [...products];
        updatedProducts[index] = { 
            ...updatedProducts[index], quantity: e.target.value, 
        };
        setProducts(updatedProducts);
    }

    useEffect(()=>{
        countTotalPrice();
        
    },[handleChange])

    const openPromo = ()=>{
        if (promoContainer.current){
            const child = promoContainer.current.childNodes[1] as HTMLDivElement ;
            if (promoContainer.current.offsetHeight < 50){
                promoContainer.current.style.height = '140px';
                child.style.opacity = "1" ;
            }
            else{
                promoContainer.current.style.height = "40px";
                child.style.opacity = "0" ;
            }
        }
    }

    const countTotalPrice = ()=>{
        let price:number = 0 ;
        products.forEach((product)=>{
            price += (+product.price * +product.quantity)
        })
        setTotalPrice(price);
    }
    const deleteProduct = (index:number)=>{
        setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
    }

    return ( 
        <div>
            <div className="layout text-foreground md:flex md:gap-5">
                <div className="md:w-1/2">
                    {products.map((product,i)=>{
                        return (
                            <div key={i} className="bg-transparent mt-3">
                                <div className="flex items-start justify-between pr-4">
                                    <div className="flex gap-5">
                                        <div><Image className="w-24 h-24 lg:w-36 lg:h-36 object-cover" src={product.src} width={100} height={100} alt={product.title}/></div>
                                        <div>
                                            <p>{product.title}</p>
                                            <p className="text-lightLight">{product.color}</p>
                                            <div>
                                                <p>€ {product.price}</p>
                                                <div className="border w-24 my-2 p-2">
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
                                    </div>
                                    <div onClick={e=>deleteProduct(i)} className="bg-background w-10 h-10 flex justify-center items-center rounded-full"><FiTrash2 className="text-foreground"/></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="md:w-1/2 lg:w-1/3 lg:ml-auto">
                    <div ref={promoContainer} style={{height:"40px"}} className="mt-16 transition-all duration-500 overflow-hidden">
                        <div onClick={openPromo} className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div><MdPercent size={32} /></div>
                                <div><p className="text-2xl">Have Promo code ?</p></div>
                            </div>
                            <div><BiChevronDown size={32} /></div>
                        </div>
                        <div style={{opacity:0}} className="mt-8 flex items-center gap-5 duration-500 transition-opacity">
                            <div className="w-full"><input className="w-full h-12 placeholder:pl-4 border border-lightDark" type="text" placeholder="Enter promo code" /></div>
                            <div><button className="ml-auto bg-lightLight text-black w-24 h-12 rounded-3xl">Active</button></div>
                        </div>
                    </div>    
                    <div>
                        <div className="flex justify-between mt-6">
                            <p className="text-lightLight">Subtotal (excl, shipping and taxes)</p>
                            <p className="text-foreground whitespace-nowrap">€ {totalPrice}.00</p>
                        </div>
                        <div className="flex justify-between mt-2">
                            <p className="text-lightLight">Delivery</p>
                            <p className="text-foreground whitespace-nowrap">€ 0.00</p>
                        </div>
                        <div className="flex justify-between mt-2">
                            <p className="text-lightLight">Taxes</p>
                            <p className="text-foreground whitespace-nowrap">€ 0.00</p>
                        </div>
                        <div className="flex justify-between mt-12">
                            <p className="text-lightLight">Total</p>
                            <p className="text-foreground whitespace-nowrap">€ {totalPrice}.00</p>
                        </div>
                        <div className="mt-6">
                            <button className="bg-foreground text-background h-14 w-full rounded-3xl">Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default CartItem;
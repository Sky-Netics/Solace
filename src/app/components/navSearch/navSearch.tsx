'use clients'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiSearch } from "react-icons/fi";

interface FunctionProps{
    func:()=>void
}

const NavSearch: React.FC<FunctionProps> = ({func}) => {

    const router = useRouter()

    const [recentSearch,setRecent] = useState<string[]>([]);

    const result = useRef<HTMLParagraphElement|null>(null);
    const recommended = useRef<HTMLParagraphElement|null>(null);
    const resultPage = useRef<HTMLParagraphElement|null>(null);
    const recommendedPage = useRef<HTMLParagraphElement|null>(null);

    const clicked = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if (e.key === "Enter"){
            let newSearch = e.currentTarget.value
            newSearch = newSearch.split(" ").join("-") ;
            setRecent((prevSearch)=>{
                const updatedSearch = [...prevSearch, newSearch];
                localStorage.setItem("prevSearch", JSON.stringify(updatedSearch));
                router.push(`/result/${newSearch}`)
                func()
                return updatedSearch ;
            })
        }
    }

    useEffect(()=>{
        const prevSearch = localStorage.getItem("prevSearch");
        if (prevSearch !== null){
            setRecent(JSON.parse(prevSearch))
        }
    },[])

    const openRecommended = ()=>{
        if (window.innerWidth < 768){
            resultPage.current?.classList.add("hidden");
            result.current?.classList.add("opacity-50");
            recommended.current?.classList.remove("opacity-50");
            recommendedPage.current?.classList.remove("hidden");
        }
    }
    const openResult = ()=>{
        if (window.innerWidth < 768){
            recommendedPage.current?.classList.add("hidden");
            recommended.current?.classList.add("opacity-50");
            result.current?.classList.remove("opacity-50");
            resultPage.current?.classList.remove("hidden");
        }
    }

    return ( 
        <div onMouseLeave={func} className="bg-background absolute left-0 top-0 bottom-0 py-6 h-screen md:h-[480px] w-full z-10 lg:px-14">
            <div className="flex md:grid md:grid-cols-[160px,1fr,160px] px-4 md:px-10 justify-between items-center gap-4 md:gap-10">
                <div className="w-10 md:hidden"><FiArrowLeft onClick={func} size={20} className="text-foreground"/></div>
                <div onMouseEnter={func} className="hidden md:block">
                    <svg className="w-40" viewBox="0 0 1329 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100.693 234C48.4751 234 8.65903 207.025 0.5 159.575H33.1361C43.9061 189.8 65.4459 202.8 101.672 202.8C136.919 202.8 160.743 188.825 160.743 168.35C160.743 150.475 145.731 140.4 108.852 132.925L84.0485 128.375C31.8307 118.95 7.35359 96.525 6.70087 64.35C6.04814 25.675 42.927 0 97.4293 0C143.12 0 180.978 23.075 192.074 65H157.806C148.668 42.25 123.538 31.2 95.7975 31.2C61.5296 31.2 40.3161 43.875 40.3161 64.675C40.3161 81.575 55.6551 91.65 89.923 97.5L114.726 101.725C170.861 111.15 194.032 133.9 194.359 167.05C194.685 206.7 156.174 234 100.693 234Z" fill="currentColor"></path>
                        <path d="M334.883 234C267.652 234 215.761 182.975 215.761 117C215.761 51.025 267.652 0 334.883 0C402.113 0 454.005 51.025 454.005 117C454.005 182.975 402.113 234 334.883 234ZM334.883 202.8C382.858 202.8 419.737 165.425 419.737 117C419.737 68.575 382.858 31.2 334.883 31.2C286.908 31.2 250.029 68.575 250.029 117C250.029 165.425 286.908 202.8 334.883 202.8Z" fill="currentColor"></path>
                        <path d="M530.801 199.55H651.555V230.75H498.165V3.25H530.801V199.55Z" fill="currentColor"></path>
                        <path d="M865.712 230.75L837.971 178.75H722.113L693.067 230.75H656.514L765.193 41.6L744.632 3.25H783.469L904.549 230.75H865.712ZM739.084 148.85H821.98L781.837 72.8L739.084 148.85Z" fill="currentColor"></path>
                        <path d="M909.279 117C909.279 51.025 960.191 0 1026.44 0C1077.03 0 1119.46 30.875 1134.47 78H1098.24C1085.19 50.05 1060.71 31.2 1026.44 31.2C979.446 31.2 943.547 68.575 943.547 117C943.547 165.425 979.446 202.8 1026.44 202.8C1060.71 202.8 1085.19 183.95 1098.24 156H1134.47C1119.46 203.125 1077.03 234 1026.44 234C960.191 234 909.279 182.975 909.279 117Z" fill="currentColor"></path>
                        <path d="M1328.5 33.8H1207.75V101.725H1318.71V132.275H1207.75V200.2H1328.5V230.75H1175.11V3.25H1328.5V33.8Z" fill="currentColor"></path>
                    </svg>
                </div>
                <div className="flex h-12 w-full max-w-[570px] mx-auto border-foreground border items-center gap-1 px-2">
                    <div className="w-10"><FiSearch size={20} className="text-foreground"/></div>
                    <div className="w-full"><input onKeyDown={e=>clicked(e)} type="text" className="w-full text-foreground focus:outline-none bg-transparent" placeholder="Search products..."/></div>
                </div>
                <div></div>
            </div>
            <div className="flex text-center md:text-left md:px-5 mt-8">
                <p ref={result} onClick={openResult} className="w-full pb-4 md:pb-0 border-foreground border-b md:opacity-50 md:border-none">Search result</p>
                <p ref={recommended} onClick={openRecommended} className="w-full pb-4 md:pb-0 border-foreground opacity-50 border-b md:border-none">Recommended</p>
            </div>
            <div className="p-5 md:flex">
                <div ref={resultPage} className="md:w-2/5 md:h-80 overflow-y-auto">
                    {recentSearch.length > 0 ?
                    recentSearch.map((recent,i)=>{
                        return (
                            <div key={i} className="flex p-2 md:p-0 md:pb-3 items-center gap-4">
                                <FiSearch size={18}/>
                                <Link onClick={func} href={`/result/${recent}`}><p className="text-lg cursor-pointer">{recent}</p></Link>
                            </div>
                        )
                    })
                    :
                    <p className="text-lightLight">No search History</p>
                    }
                </div>
                <div ref={recommendedPage} className="space-y-3 p-3 hidden md:block md:w-3/5 lg:grid lg:grid-cols-2 lg:space-y-0 items-center lg:gap-x-2">
                    <div className="flex gap-3 h-fit cursor-pointer hover:bg-gray-200">
                        <div><Image className="w-24 h-24" src={'/assets/Carousel-Images/1.jpg'} width={140} height={140} alt="chair"/></div>
                        <div className="mt-2">
                            <p>Ashton - Wooden Chair</p>
                            <p className="text-lightLight">Brown</p>
                        </div>
                    </div>
                    <div className="flex gap-3 h-fit cursor-pointer hover:bg-gray-200">
                        <div><Image className="w-24 h-24" src={'/assets/Carousel-Images/2.jpg'} width={140} height={140} alt="chair2"/></div>
                        <div className="mt-2">
                            <p>Savannah - Wooden Chair</p>
                            <p className="text-lightLight">Caramel</p>
                        </div>
                    </div>
                    <div className="flex gap-3 h-fit cursor-pointer hover:bg-gray-200">
                        <div><Image className="w-24 h-24" src={'/assets/Carousel-Images/1.jpg'} width={140} height={140} alt="chair"/></div>
                        <div className="mt-2">
                            <p>Ashton - Oak Recliner</p>
                            <p className="text-lightLight">Caramel</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NavSearch;
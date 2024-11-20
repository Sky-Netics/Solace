'use client'
import { FaChevronDown } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";

const Filter = () => {
    const openFilter = ()=>{
        
    }
    const closeFilter = ()=>{

    }

    return (
        <div>
            <div className="fixed hidden w-screen h-screen top-0 left-0 bg-white z-50 divide-y-2">
                <div className="flex justify-between items-center px-3 h-12">
                    <p>Filters</p>
                    <div><IoMdClose onClick={closeFilter} /></div>
                </div>
                <div className="divide-y-2 px-3">
                    <div className="flex justify-between items-center h-14">
                        <p>Collections</p>
                        <div><FaChevronDown /></div>
                    </div>
                    <div className="flex justify-between items-center h-14">
                        <p>Product Type</p>
                        <div><FaChevronDown /></div>
                    </div>
                    <div className="flex justify-between items-center h-14">
                        <p>Material</p>
                        <div><FaChevronDown /></div>
                    </div>
                    <div className="flex justify-between items-center h-14">
                        <p>Price</p>
                        <div><FaChevronDown /></div>
                    </div>
                </div>
                <div className="absolute w-full px-3 flex justify-between gap-3 pt-4 bottom-3">
                    <div className="py-3 px-7 rounded-2xl bg-gray-200">Clear Filters</div>
                    <div className="py-3 px-7 rounded-2xl bg-black text-white">Clear Filters</div>
                </div>
            </div>
            <div className="w-full flex gap-3 my-5">
                <div onClick={openFilter} className="bg-gray-300 w-full flex gap-2 justify-center items-center py-3 rounded-3xl">
                    <div><IoFilterSharp /></div>
                    <p>Filters</p>
                </div>
                <div className="bg-gray-300 w-full flex gap-2 justify-center items-center py-3 rounded-3xl">
                    <div><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Sort icon</title><path fillRule="evenodd" clipRule="evenodd" d="M5.64139 2.89155C5.88547 2.64748 6.2812 2.64748 6.52528 2.89155L9.85861 6.22489C10.1027 6.46897 10.1027 6.86469 9.85861 7.10877C9.61453 7.35285 9.2188 7.35285 8.97472 7.10877L6.70833 4.84238V16.6668C6.70833 17.012 6.42851 17.2918 6.08333 17.2918C5.73816 17.2918 5.45833 17.012 5.45833 16.6668V4.84238L3.19194 7.10877C2.94786 7.35285 2.55214 7.35285 2.30806 7.10877C2.06398 6.86469 2.06398 6.46897 2.30806 6.22489L5.64139 2.89155ZM14.4167 2.7085C14.7618 2.7085 15.0417 2.98832 15.0417 3.3335V15.1579L17.3081 12.8916C17.5521 12.6475 17.9479 12.6475 18.1919 12.8916C18.436 13.1356 18.436 13.5314 18.1919 13.7754L14.8586 17.1088C14.6145 17.3528 14.2188 17.3528 13.9747 17.1088L10.6414 13.7754C10.3973 13.5314 10.3973 13.1356 10.6414 12.8916C10.8855 12.6475 11.2812 12.6475 11.5253 12.8916L13.7917 15.1579V3.3335C13.7917 2.98832 14.0715 2.7085 14.4167 2.7085Z" fill="currentColor"></path></svg></div>
                    <p>Sort</p>
                </div>
            </div>
        </div>
     );
}
 
export default Filter;
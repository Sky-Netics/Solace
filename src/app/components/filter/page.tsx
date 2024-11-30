'use client'
import { useRef } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";


const Filter = () => {
    const filterPage = useRef<HTMLDivElement|null>(null);

    const Collections = useRef<HTMLDivElement|null>(null);
    const ProductType = useRef<HTMLDivElement|null>(null);
    const Material = useRef<HTMLDivElement>(null)
    const Price = useRef<HTMLDivElement>(null)
    
    const openFilter = ()=>{
        filterPage.current?.classList.remove("hidden");
        filterPage.current?.classList.add("flex");

    }
    const closeFilter = ()=>{
        filterPage.current?.classList.remove("flex");
        filterPage.current?.classList.add("hidden");
    }


    const filter = (e:React.MouseEvent<HTMLInputElement>)=>{
        if (e.currentTarget.checked) 
            "doamin?query=" + e.currentTarget.name
            // send get request with 
    }

    const openFilterDropDown = (e:React.MouseEvent<HTMLDivElement>)=>{
        const child = e.currentTarget.childNodes[2] as HTMLElement;
        child.classList.remove("hidden");
    }
    const closeFilterDropDown = (e:React.MouseEvent<HTMLDivElement>)=>{
        const child = e.currentTarget.childNodes[2] as HTMLElement;
        child.classList.add("hidden");
    }

    const clearFilter = ()=>{
        document.querySelectorAll<HTMLInputElement>("[name=filter-checkbox]").forEach((e)=>{
            e.checked = false;
        })
    }

    const openCollections = ()=>{
        const div = Collections.current
        const arrow = document.getElementsByClassName("collection-arrow")[0] as SVGElement
        if (div){
            if (div.offsetHeight < 10){
                div.style.height = "140px";
                arrow.classList.add("rotate-180");
            }else{
                div.style.height = "0";
                arrow.classList.remove("rotate-180");
            }
        }

    }
    const openProductType = ()=>{
        const div = ProductType.current
        const arrow = document.getElementsByClassName("product-arrow")[0] as SVGElement
        if (div){
            if (div.offsetHeight < 10){
                div.style.height = "250px";
                arrow.classList.add("rotate-180");
            }else{
                div.style.height = "0";
                arrow.classList.remove("rotate-180");
            }
        }
    }
    const openMaterial = ()=>{
        const div = Material.current
        const arrow = document.getElementsByClassName("material-arrow")[0] as SVGElement
        if (div){
            if (div.offsetHeight < 10){
                div.style.height = "80px";
                arrow.classList.add("rotate-180");
            }else{
                div.style.height = "0";
                arrow.classList.remove("rotate-180");
            }
        }
    }
    const openPrice = ()=>{
        const div = Price.current
        const arrow = document.getElementsByClassName("price-arrow")[0] as SVGElement
        if (div){
            if (div.offsetHeight < 10){
                div.style.height = "180px";
                arrow.classList.add("rotate-180");
            }else{
                div.style.height = "0";
                arrow.classList.remove("rotate-180");
            }
        }
    }
        


    return (<>
        <div className="sm:hidden">
            <div ref={filterPage} className="fixed hidden flex-col justify-between w-screen h-screen overflow-y-auto bg-background text-foreground top-0 left-0 bottom-0 z-50 divide-y">
                <div>
                    <div className="flex justify-between items-center px-3 h-12">
                        <p>Filters</p>
                        <div><IoMdClose onClick={closeFilter} /></div>
                    </div>
                    <div className="px-3">
                        <div onClick={openCollections} className="mt-4">
                            <div className="flex justify-between items-center">
                                <p>Collections</p>
                                <div><FaChevronDown className="collection-arrow transition-all" /></div>
                            </div>
                            <div ref={Collections} style={{height:0}} className="mt-4 transition-all overflow-hidden">
                                <div className="flex flex-row-reverse justify-end px-10 mb-6 gap-3 text-lg">
                                    <label htmlFor="Ashton">Ashton</label>
                                    <input type="checkbox" name="filter-checkbox" onClick={e=>filter(e)} className="w-5 accent-black" id="Ashton" />
                                </div>
                                <div className="flex flex-row-reverse justify-end px-10 mb-6 gap-3 text-lg">
                                    <label htmlFor="Savannah">Savannah</label>
                                    <input type="checkbox" name="filter-checkbox" onClick={e=>filter(e)} className="w-5 accent-black" id="Savannah" />
                                </div>
                                <div className="flex flex-row-reverse justify-end px-10 mb-6 gap-3 text-lg">
                                    <label htmlFor="Winsdor">Winsdor</label>
                                    <input type="checkbox" name="filter-checkbox" onClick={e=>filter(e)} className="w-5 accent-black"  id="Winsdor" />
                                </div>
                            </div>
                        </div>
                        <hr className="opacity-30" />
                        <div onClick={openProductType} className="mt-4">
                            <div className="flex justify-between items-center">
                                <p>Product Type</p>
                                <div><FaChevronDown className="transition-all product-arrow" /></div>
                            </div>
                            <div ref={ProductType} style={{height:0}} className="transition-all overflow-hidden mt-4">
                                <div className="flex flex-row-reverse justify-end px-10 mb-6 gap-3 text-lg">
                                    <label htmlFor="Barstools">Barstools</label>
                                    <input type="checkbox" name="filter-checkbox" onClick={e=>filter(e)} className="w-5 accent-black" id="Barstools" />
                                </div>
                                <div className="flex flex-row-reverse justify-end px-10 mb-6 gap-3 text-lg">
                                    <label htmlFor="Benches">Benches</label>
                                    <input type="checkbox" name="filter-checkbox" onClick={e=>filter(e)} className="w-5 accent-black" id="Benches" />
                                </div>
                                <div className="flex flex-row-reverse justify-end px-10 mb-6 gap-3 text-lg">
                                    <label htmlFor="DiningChairs">Dining Chairs</label>
                                    <input type="checkbox" name="filter-checkbox" onClick={e=>filter(e)} className="w-5 accent-black" id="DiningChairs" />
                                </div>
                                <div className="flex flex-row-reverse justify-end px-10 mb-6 gap-3 text-lg">
                                    <label htmlFor="LoungeChairs">Lounge Chairs</label>
                                    <input type="checkbox" name="filter-checkbox" onClick={e=>filter(e)} className="w-5 accent-black" id="LoungeChairs" />
                                </div>
                                <div className="flex flex-row-reverse justify-end px-10 mb-6 gap-3 text-lg">
                                    <label htmlFor="Sofas">Sofas</label>
                                    <input type="checkbox" name="filter-checkbox" onClick={e=>filter(e)} className="w-5 accent-black" id="Sofas" />
                                </div>
                                <div className="flex flex-row-reverse justify-end px-10 mb-6 gap-3 text-lg">
                                    <label htmlFor="SwivelChairs">Swivel Chairs</label>
                                    <input type="checkbox" name="filter-checkbox" onClick={e=>filter(e)} className="w-5 accent-black" id="SwivelChairs" />
                                </div>
                            </div>
                        </div>
                        <hr className="opacity-30" />
                        <div onClick={openMaterial} className="mt-4">
                            <div className="flex justify-between items-center">
                                <p>Material</p>
                                <div><FaChevronDown className="transition-all material-arrow" /></div>
                            </div>
                            <div ref={Material} style={{height:0}} className="mt-4 transition-all overflow-hidden">
                                <div className="flex flex-row-reverse justify-end px-10 mb-6 gap-3 text-lg">
                                    <label htmlFor="Leather">Leather</label>
                                    <input type="checkbox" name="filter-checkbox" onClick={e=>filter(e)} className="w-5 accent-black" id="Leather" />
                                </div>
                                <div className="flex flex-row-reverse justify-end px-10 mb-6 gap-3 text-lg">
                                    <label htmlFor="Wood">Wood</label>
                                    <input type="checkbox" name="filter-checkbox" onClick={e=>filter(e)} className="w-5 accent-black" id="Wood" />
                                </div>
                            </div>
                        </div>
                        <hr className="opacity-30" />
                        <div onClick={openPrice} className="mt-4">
                            <div className="flex justify-between items-center">
                                <p>Price</p>
                                <div><FaChevronDown className="transition-all price-arrow"/></div>
                            </div>
                            <div ref={Price} style={{height:0}} className="mt-4 transition-all overflow-hidden">
                                <div className="flex flex-row-reverse justify-end px-10 mb-6 gap-3 text-lg">
                                    <label htmlFor="Under100">Under $100</label>
                                    <input type="checkbox" name="filter-checkbox" onClick={e=>filter(e)} className="w-5 accent-black" id="Under100" />
                                </div>
                                <div className="flex flex-row-reverse justify-end px-10 mb-6 gap-3 text-lg">
                                    <label htmlFor="100-500">$100-$500</label>
                                    <input type="checkbox" name="filter-checkbox" onClick={e=>filter(e)} className="w-5 accent-black" id="100-500" />
                                </div>
                                <div className="flex flex-row-reverse justify-end px-10 mb-6 gap-3 text-lg">
                                    <label htmlFor="501-1000">$501-$1000</label>
                                    <input type="checkbox" name="filter-checkbox" onClick={e=>filter(e)} className="w-5 accent-black" id="501-1000" />
                                </div>
                                <div className="flex flex-row-reverse justify-end px-10 mb-6 gap-3 text-lg">
                                    <label htmlFor="1001">$1001+</label>
                                    <input type="checkbox" name="filter-checkbox" onClick={e=>filter(e)} className="w-5 accent-black" id="1001" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full px-3 flex justify-between gap-3 pt-4">
                    <div onClick={clearFilter} className="py-3 px-7 rounded-2xl bg-background bg-gray-300 dark:bg-gray-900 text-foreground">Clear Filters</div>
                    <div onClick={closeFilter} className="py-3 px-7 rounded-2xl bg-foreground text-background">View Products</div>
                </div>
            </div>
            <div className="w-full flex gap-3 my-5">
                <div onClick={openFilter} className="bg-gray-300 dark:bg-gray-900 h-12 text-foreground w-full flex gap-2 justify-center items-center py-3 rounded-3xl">
                    <div><IoFilterSharp /></div>
                    <p>Filters</p>
                </div>
                <div onMouseEnter={e=>openFilterDropDown(e)} onMouseLeave={e=>closeFilterDropDown(e)} className="relative w-full">
                    <div className="bg-gray-300 dark:bg-gray-900 h-12 text-foreground w-full flex gap-2 justify-center items-center py-3 rounded-3xl">
                        <div><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Sort icon</title><path fillRule="evenodd" clipRule="evenodd" d="M5.64139 2.89155C5.88547 2.64748 6.2812 2.64748 6.52528 2.89155L9.85861 6.22489C10.1027 6.46897 10.1027 6.86469 9.85861 7.10877C9.61453 7.35285 9.2188 7.35285 8.97472 7.10877L6.70833 4.84238V16.6668C6.70833 17.012 6.42851 17.2918 6.08333 17.2918C5.73816 17.2918 5.45833 17.012 5.45833 16.6668V4.84238L3.19194 7.10877C2.94786 7.35285 2.55214 7.35285 2.30806 7.10877C2.06398 6.86469 2.06398 6.46897 2.30806 6.22489L5.64139 2.89155ZM14.4167 2.7085C14.7618 2.7085 15.0417 2.98832 15.0417 3.3335V15.1579L17.3081 12.8916C17.5521 12.6475 17.9479 12.6475 18.1919 12.8916C18.436 13.1356 18.436 13.5314 18.1919 13.7754L14.8586 17.1088C14.6145 17.3528 14.2188 17.3528 13.9747 17.1088L10.6414 13.7754C10.3973 13.5314 10.3973 13.1356 10.6414 12.8916C10.8855 12.6475 11.2812 12.6475 11.5253 12.8916L13.7917 15.1579V3.3335C13.7917 2.98832 14.0715 2.7085 14.4167 2.7085Z" fill="currentColor"></path></svg></div>
                        <p>Sort</p>
                    </div>
                    <div className="w-full h-2"></div>
                    <div className="absolute hidden -left-14 border z-10 w-52 space-y-3 bg-background text-foreground py-4 px-8">
                        <p>Relevance</p>
                        <p>New in</p>
                        <p>Price: Low-High</p>
                        <p>Price: High-Low</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="hidden sm:flex flex-col lg:flex-row lg:justify-between gap-2 my-3">
            <div className="flex gap-x-2">
                <div onMouseEnter={e=>openFilterDropDown(e)} onMouseLeave={closeFilterDropDown} className="relative">
                    <div className="flex bg-background text-foreground border-lightLight border gap-6 items-center p-3">
                        <p>Collections</p>
                        <FiChevronDown />
                    </div>
                    <div className="w-full h-2"></div>
                    <div className="absolute hidden z-10 w-full border border-lightDark bg-background text-foreground px-4 py-2 space-y-1">
                        <p>Ashton</p>
                        <p>Savannah</p>
                        <p>Winsdor</p>
                    </div>
                </div>
                <div onMouseEnter={e=>openFilterDropDown(e)} onMouseLeave={closeFilterDropDown} className="relative">
                    <div className="flex bg-background text-foreground border-lightLight border gap-6 items-center p-3">
                        <p>Product Type</p>
                        <FiChevronDown />
                    </div>
                    <div className="w-full h-2"></div>
                    <div className="absolute hidden z-10 w-full border border-lightDark bg-background text-foreground px-4 py-2 space-y-1">
                        <p>Barstools</p>
                        <p>Benches</p>
                        <p>DiningChairs</p>
                        <p>LoungeChairs</p>
                        <p>Sofas</p>
                        <p>SwivelChairs</p>
                    </div>
                </div>
                <div onMouseEnter={e=>openFilterDropDown(e)} onMouseLeave={closeFilterDropDown} className="relative">
                    <div className="flex bg-background text-foreground border-lightLight border gap-6 items-center p-3">
                        <p>Material</p>
                        <FiChevronDown />
                    </div>
                    <div className="w-full h-2"></div>
                    <div className="absolute hidden z-10 w-full border border-lightDark bg-background text-foreground px-4 py-2 space-y-1">
                        <p>Leather</p>
                        <p>Wood</p>
                    </div>
                </div>
                <div onMouseEnter={e=>openFilterDropDown(e)} onMouseLeave={closeFilterDropDown} className="relative">
                    <div className="flex bg-background text-foreground border-lightLight border gap-10 items-center p-3">
                        <p>Price</p>
                        <FiChevronDown />
                    </div>
                    <div className="w-full h-2"></div>
                    <div className="absolute hidden z-10 w-full border border-lightDark bg-background text-foreground px-4 py-2 space-y-1">
                        <p>Under $100</p>
                        <p>$100-$500</p>
                        <p>$501-$1000</p>
                        <p>$1001+</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lightLight">Sort by:</p>
                <div onMouseEnter={e=>openFilterDropDown(e)} onMouseLeave={closeFilterDropDown} className="relative">
                    <div className="flex bg-background text-foreground border-lightLight border gap-6 items-center p-3">
                        <p>Relevance</p>
                        <FiChevronDown />
                    </div>
                    <div className="w-full h-2"></div>
                    <div className="absolute hidden z-10 w-full border border-lightDark bg-background text-foreground px-4 py-2 space-y-1">
                        <p>Ashton</p>
                        <p>Savannah</p>
                        <p>Winsdor</p>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
 
export default Filter;
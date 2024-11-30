'use clients'
import { useState } from "react";
import { FiArrowLeft, FiSearch } from "react-icons/fi";

const NavSearch = () => {

    const [recentSearch,setRecent] = useState()

    return ( 
        <div className="bg-background py-6 w-full">
            <div className="flex px-4 justify-between items-center gap-4">
                <div className="w-10"><FiArrowLeft size={20} className="text-foreground"/></div>
                <div className="flex h-12 w-full border-foreground border items-center gap-1 px-2">
                    <div className="w-10"><FiSearch size={20} className="text-foreground"/></div>
                    <div className="w-full"><input type="text" className="w-full text-foreground focus:outline-none bg-transparent" placeholder="Search products..."/></div>
                </div>
            </div>
            <div className="flex text-center mt-8">
                <p className="w-full pb-4 border-white border-b">Search result</p>
                <p className="w-full pb-4 border-gray-600 border-b">Recommended</p>
            </div>
            <div>

            </div>
        </div>
     );
}
 
export default NavSearch;

const ShopList = () =>{

    return(
        <div className="w-screen h-[350px] bg-white px-[100px] flex flex-col items-start dark:bg-black">
            <button className="bg-[#0909091a] my-5 text-[14px] px-3 py-3 rounded-3xl transition hover:bg-[#09090925] ">Shop all</button>
        
            <div className="flex w-full h-full">

                <div className="w-[25%] pt-5">

                    <ul>
                        <h1 className="font-semibold mb-5 w-fit cursor-pointer hover:border-b-2 border-black">Beds</h1>

                        <li className="mb-2 text-[#6c6c6c] cursor-pointer">Bed Bses</li>
                        <li className="mb-2 text-[#6c6c6c] cursor-pointer">Single Beds</li>
                        <li className="text-[#6c6c6c] cursor-pointer">Double Beds</li>
                    </ul>

                </div>

                <div className="w-[25%]">

                    <ul>
                        <h1 className="font-semibold mb-5 w-fit cursor-pointer hover:border-b-2 border-black">Chairs</h1>

                        <li className="mb-2 text-[#6c6c6c] cursor-pointer">Barstools</li>
                        <li className="mb-2 text-[#6c6c6c] cursor-pointer">Dining Chairs</li>
                        <li className="mb-2 text-[#6c6c6c] cursor-pointer">Benches</li>
                        <li className="mb-2 text-[#6c6c6c] cursor-pointer">Swivel</li>
                        <li className="mb-2 text-[#6c6c6c] cursor-pointer">Lounge Chairs</li>
                    </ul>

                </div>

                <div className="w-[25%]">

                    <ul>
                        <h1 className="font-semibold mb-5 w-fit cursor-pointer hover:border-b-2 border-black">Sofas</h1>

                        <li className="mb-2 text-[#6c6c6c] cursor-pointer">2 Seater Sofa</li>
                        <li className="mb-2 text-[#6c6c6c] cursor-pointer">Corner Sofas</li>
                        <li className="mb-2 text-[#6c6c6c] cursor-pointer">Modular</li>
                        <li className="mb-2 text-[#6c6c6c] cursor-pointer">4 Seater Sofas</li>
                    </ul>

                </div>

                <div className="w-[25%]">

                    <ul>
                        <h1 className="font-semibold mb-5 w-fit cursor-pointer hover:border-b-2 border-black">Tables</h1>

                        <li className="mb-2 text-[#6c6c6c] cursor-pointer">Bar Tables</li>
                        <li className="mb-2 text-[#6c6c6c] cursor-pointer">Dining Tables</li>
                        <li className="mb-2 text-[#6c6c6c] cursor-pointer">RoundTables</li>
                    </ul>

                </div>
            </div>
        </div>
    )

}

export default ShopList;
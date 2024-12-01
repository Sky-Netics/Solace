import Image from "next/image";
import Image1 from '../../../../public/assets/Carousel-Images/8.jpg'
import Image2 from '../../../../public/assets/white-sofa.jpg'
import Image3 from '../../../../public/assets/green-chair.jpg'

const CollectionList = ()=>{
    return(
        <div className="w-screen h-[350px] bg-white px-[100px] flex justify-start dark:bg-black gap-2 max-xl:px-[50px]">
            
            <div className="w-1/3 h-[90%]  relative text-white">
                <Image src={Image1} alt="chair" className="w-full h-full object-cover" />
                <button className="bg-[#0e0e0e] hover:bg-[#181818] transition absolute w-[90px] h-[50px] top-12 right-9 rounded-3xl text-[14px]">Discover</button>

                <div className="absolute bottom-0 left-0 w-full p-[40px]">
                    <h1 className="text-lg text-[36px] mb-5">Windsor</h1>
                    <p className="text-sm leading-relaxed">
                        Contemporary designs with sleek lines, crafted from premium oak in a natural finish.
                    </p>
                </div>
            </div>

            <div className="w-1/3 h-[90%] relative text-white">
                <Image src={Image2} alt="chair" className="w-full h-full object-cover"/>

                <button className="bg-[#0e0e0e] hover:bg-[#181818] transition absolute w-[90px] h-[50px] top-12 right-9 rounded-3xl text-[14px]">Discover</button>

                <div className="absolute bottom-0 left-0 w-full p-[40px]">
                    <h1 className="text-lg text-[36px] mb-5">Ashton</h1>
                    <p className="text-sm leading-relaxed">
                        Contemporary designs with sleek lines, crafted from premium oak in a natural finish.
                    </p>
                </div>
            </div>

            <div className="w-1/3 h-[90%] relative text-white">
                <Image src={Image3} alt="chair" className="w-full h-full object-cover"/>

                <button className="bg-[#0e0e0e] hover:bg-[#181818] transition absolute w-[90px] h-[50px] top-12 right-9 rounded-3xl text-[14px]">Discover</button>

                <div className="absolute bottom-0 left-0 w-full p-[40px]">
                    <h1 className="text-lg text-[36px] mb-5">Savannah</h1>
                    <p className="text-sm leading-relaxed">
                        Contemporary designs with sleek lines, crafted from premium oak in a natural finish.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CollectionList;
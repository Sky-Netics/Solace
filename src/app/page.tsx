import Image from "next/image";
import Chair from '../../public/assets/chair.webp'

export default function Home() {
  return (
    <div>
      
      {/* Top image box */}
      <div className="w-full">
        <Image 
        src={Chair}
        alt="Chair photo"
        className="object-cover w-full h-[360px] max-md:h-[150px]"
        />
      </div>


      <div className="flex h-[400px] px-[80px] py-[50px] max-md:flex-col max-md:px-[10px]">

        <div className="w-1/2 flex flex-col px-6 max-xl:px-0 max-md:w-full">
            <h1 className="text-[48px] leading-tight max-xl:text-[38px]  max-lg:text-[38px]">
              Redefine your space with exquisite designer furniture
            </h1>

            <button className="bg-black text-white w-fit px-4 py-3 mt-7 rounded-3xl text-[14px] hover:bg-[#131313] transition">Explore now</button>
        </div>

        <div className="w-1/2 flex items-end  max-lg:items-center max-md:w-full">
            <p className="pl-[45%] text-right pb-9 max-lg:pl-0 max-md:text-left max-md:mt-8">
              Explore our curated selection of designer furniture. Where elegance meets comfort, transforming your home into a haven of style.
            </p>
        </div>

      </div>

    </div>
  );
}

import Image from "next/image";
import Chair from '../../public/assets/chair.webp'
import pinkChair from '../../public/assets/pink-chair.webp'
import whiteSofa from '../../public/assets/white-sofa.jpg'
import greenChair from '../../public/assets/green-chair.jpg'
import brownChair from '../../public/assets/brown-chair.png'
import CarouselComponent from "./components/CarouselComponent/CarouselComponent";
import GetInspired from "./components/GetInspired/GetInspired";
import Link from "next/link";


export default async function Home() {
  

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


      {/* Second part */}
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


      {/* Third part */}
      <div className="flex h-[660px] px-[100px] mb-[150px] max-xl:px-[50px] max-[900px]:h-[450px] max-sm:flex-col max-sm:h-[600px] max-sm:px-[15px]">

        <div className="w-1/2 flex flex-col max-sm:w-full max-sm:h-[215px]">

        <div className="h-[49%] mb-1.5 relative max-sm:h-full">
          <Image
            src={pinkChair}
            alt="Pink Chair"
            className="h-full w-full object-cover pr-2"
          />

          <Link 
              href="/collections/winsdor"
              className="absolute inset-0 z-20 max-sm:block hidden">   
          </Link>

          <div className="flex flex-col absolute inset-0 z-10 pb-4 justify-end text-white mx-[45px] mb-5 group max-sm:transition-none">
            <h1 className="text-3xl transition-transform duration-500 ease-in-out group-hover:translate-y-[-20px] translate-y-4 max-[900px]:text-xl max-sm:transition-none max-sm:group-hover:translate-y-0 max-sm:translate-y-0">
              Winsdor
            </h1>

            <p className="text-[16px] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out max-[900px]:opacity-100 max-[900px]:text-[14px] max-sm:hidden max-sm:transition-none max-sm:translate-y-0">
              Contemporary designs with sleek lines, crafted from premium oak in a natural finish.
            </p>

            <div className="absolute inset-0 flex justify-end items-start mt-10">
              <button className="bg-[#090909] text-white text-[14px] px-4 py-3 rounded-3xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out max-[900px]:opacity-100 max-sm:hidden">
                <Link href={'/collections/winsdor'}>
                  Discover
                </Link>
              </button>
            </div>
          </div>
        </div>

            
            
        <div className="h-[49%] mt-1.5 relative max-sm:h-full">
          <Image
            src={whiteSofa}
            alt="Withe sofa"
            className="h-full w-full object-cover pr-2"
          />

          <Link 
              href="/collections/ashton"
              className="absolute inset-0 z-20 max-sm:block hidden">   
          </Link>

          <div className="flex flex-col absolute inset-0 z-10 pb-4 justify-end text-white mx-[45px] mb-5 group max-sm:transition-none">
            <h1 className="text-3xl transition-transform duration-500 ease-in-out group-hover:translate-y-[-20px] translate-y-4 max-[900px]:text-xl max-sm:transition-none max-sm:group-hover:translate-y-0 max-sm:translate-y-0">
              Ashton
            </h1>

            <p className="text-[16px] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out max-[900px]:opacity-100 max-[900px]:text-[14px] max-sm:hidden max-sm:transition-none max-sm:translate-y-0">
              Contemporary designs with sleek lines, crafted from premium oak in a natural finish.
            </p>

            <div className="absolute inset-0 flex justify-end items-start mt-10">
              <button className="bg-[#090909] text-white text-[14px] px-4 py-3 rounded-3xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out max-[900px]:opacity-100 max-sm:hidden">
                <Link href={'/collections/ashton'}>
                  Discover
                </Link>
              </button>
            </div>
          </div>
        </div>

        </div>

        <div className="w-1/2 max-sm:w-full max-sm:h-[215px] max-sm:mt-[250px]">
        <div className="mb-1.5 relative h-full">
            <Image
              src={greenChair}
              alt="Green Chair"
              className="h-full w-full object-cover pr-2"
            />

          <Link 
              href="/collections/savannah"
              className="absolute inset-0 z-20 max-sm:block hidden">   
          </Link>
            
            <div className="flex flex-col absolute inset-0 z-10 pb-4 justify-end text-white mx-[45px] mb-5 group">
              <h1 className="text-3xl transition-transform duration-500 ease-in-out group-hover:translate-y-[-20px] translate-y-4 max-[900px]:text-xl max-sm:translate-y-0 max-sm:group-hover:translate-y-0">
                Savannah
              </h1>

              <p className="text-[16px] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out max-[900px]:opacity-100 max-[900px]:text-[14px] max-sm:hidden">
                Contemporary designs with sleek lines, crafted from premium oak in a natural finish.
              </p>

              <div className="absolute inset-0 flex justify-end items-start mt-10">
                <button className="bg-[#090909] text-white text-[14px] px-4 py-3 rounded-3xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out max-[900px]:opacity-100 max-sm:hidden">
                  <Link href={'/collections/savannah'}>
                    Discover
                  </Link>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>


      {/* Our bestsellers */}
        <CarouselComponent title={'Our bestsellers'}/>
          
          <div className="text-center mb-[130px]">      
            <Link href="/shop" className="mx-auto">
             <button className=" bg-[#090909] text-white px-5 py-3 rounded-3xl text-[14px]  transition-colors duration-500 hover:bg-[#171717]">View all</button>
            </Link>
          </div>


      {/* 10 years of inspiring interiors */}
        <div className="px-[100px] mb-[100px] relative max-xl:px-[50px] max-sm:px-[15px]">
          
          <Image src={brownChair} alt="Brown Chair" className="w-full h-[440px] object-cover"/>

          <div className="absolute inset-0 w-full top-0 right-0  flex justify-center items-center text-white">
            <div className="flex-col flex items-center w-[600px] max-md:w-[450px] max-sm:w-[350px] max-sm:px-5">
              <h1 className="text-[32px] mb-2 text-center">10 years of inspiring interiors</h1>
              <p className="text-center">Explore our journey of crafting exquisite designer furniture and our commitment to quality and innovation.</p>
              <Link href={'/about-us'}>
                <button className="bg-[#090909] text-white mt-8 py-3 px-4 rounded-3xl text-[14px] transition hover:bg-[#0e0e0e]">About Us</button>
              </Link>
            </div>
          </div>

        </div>

        {/* Get inspired */}
          <GetInspired />

    </div>
  );
}

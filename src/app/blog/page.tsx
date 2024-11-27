import Link from "next/link"
import CategoryBox from "../components/CategoryBox/categoryBox"
import SmallerCarousel from "../components/SmallerCarousel/SmallerCarousel"
import CarouselComponent from "../components/CarouselComponent/CarouselComponent"


const BlogPage = () =>{
    return(
        <div className="flex flex-col bg-gray-50">

        <div className="flex">
                
            <div className="w-[35%]">

                <div className="px-[100px] mb-8 mt-8">
                    <div className="mb-3 flex">
                        <Link href={'/'} className="mr-2">Home page</Link>
                        <p>/</p>
                        <p className="ml-2 text-[#656464]">Blog</p>
                    </div>
                    <h1 className="text-[46px]">Blog</h1>
                </div>

                <div className="bg-white w-[332px] mx-auto px-5 py-5">
                    <div className="border w-[292px] flex items-center pl-5 bg-gray-50">
                        <div>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5"><title>Search icon</title><path fillRule="evenodd" clipRule="evenodd" d="M9.66667 3.125C6.32995 3.125 3.625 5.82995 3.625 9.16667C3.625 12.5034 6.32995 15.2083 9.66667 15.2083C13.0034 15.2083 15.7083 12.5034 15.7083 9.16667C15.7083 5.82995 13.0034 3.125 9.66667 3.125ZM2.375 9.16667C2.375 5.13959 5.63959 1.875 9.66667 1.875C13.6937 1.875 16.9583 5.13959 16.9583 9.16667C16.9583 13.1937 13.6937 16.4583 9.66667 16.4583C5.63959 16.4583 2.375 13.1937 2.375 9.16667Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M13.9747 13.4747C14.2188 13.2306 14.6145 13.2306 14.8586 13.4747L18.4419 17.0581C18.686 17.3021 18.686 17.6979 18.4419 17.9419C18.1979 18.186 17.8021 18.186 17.5581 17.9419L13.9747 14.3586C13.7306 14.1145 13.7306 13.7188 13.9747 13.4747Z" fill="currentColor"></path></svg>
                        </div>
                        <input type="text" className="w-full py-3 focus:outline-none placeholder-[#4c4c4c] text-[14px] bg-gray-50" placeholder="Search"/>
                    </div>
                    <br />
                    <hr />

                    <CategoryBox/>
                </div>
                


            </div>

            <div className="w-[65%]   pt-[175px] pr-[100px]">

                <div className="w-full flex justify-between text-[#616161] text-[14px]">
                    <p>
                        3 posts
                    </p>

                    <div>
                        <label className="mr-5">Sort by:</label>

                        <select className="w-[200px] border text-[#333] px-3 py-4 bg-gray-50">
                            <option className="text-gray-600 bg-gray-100 py-[100px]" value="Newest">Newest</option>
                            <option className="text-gray-600 bg-gray-200" value="Oldest">Oldest</option>
                        </select>
                    </div>
                    
                </div>

                <div className="mt-7">
                    <SmallerCarousel/>
                </div>

            </div>
            

        </div>

        <div className="mt-[150px]">
            <CarouselComponent title="Recommended products"/>
        </div>

        </div>

    )
}

export default BlogPage
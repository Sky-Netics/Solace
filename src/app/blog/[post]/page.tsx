'use client'
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import TestImage from '../../../../public/assets/Carousel-Images/1.jpg'

const BlogPost = () =>{

    const params = useParams()
    const post = params.post ? (params.post as string).replace(/-/g, ' ') : "Untitled Post";


    return(
        <div className="flex flex-col px-[100px] py-10 max-md:px-5">
            
            <div>
                <div className="mb-3 flex">
                    <Link href={'/'} className="mr-2">Home page</Link>
                    <p>/</p>
                    <p className="mx-2">
                        <Link href={"/blog"}>Blog</Link>
                    </p>
                    <p>/</p>
                    <p className="text-[#656464] ml-2">{post}</p>
                </div>

                <h1 className="text-[46px] max-lg:text-[32px]">{post}</h1>

                <div className="mt-8">
                    <Image src={TestImage} alt="something" className="object-cover h-[400px]" />

                    <div className="text-[#6c6c6c] flex flex-col mb-12">

                        <p className="text-[14px] mt-8">Sep 30, 2024•1 min read</p>

                        <p className="text-[14px] mt-8">Explore creative solutions and furniture choices to make the most of your small living areas without sacrificing style.</p>

                        <p className="text-[14px] mt-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices, felis in sollicitudin suscipit, nisi dui hendrerit enim, quis vulputate est augue ac purus. Vestibulum et placerat lorem. In condimentum risus a ipsum congue, aliquet congue nisl pharetra. Pellentesque tempus ligula quis aliquet iaculis. Pellentesque facilisis consectetur turpis maximus condimentum. Integer sed porttitor nibh. Donec at viverra nibh. Curabitur feugiat, purus vitae mollis tincidunt, tellus leo vehicula lectus, et consectetur felis purus id nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean lobortis pharetra tellus. Suspendisse mauris justo, congue ut leo non, hendrerit interdum leo. Morbi scelerisque justo justo, a auctor magna blandit eget.
                        </p>

                    </div>
                    

                </div>
                    
            </div>

        </div>
    )
}

export default BlogPost
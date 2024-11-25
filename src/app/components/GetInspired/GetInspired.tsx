"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import brownSofa from '../../../../public/assets/Brown-sofa.jpg'
import creamChair from '../../../../public/assets/cream-chair.jpg'
import creamSofa from '../../../../public/assets/cream-sofa.jpg'

const GetInspired = ()=>{

    const [cardData] = useState([
        {
            img: brownSofa,
            title: 'Maximizing small spaces',
            details: 'Explore creative solutions and furniture choices to make the most of your small living areas without sacrificing style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices, felis in sollicitudin suscipit, nisi dui hendrerit enim, quis vulputate est augue ac purus. Vestibulum et placerat lorem. In condimentum risus a ipsum congue, aliquet congue nisl pharetra. Pellentesque tempus ligula quis aliquet iaculis. Pellentesque facilisis consectetur turpis maximus condimentum. Integer sed porttitor nibh. Donec at viverra nibh. Curabitur feugiat, purus vitae mollis tincidunt, tellus leo vehicula lectus, et consectetur felis purus id nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean lobortis pharetra tellus. Suspendisse mauris justo, congue ut leo non, hendrerit interdum leo. Morbi scelerisque justo justo, a auctor magna blandit eget.'
        },
        {
            img: creamChair,
            title: 'Caring for wood furniture',
            details: 'Learn essential tips and techniques for maintaining and preserving your wooden furniture for years to come. Wood furniture is a timeless addition to any home, bringing warmth and elegance to your living spaces. However, maintaining its beauty and longevity requires proper care. Here are some essential tips for caring for your wood furniture. ## Regular Dusting Dust your furniture regularly to prevent the buildup of dirt and grime. Use a soft, dry cloth, such as a microfiber cloth, which is gentle on the wood surface and effective at capturing dust. Regular dusting helps maintain the finish and keeps your furniture looking its best. ## Avoid Direct Sunlight Prolonged exposure to direct sunlight can cause wood to fade, dry out, and crack. Position your wood furniture away from windows or use window treatments like curtains or blinds to protect it from harsh sunlight. If sunlight exposure is unavoidable, consider rotating the furniture periodically to ensure even aging. ## Clean Spills Immediately Spills can cause stains and water damage if not addressed promptly. Wipe up any spills immediately with a soft, absorbent cloth. Avoid using harsh chemicals or abrasive cleaners, as these can damage the wood finish. Instead, use a mild soap solution if needed, and always dry the surface thoroughly. ## Use Coasters and Mats Protect your wood furniture from heat, moisture, and scratches by using coasters, placemats, and trivets. These protective items create a barrier between the wood and potentially damaging elements like hot dishes, cold drinks, and sharp objects.'
        },
        {
            img: creamSofa,
            title: 'Trends in designer furniture',
            details: 'Discover the latest trends shaping the world of designer furniture, from sustainable materials to bold aesthetics. Lorem test ipsum dolor sit amet, consectetur adipiscing elit.'
        },
    ])

    return(
        <div className="mx-[100px] mb-[70px] max-xl:mx-[50px]">

            <div className="flex justify-between pt-5 pb-12 ">
                <h1 className="text-[30px]">Get Inspired</h1>

                <Link href="/blog">
                    <button className="bg-gray-300 px-4 py-3 text-[14px] rounded-3xl">Read more</button>
                </Link>
            </div>

            <div className="flex gap-2 max-md:flex-col">

                {cardData.map((item)=>(
                    <div key={item.title} className='bg-gray-50 w-1/3 max-md:w-full max-md:mb-5'>
                        <Image src={item.img} alt={item.title} className='h-[290px] object-cover'/>
                        <div className='p-5'>
                            <h1 className='font-semibold'>{item.title}</h1>
                            <p className='text-[14px] text-gray-500 line-clamp-2'>{item.details}</p>
                        </div>
                    </div>
                ))}

            </div>
            
        </div>
    )
}

export default GetInspired;
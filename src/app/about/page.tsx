import Image from "next/image";

const About = () => {
    return ( 
        <div>
            <div className="layout">
                <div>
                    <div><Image src="/assets/About_Us_Banner.webp" className="object-cover w-full h-52 md:h-72" alt="About_Us_Banner" width={1000} height={400}/></div>
                    <div className="mt-6">
                        <svg width="1329" height="234" viewBox="0 0 1329 234" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
                            <path d="M100.693 234C48.4751 234 8.65903 207.025 0.5 159.575H33.1361C43.9061 189.8 65.4459 202.8 101.672 202.8C136.919 202.8 160.743 188.825 160.743 168.35C160.743 150.475 145.731 140.4 108.852 132.925L84.0485 128.375C31.8307 118.95 7.35359 96.525 6.70087 64.35C6.04814 25.675 42.927 0 97.4293 0C143.12 0 180.978 23.075 192.074 65H157.806C148.668 42.25 123.538 31.2 95.7975 31.2C61.5296 31.2 40.3161 43.875 40.3161 64.675C40.3161 81.575 55.6551 91.65 89.923 97.5L114.726 101.725C170.861 111.15 194.032 133.9 194.359 167.05C194.685 206.7 156.174 234 100.693 234Z" fill="currentColor"></path>
                            <path d="M334.883 234C267.652 234 215.761 182.975 215.761 117C215.761 51.025 267.652 0 334.883 0C402.113 0 454.005 51.025 454.005 117C454.005 182.975 402.113 234 334.883 234ZM334.883 202.8C382.858 202.8 419.737 165.425 419.737 117C419.737 68.575 382.858 31.2 334.883 31.2C286.908 31.2 250.029 68.575 250.029 117C250.029 165.425 286.908 202.8 334.883 202.8Z" fill="currentColor"></path>
                            <path d="M530.801 199.55H651.555V230.75H498.165V3.25H530.801V199.55Z" fill="currentColor"></path>
                            <path d="M865.712 230.75L837.971 178.75H722.113L693.067 230.75H656.514L765.193 41.6L744.632 3.25H783.469L904.549 230.75H865.712ZM739.084 148.85H821.98L781.837 72.8L739.084 148.85Z" fill="currentColor"></path>
                            <path d="M909.279 117C909.279 51.025 960.191 0 1026.44 0C1077.03 0 1119.46 30.875 1134.47 78H1098.24C1085.19 50.05 1060.71 31.2 1026.44 31.2C979.446 31.2 943.547 68.575 943.547 117C943.547 165.425 979.446 202.8 1026.44 202.8C1060.71 202.8 1085.19 183.95 1098.24 156H1134.47C1119.46 203.125 1077.03 234 1026.44 234C960.191 234 909.279 182.975 909.279 117Z" fill="currentColor"></path>
                            <path d="M1328.5 33.8H1207.75V101.725H1318.71V132.275H1207.75V200.2H1328.5V230.75H1175.11V3.25H1328.5V33.8Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                <div className="mt-24 md:flex md:gap-x-10 lg:gap-x-20 xl:gap-x-32">
                    <div>
                        <h1 className="text-3xl mb-3">Our Story</h1>
                        <p className="text-lightLight">At Solace, we believe that furniture is more than just functional pieces;
                            its an expression of your style and a reflection of your life.
                            For over a decade, we have been dedicated to crafting high-quality,
                            designer furniture that transforms houses into homes.
                            Our journey began with a simple vision: to create elegant,
                            timeless furniture that combines comfort and style.
                        </p>
                    </div>
                    <div className="my-5">
                        <Image className="sm:h-[400px] md:min-w-[400px] lg:min-w-[600px] object-cover" src="/assets/white-chair.webp" alt="white-chair" width={800} height={300}/>
                    </div>
                </div>
            </div>
            <div className="layout bg-lightDark">
                <p className="text-3xl mb-12">Why us?</p>
                <div className="space-y-4 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-4 lg:grid-cols-4">
                    <div className="bg-lightDarkTransparent p-6">
                        <div><Image className="w-12 h-12 rounded-full object-cover" src="/assets/Ellipse1.png" alt="user1" width={80} height={80}/></div>
                        <div className="mt-3">
                            <p>Exceptional quality</p>
                            <p className="text-lightLight">We deliver exceptional quality in every piece. Our meticulous craftsmanship and premium materials ensure durability and elegance.</p>
                        </div>
                    </div>
                    <div className="bg-lightDarkTransparent p-6">
                        <div><Image className="w-12 h-12 rounded-full object-cover" src="/assets/Ellipse2.png" alt="user2" width={80} height={80}/></div>
                        <div className="mt-3">
                            <p>Timeless design</p>
                            <p className="text-lightLight">Our furniture blends classic and contemporary styles, offering timeless pieces that enhance your home’s aesthetic for years to come.</p>
                        </div>
                    </div>
                    <div className="bg-lightDarkTransparent p-6">
                        <div><Image className="w-12 h-12 rounded-full object-cover" src="/assets/Ellipse3.png" alt="user3" width={80} height={80}/></div>
                        <div className="mt-3">
                            <p>Sustainable practices</p>
                            <p className="text-lightLight">We are dedicated to sustainable practices, using ethically sourced materials and eco-friendly processes, making a responsible choice for your home and the environment.</p>
                        </div>
                    </div>
                    <div className="bg-lightDarkTransparent p-6">
                        <div><Image className="w-12 h-12 rounded-full object-cover" src="/assets/Ellipse4.png" alt="user4" width={80} height={80}/></div>
                        <div className="mt-3">
                            <p>Tailored solutions</p>
                            <p className="text-lightLight">Every home is unique, and we offer customized furniture solutions to meet your specific needs and preferences, bringing your vision to life.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="layout md:flex md:gap-x-10 lg:gap-x-20 xl:gap-x-32">
                <div>
                    <p className="text-3xl my-3">Our craftsmanship</p>
                    <p className="text-lightLight">Quality and craftsmanship are at the heart of everything we do.
                       Each piece of Solace furniture is handcrafted by skilled artisans
                       using the finest materials. Our attention to detail ensures that
                       every item is not only beautiful but also durable and functional.
                       We blend traditional techniques with modern innovation to create
                       furniture that stands the test of time.
                    </p>
                </div>
                <div className="my-2">
                    <Image className="w-full h-60 object-cover sm:h-[400px] md:min-w-[400px]" src="/assets/two_white_chair.webp" alt="two-chair" width={600} height={200}/>
                </div>
            </div>
            <div className="layout bg-lightDark">
                <div className="text-center my-8 space-y-8 sm:space-y-0 sm:flex sm:justify-around">
                    <div>
                        <p className="text-4xl md:text-5xl">10+</p>
                        <p className="text-lightLight mt-3">Years of experience</p>
                    </div>
                    <div>
                        <p className="text-4xl md:text-5xl">500+</p>
                        <p className="text-lightLight mt-3">unique design</p>
                    </div>
                    <div>
                        <p className="text-4xl md:text-5xl">95%</p>
                        <p className="text-lightLight mt-3">customer satisfaction rate</p>
                    </div>
                    <div>
                        <p className="text-4xl md:text-5xl">100%</p>
                        <p className="text-lightLight mt-3">sustainable materials</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;
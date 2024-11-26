"use client"
import { useState } from "react"
import { motion } from "framer-motion"

const CategoryBox = () => {
    const [openCategoryBox, setOpenCategoryBox] = useState(true)

    return (
        <div>
            <div
                className="flex justify-between my-7 cursor-pointer"
                onClick={() => setOpenCategoryBox((prev) => !prev)}
            >
                <h1>Category</h1>

                <div>
                    {openCategoryBox ? (
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 rotate-180"
                        >
                            <title>Chevron down icon</title>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.55806 7.05806C4.80214 6.81398 5.19786 6.81398 5.44194 7.05806L10 11.6161L14.5581 7.05806C14.8021 6.81398 15.1979 6.81398 15.4419 7.05806C15.686 7.30214 15.686 7.69786 15.4419 7.94194L10.4419 12.9419C10.1979 13.186 9.80214 13.186 9.55806 12.9419L4.55806 7.94194C4.31398 7.69786 4.31398 7.30214 4.55806 7.05806Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    ) : (
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                        >
                            <title>Chevron down icon</title>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.55806 7.05806C4.80214 6.81398 5.19786 6.81398 5.44194 7.05806L10 11.6161L14.5581 7.05806C14.8021 6.81398 15.1979 6.81398 15.4419 7.05806C15.686 7.30214 15.686 7.69786 15.4419 7.94194L10.4419 12.9419C10.1979 13.186 9.80214 13.186 9.55806 12.9419L4.55806 7.94194C4.31398 7.69786 4.31398 7.30214 4.55806 7.05806Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    )}
                </div>
            </div>

            
            <motion.div
                className="px-5 text-[17px] overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: openCategoryBox ? "auto" : 0,
                    opacity: openCategoryBox ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="all-posts"
                        name="category"
                        value="All-posts"
                        className="mr-3 cursor-pointer w-4 h-4 accent-black"
                    />
                    <label className="cursor-pointer" htmlFor="all-posts">
                        All posts
                    </label>
                </div>
                <br />

                <div className="flex items-center">
                    <input
                        type="radio"
                        id="rankings"
                        name="category"
                        value="rankings"
                        className="mr-3 cursor-pointer w-4 h-4 accent-black"
                    />
                    <label className="cursor-pointer" htmlFor="rankings">
                        Rankings
                    </label>
                </div>
                <br />

                <div className="flex items-center">
                    <input
                        type="radio"
                        id="news"
                        name="category"
                        value="news"
                        className="mr-3 cursor-pointer w-4 h-4 accent-black"
                    />
                    <label className="cursor-pointer" htmlFor="news">
                        News
                    </label>
                </div>
                <br />

                <div className="flex items-center">
                    <input
                        type="radio"
                        id="tips"
                        name="category"
                        value="tips"
                        className="mr-3 cursor-pointer w-4 h-4 accent-black"
                    />
                    <label className="cursor-pointer" htmlFor="tips">
                        Tips
                    </label>
                </div>
            </motion.div>
        </div>
    )
}

export default CategoryBox
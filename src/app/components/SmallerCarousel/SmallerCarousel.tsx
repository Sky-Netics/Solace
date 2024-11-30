"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "../../../../public/assets/Carousel-Images/1.jpg";
import image2 from "../../../../public/assets/Carousel-Images/2.jpg";
import image3 from "../../../../public/assets/Carousel-Images/3.jpg";

interface CarouselItemProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const SmallerCarousel = () => {
  const carouselRef = useRef<AliceCarousel | null>(null);

  const [items, setItems] = useState<CarouselItemProps[]>([]);

  const [activeIndex, setActiveIndex] = useState<number | null>(1);


  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    setItems([
      {
        title: "Maximizing small spaces",
        description:
          "Explore creative solutions and furniture choices to make the most of your small living areas without sacrificing style.",
        image: image1,
      },
      {
        title: "Caring for wood furniture",
        description:
          "Learn essential tips and techniques for maintaining and preserving your wooden furniture for years to come.",
        image: image2,
      },
      {
        title: "Designing with comfort",
        description:
          "Discover how to create cozy and inviting spaces with thoughtful furniture and decor selections.",
        image: image3,
      },
    ]);
  }, []);

  const carouselItems = items.map((item, index) => (
    <div  key={index}>
        <div className="flex flex-col items-start px-1 rounded-lg">
        <Link href={`/blog/${item.title.replaceAll(' ', '-')}`} className="w-full h-[280px]">
          <Image
            src={item.image}
            alt={item.title}
            className="w-full h-[280px] object-cover"
          />
          </Link>
          <Link href={`/blog/${item.title.replaceAll(' ', '-')}`}>
            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
          </Link>
          <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
        </div>
        
    </div>
  ));

  return (
    <div className="flex flex-col items-center">
    
    <AliceCarousel
      ref={carouselRef}
      items={carouselItems}
      responsive={{
        768: { items: 1 },
        950: {items: 2}
      }}
      disableDotsControls={true}
      disableButtonsControls={true}
    />

    <div className="flex mx-auto gap-1 mt-[70px] items-center">
      
      <div
        className="mx-1 cursor-pointer"
        onClick={() => carouselRef.current?.slidePrev()}
      >
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-basic-primary"
        >
          <title>Chevron left icon</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.4419 4.55806C13.686 4.80214 13.686 5.19786 13.4419 5.44194L8.88388 10L13.4419 14.5581C13.686 14.8021 13.686 15.1979 13.4419 15.4419C13.1979 15.686 12.8021 15.686 12.5581 15.4419L7.55806 10.4419C7.31398 10.1979 7.31398 9.80214 7.55806 9.55806L12.5581 4.55806C12.8021 4.31398 13.1979 4.31398 13.4419 4.55806Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      
      <a
        className={`mx-1 px-4 py-2 rounded-3xl cursor-pointer border ${
          activeIndex === 1 ? "bg-gray-300 border-black" : "border-transparent"
        }`}
        onClick={() => {
          handleClick(1);
          carouselRef.current?.slidePrev();
        }}
      >
        1
      </a>

      
      <a
        className={`mx-1 px-4 py-2 rounded-3xl cursor-pointer border ${
          activeIndex === 2 ? "bg-gray-300 border-black" : "border-transparent"
        }`}
        onClick={() => {
          handleClick(2);
          carouselRef.current?.slideNext();
        }}
      >
        2
      </a>

     
      <div
        className="mx-1 cursor-pointer"
        onClick={() => carouselRef.current?.slideNext()}
      >
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-basic-primary"
        >
          <title>Chevron right icon</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.55806 4.55806C7.80214 4.31398 8.19786 4.31398 8.44194 4.55806L13.4419 9.55806C13.686 9.80214 13.686 10.1979 13.4419 10.4419L8.44194 15.4419C8.19786 15.686 7.80214 15.686 7.55806 15.4419C7.31398 15.1979 7.31398 14.8021 7.55806 14.5581L12.1161 10L7.55806 5.44194C7.31398 5.19786 7.31398 4.80214 7.55806 4.55806Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>

  </div>
  );
};

export default SmallerCarousel;

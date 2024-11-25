"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Image1 from '../../../../public/assets/Carousel-Images/1.jpg'
import Image2 from '../../../../public/assets/Carousel-Images/2.jpg'
import Image3 from '../../../../public/assets/Carousel-Images/3.jpg'
import Image4 from '../../../../public/assets/Carousel-Images/4.jpg'
import Image5 from '../../../../public/assets/Carousel-Images/5.jpg'
import Image6 from '../../../../public/assets/Carousel-Images/6.jpg'
import Image7 from '../../../../public/assets/Carousel-Images/7.jpg'
import Image8 from '../../../../public/assets/Carousel-Images/8.jpg'



const CarouselComponent = ({title}:{title: string}) => {
  
  const carouselRef = useRef<AliceCarousel | null>(null);

  const items = [
      <div 
        className="w-[435px] text-center max-sm:w-[390px] relative group "
        key="1"
      >
        <Image src={Image1} alt="Item 1" className="h-[504px] object-cover mb-6" />
        <p>Ashton - Wooden Chair</p>
        <p className="font-bold mt-4 text-black">€399.00</p>
        
        <div 
          className="bg-[#090909] hover:bg-[#1a1a1a] cursor-pointer text-white py-4 px-4 w-fit rounded-[50%] absolute bottom-[100px] right-5 opacity-0 scale-50 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100"
        >
          <svg 
            width="21" 
            height="20" 
            viewBox="0 0 21 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Bag icon</title>
            <path d="M6.6598 18.7083C7.433 18.7083 8.0598 18.0554 8.0598 17.25C8.0598 16.4446 7.433 15.7917 6.6598 15.7917C5.88661 15.7917 5.2598 16.4446 5.2598 17.25C5.2598 18.0554 5.88661 18.7083 6.6598 18.7083Z" fill="currentColor"></path>
            <path d="M15.4598 18.7083C16.233 18.7083 16.8598 18.0554 16.8598 17.25C16.8598 16.4446 16.233 15.7917 15.4598 15.7917C14.6866 15.7917 14.0598 16.4446 14.0598 17.25C14.0598 18.0554 14.6866 18.7083 15.4598 18.7083Z" fill="currentColor"></path>
            <path d="M18.4038 6.06665C18.2918 5.91665 18.1158 5.83332 17.9398 5.83332H4.8438L4.0918 2.17498C4.0838 2.12498 4.0678 2.07498 4.0438 2.02498C4.0038 1.94165 3.9478 1.86665 3.8758 1.80832C3.8118 1.74998 3.7318 1.70832 3.6438 1.69165C3.5958 1.67498 3.5398 1.67498 3.4918 1.67498H1.8998C1.5718 1.66665 1.2998 1.94998 1.2998 2.29165C1.2998 2.63332 1.5718 2.91665 1.8998 2.91665H3.0118L3.7638 6.59165C3.7638 6.59165 3.7638 6.60832 3.7638 6.61665L5.0278 12.775C5.1318 13.2917 5.4118 13.7667 5.8118 14.0917C6.2038 14.4083 6.6838 14.5833 7.1638 14.5833C7.1798 14.5833 7.1958 14.5833 7.2118 14.5833H15.0358C15.5318 14.5833 16.0198 14.4 16.4118 14.075C16.7958 13.75 17.0758 13.2917 17.1798 12.7833L18.4998 6.59165C18.5398 6.40832 18.4998 6.21665 18.3798 6.06665H18.4038ZM16.0278 12.5167C15.9798 12.75 15.8518 12.9583 15.6758 13.1083C15.4998 13.2583 15.2758 13.3417 15.0518 13.3417H7.2118C6.9798 13.3583 6.74781 13.2667 6.57181 13.1167C6.3878 12.9667 6.2598 12.75 6.2118 12.5167L5.0998 7.09165H17.1878L16.0278 12.525V12.5167Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>,

    <div 
    className="w-[435px] text-center max-sm:w-[390px] relative group"
    key="2">
      <Image src={Image2}  alt="Item 1" className="h-[504px] object-cover mb-6" />
      <p>Savannah - Wooden Chair</p>
      <p className="font-bold mt-4 text-black">€400.00</p>

      <div 
          className="bg-[#090909] hover:bg-[#1a1a1a] cursor-pointer text-white py-4 px-4 w-fit rounded-[50%] absolute bottom-[100px] right-5 opacity-0 scale-50 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100"
        >
          <svg 
            width="21" 
            height="20" 
            viewBox="0 0 21 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Bag icon</title>
            <path d="M6.6598 18.7083C7.433 18.7083 8.0598 18.0554 8.0598 17.25C8.0598 16.4446 7.433 15.7917 6.6598 15.7917C5.88661 15.7917 5.2598 16.4446 5.2598 17.25C5.2598 18.0554 5.88661 18.7083 6.6598 18.7083Z" fill="currentColor"></path>
            <path d="M15.4598 18.7083C16.233 18.7083 16.8598 18.0554 16.8598 17.25C16.8598 16.4446 16.233 15.7917 15.4598 15.7917C14.6866 15.7917 14.0598 16.4446 14.0598 17.25C14.0598 18.0554 14.6866 18.7083 15.4598 18.7083Z" fill="currentColor"></path>
            <path d="M18.4038 6.06665C18.2918 5.91665 18.1158 5.83332 17.9398 5.83332H4.8438L4.0918 2.17498C4.0838 2.12498 4.0678 2.07498 4.0438 2.02498C4.0038 1.94165 3.9478 1.86665 3.8758 1.80832C3.8118 1.74998 3.7318 1.70832 3.6438 1.69165C3.5958 1.67498 3.5398 1.67498 3.4918 1.67498H1.8998C1.5718 1.66665 1.2998 1.94998 1.2998 2.29165C1.2998 2.63332 1.5718 2.91665 1.8998 2.91665H3.0118L3.7638 6.59165C3.7638 6.59165 3.7638 6.60832 3.7638 6.61665L5.0278 12.775C5.1318 13.2917 5.4118 13.7667 5.8118 14.0917C6.2038 14.4083 6.6838 14.5833 7.1638 14.5833C7.1798 14.5833 7.1958 14.5833 7.2118 14.5833H15.0358C15.5318 14.5833 16.0198 14.4 16.4118 14.075C16.7958 13.75 17.0758 13.2917 17.1798 12.7833L18.4998 6.59165C18.5398 6.40832 18.4998 6.21665 18.3798 6.06665H18.4038ZM16.0278 12.5167C15.9798 12.75 15.8518 12.9583 15.6758 13.1083C15.4998 13.2583 15.2758 13.3417 15.0518 13.3417H7.2118C6.9798 13.3583 6.74781 13.2667 6.57181 13.1167C6.3878 12.9667 6.2598 12.75 6.2118 12.5167L5.0998 7.09165H17.1878L16.0278 12.525V12.5167Z" fill="currentColor"></path>
          </svg>
        </div>
    </div>,

    <div 
    className="w-[435px] text-center max-sm:w-[390px] relative group"
    key="3">
      <Image src={Image3}  alt="Item 1" className="h-[504px] object-cover mb-6" />
      <p>Ashton - Oak Recliner</p>
      <p className="font-bold mt-4 text-black">€1.400.00</p>
      <div 
          className="bg-[#090909] hover:bg-[#1a1a1a] cursor-pointer text-white py-4 px-4 w-fit rounded-[50%] absolute bottom-[100px] right-5 opacity-0 scale-50 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100"
        >
          <svg 
            width="21" 
            height="20" 
            viewBox="0 0 21 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Bag icon</title>
            <path d="M6.6598 18.7083C7.433 18.7083 8.0598 18.0554 8.0598 17.25C8.0598 16.4446 7.433 15.7917 6.6598 15.7917C5.88661 15.7917 5.2598 16.4446 5.2598 17.25C5.2598 18.0554 5.88661 18.7083 6.6598 18.7083Z" fill="currentColor"></path>
            <path d="M15.4598 18.7083C16.233 18.7083 16.8598 18.0554 16.8598 17.25C16.8598 16.4446 16.233 15.7917 15.4598 15.7917C14.6866 15.7917 14.0598 16.4446 14.0598 17.25C14.0598 18.0554 14.6866 18.7083 15.4598 18.7083Z" fill="currentColor"></path>
            <path d="M18.4038 6.06665C18.2918 5.91665 18.1158 5.83332 17.9398 5.83332H4.8438L4.0918 2.17498C4.0838 2.12498 4.0678 2.07498 4.0438 2.02498C4.0038 1.94165 3.9478 1.86665 3.8758 1.80832C3.8118 1.74998 3.7318 1.70832 3.6438 1.69165C3.5958 1.67498 3.5398 1.67498 3.4918 1.67498H1.8998C1.5718 1.66665 1.2998 1.94998 1.2998 2.29165C1.2998 2.63332 1.5718 2.91665 1.8998 2.91665H3.0118L3.7638 6.59165C3.7638 6.59165 3.7638 6.60832 3.7638 6.61665L5.0278 12.775C5.1318 13.2917 5.4118 13.7667 5.8118 14.0917C6.2038 14.4083 6.6838 14.5833 7.1638 14.5833C7.1798 14.5833 7.1958 14.5833 7.2118 14.5833H15.0358C15.5318 14.5833 16.0198 14.4 16.4118 14.075C16.7958 13.75 17.0758 13.2917 17.1798 12.7833L18.4998 6.59165C18.5398 6.40832 18.4998 6.21665 18.3798 6.06665H18.4038ZM16.0278 12.5167C15.9798 12.75 15.8518 12.9583 15.6758 13.1083C15.4998 13.2583 15.2758 13.3417 15.0518 13.3417H7.2118C6.9798 13.3583 6.74781 13.2667 6.57181 13.1167C6.3878 12.9667 6.2598 12.75 6.2118 12.5167L5.0998 7.09165H17.1878L16.0278 12.525V12.5167Z" fill="currentColor"></path>
          </svg>
        </div>
    </div>,

    <div 
    className="w-[435px] text-center max-sm:w-[390px] relative group"
    key="4">
      <Image src={Image4}  alt="Item 1" className="h-[504px] object-cover mb-6" />
      <p>Ashton - Steel Lounge Chair</p>
      <p className="font-bold mt-4 text-black">€234.00</p>
      <div 
          className="bg-[#090909] hover:bg-[#1a1a1a] cursor-pointer text-white py-4 px-4 w-fit rounded-[50%] absolute bottom-[100px] right-5 opacity-0 scale-50 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100"
        >
          <svg 
            width="21" 
            height="20" 
            viewBox="0 0 21 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Bag icon</title>
            <path d="M6.6598 18.7083C7.433 18.7083 8.0598 18.0554 8.0598 17.25C8.0598 16.4446 7.433 15.7917 6.6598 15.7917C5.88661 15.7917 5.2598 16.4446 5.2598 17.25C5.2598 18.0554 5.88661 18.7083 6.6598 18.7083Z" fill="currentColor"></path>
            <path d="M15.4598 18.7083C16.233 18.7083 16.8598 18.0554 16.8598 17.25C16.8598 16.4446 16.233 15.7917 15.4598 15.7917C14.6866 15.7917 14.0598 16.4446 14.0598 17.25C14.0598 18.0554 14.6866 18.7083 15.4598 18.7083Z" fill="currentColor"></path>
            <path d="M18.4038 6.06665C18.2918 5.91665 18.1158 5.83332 17.9398 5.83332H4.8438L4.0918 2.17498C4.0838 2.12498 4.0678 2.07498 4.0438 2.02498C4.0038 1.94165 3.9478 1.86665 3.8758 1.80832C3.8118 1.74998 3.7318 1.70832 3.6438 1.69165C3.5958 1.67498 3.5398 1.67498 3.4918 1.67498H1.8998C1.5718 1.66665 1.2998 1.94998 1.2998 2.29165C1.2998 2.63332 1.5718 2.91665 1.8998 2.91665H3.0118L3.7638 6.59165C3.7638 6.59165 3.7638 6.60832 3.7638 6.61665L5.0278 12.775C5.1318 13.2917 5.4118 13.7667 5.8118 14.0917C6.2038 14.4083 6.6838 14.5833 7.1638 14.5833C7.1798 14.5833 7.1958 14.5833 7.2118 14.5833H15.0358C15.5318 14.5833 16.0198 14.4 16.4118 14.075C16.7958 13.75 17.0758 13.2917 17.1798 12.7833L18.4998 6.59165C18.5398 6.40832 18.4998 6.21665 18.3798 6.06665H18.4038ZM16.0278 12.5167C15.9798 12.75 15.8518 12.9583 15.6758 13.1083C15.4998 13.2583 15.2758 13.3417 15.0518 13.3417H7.2118C6.9798 13.3583 6.74781 13.2667 6.57181 13.1167C6.3878 12.9667 6.2598 12.75 6.2118 12.5167L5.0998 7.09165H17.1878L16.0278 12.525V12.5167Z" fill="currentColor"></path>
          </svg>
        </div>
    </div>,

    <div 
      className="w-[435px] text-center max-sm:w-[390px] relative group"
      key="5">
        <Image src={Image5}  alt="Item 1" className="h-[504px] object-cover mb-6" />
        <p>Ashton - Leather Accent Chair</p>
        <p className="font-bold mt-4 text-black">€1,350.00</p>
        <div 
          className="bg-[#090909] hover:bg-[#1a1a1a] cursor-pointer text-white py-4 px-4 w-fit rounded-[50%] absolute bottom-[100px] right-5 opacity-0 scale-50 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100"
        >
          <svg 
            width="21" 
            height="20" 
            viewBox="0 0 21 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Bag icon</title>
            <path d="M6.6598 18.7083C7.433 18.7083 8.0598 18.0554 8.0598 17.25C8.0598 16.4446 7.433 15.7917 6.6598 15.7917C5.88661 15.7917 5.2598 16.4446 5.2598 17.25C5.2598 18.0554 5.88661 18.7083 6.6598 18.7083Z" fill="currentColor"></path>
            <path d="M15.4598 18.7083C16.233 18.7083 16.8598 18.0554 16.8598 17.25C16.8598 16.4446 16.233 15.7917 15.4598 15.7917C14.6866 15.7917 14.0598 16.4446 14.0598 17.25C14.0598 18.0554 14.6866 18.7083 15.4598 18.7083Z" fill="currentColor"></path>
            <path d="M18.4038 6.06665C18.2918 5.91665 18.1158 5.83332 17.9398 5.83332H4.8438L4.0918 2.17498C4.0838 2.12498 4.0678 2.07498 4.0438 2.02498C4.0038 1.94165 3.9478 1.86665 3.8758 1.80832C3.8118 1.74998 3.7318 1.70832 3.6438 1.69165C3.5958 1.67498 3.5398 1.67498 3.4918 1.67498H1.8998C1.5718 1.66665 1.2998 1.94998 1.2998 2.29165C1.2998 2.63332 1.5718 2.91665 1.8998 2.91665H3.0118L3.7638 6.59165C3.7638 6.59165 3.7638 6.60832 3.7638 6.61665L5.0278 12.775C5.1318 13.2917 5.4118 13.7667 5.8118 14.0917C6.2038 14.4083 6.6838 14.5833 7.1638 14.5833C7.1798 14.5833 7.1958 14.5833 7.2118 14.5833H15.0358C15.5318 14.5833 16.0198 14.4 16.4118 14.075C16.7958 13.75 17.0758 13.2917 17.1798 12.7833L18.4998 6.59165C18.5398 6.40832 18.4998 6.21665 18.3798 6.06665H18.4038ZM16.0278 12.5167C15.9798 12.75 15.8518 12.9583 15.6758 13.1083C15.4998 13.2583 15.2758 13.3417 15.0518 13.3417H7.2118C6.9798 13.3583 6.74781 13.2667 6.57181 13.1167C6.3878 12.9667 6.2598 12.75 6.2118 12.5167L5.0998 7.09165H17.1878L16.0278 12.525V12.5167Z" fill="currentColor"></path>
          </svg>
        </div>
    </div>,

    <div 
      className="w-[435px] text-center max-sm:w-[390px] relative group"
      key="6">
        <Image src={Image6}  alt="Item 1" className="h-[504px] object-cover mb-6" />
        <p>Savannah - Wooden Oak Chair</p>
        <p className="font-bold mt-4 text-black">€550.00</p>
        <div 
          className="bg-[#090909] hover:bg-[#1a1a1a] cursor-pointer text-white py-4 px-4 w-fit rounded-[50%] absolute bottom-[100px] right-5 opacity-0 scale-50 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100"
        >
          <svg 
            width="21" 
            height="20" 
            viewBox="0 0 21 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Bag icon</title>
            <path d="M6.6598 18.7083C7.433 18.7083 8.0598 18.0554 8.0598 17.25C8.0598 16.4446 7.433 15.7917 6.6598 15.7917C5.88661 15.7917 5.2598 16.4446 5.2598 17.25C5.2598 18.0554 5.88661 18.7083 6.6598 18.7083Z" fill="currentColor"></path>
            <path d="M15.4598 18.7083C16.233 18.7083 16.8598 18.0554 16.8598 17.25C16.8598 16.4446 16.233 15.7917 15.4598 15.7917C14.6866 15.7917 14.0598 16.4446 14.0598 17.25C14.0598 18.0554 14.6866 18.7083 15.4598 18.7083Z" fill="currentColor"></path>
            <path d="M18.4038 6.06665C18.2918 5.91665 18.1158 5.83332 17.9398 5.83332H4.8438L4.0918 2.17498C4.0838 2.12498 4.0678 2.07498 4.0438 2.02498C4.0038 1.94165 3.9478 1.86665 3.8758 1.80832C3.8118 1.74998 3.7318 1.70832 3.6438 1.69165C3.5958 1.67498 3.5398 1.67498 3.4918 1.67498H1.8998C1.5718 1.66665 1.2998 1.94998 1.2998 2.29165C1.2998 2.63332 1.5718 2.91665 1.8998 2.91665H3.0118L3.7638 6.59165C3.7638 6.59165 3.7638 6.60832 3.7638 6.61665L5.0278 12.775C5.1318 13.2917 5.4118 13.7667 5.8118 14.0917C6.2038 14.4083 6.6838 14.5833 7.1638 14.5833C7.1798 14.5833 7.1958 14.5833 7.2118 14.5833H15.0358C15.5318 14.5833 16.0198 14.4 16.4118 14.075C16.7958 13.75 17.0758 13.2917 17.1798 12.7833L18.4998 6.59165C18.5398 6.40832 18.4998 6.21665 18.3798 6.06665H18.4038ZM16.0278 12.5167C15.9798 12.75 15.8518 12.9583 15.6758 13.1083C15.4998 13.2583 15.2758 13.3417 15.0518 13.3417H7.2118C6.9798 13.3583 6.74781 13.2667 6.57181 13.1167C6.3878 12.9667 6.2598 12.75 6.2118 12.5167L5.0998 7.09165H17.1878L16.0278 12.525V12.5167Z" fill="currentColor"></path>
          </svg>
        </div>
    </div>,

    <div 
      className="w-[435px] text-center max-sm:w-[390px] relative group"
      key="7">
        <Image src={Image7}  alt="Item 1" className="h-[504px] object-cover mb-6" />
        <p>Savannah - Teak Dining Chair</p>
        <p className="font-bold mt-4 text-black">€499.00</p>
        <div 
          className="bg-[#090909] hover:bg-[#1a1a1a] cursor-pointer text-white py-4 px-4 w-fit rounded-[50%] absolute bottom-[100px] right-5 opacity-0 scale-50 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100"
        >
          <svg 
            width="21" 
            height="20" 
            viewBox="0 0 21 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Bag icon</title>
            <path d="M6.6598 18.7083C7.433 18.7083 8.0598 18.0554 8.0598 17.25C8.0598 16.4446 7.433 15.7917 6.6598 15.7917C5.88661 15.7917 5.2598 16.4446 5.2598 17.25C5.2598 18.0554 5.88661 18.7083 6.6598 18.7083Z" fill="currentColor"></path>
            <path d="M15.4598 18.7083C16.233 18.7083 16.8598 18.0554 16.8598 17.25C16.8598 16.4446 16.233 15.7917 15.4598 15.7917C14.6866 15.7917 14.0598 16.4446 14.0598 17.25C14.0598 18.0554 14.6866 18.7083 15.4598 18.7083Z" fill="currentColor"></path>
            <path d="M18.4038 6.06665C18.2918 5.91665 18.1158 5.83332 17.9398 5.83332H4.8438L4.0918 2.17498C4.0838 2.12498 4.0678 2.07498 4.0438 2.02498C4.0038 1.94165 3.9478 1.86665 3.8758 1.80832C3.8118 1.74998 3.7318 1.70832 3.6438 1.69165C3.5958 1.67498 3.5398 1.67498 3.4918 1.67498H1.8998C1.5718 1.66665 1.2998 1.94998 1.2998 2.29165C1.2998 2.63332 1.5718 2.91665 1.8998 2.91665H3.0118L3.7638 6.59165C3.7638 6.59165 3.7638 6.60832 3.7638 6.61665L5.0278 12.775C5.1318 13.2917 5.4118 13.7667 5.8118 14.0917C6.2038 14.4083 6.6838 14.5833 7.1638 14.5833C7.1798 14.5833 7.1958 14.5833 7.2118 14.5833H15.0358C15.5318 14.5833 16.0198 14.4 16.4118 14.075C16.7958 13.75 17.0758 13.2917 17.1798 12.7833L18.4998 6.59165C18.5398 6.40832 18.4998 6.21665 18.3798 6.06665H18.4038ZM16.0278 12.5167C15.9798 12.75 15.8518 12.9583 15.6758 13.1083C15.4998 13.2583 15.2758 13.3417 15.0518 13.3417H7.2118C6.9798 13.3583 6.74781 13.2667 6.57181 13.1167C6.3878 12.9667 6.2598 12.75 6.2118 12.5167L5.0998 7.09165H17.1878L16.0278 12.525V12.5167Z" fill="currentColor"></path>
          </svg>
        </div>
    </div>,

    <div 
      className="w-[435px] text-center max-sm:w-[390px] relative group"
      key="8">
          <Image src={Image8}  alt="Item 1" className="h-[504px] object-cover mb-6" />
          <p>Winsdor - Wingback Chair</p>
          <p className="font-bold mt-4 text-black">€750.00</p>
          <div 
          className="bg-[#090909] hover:bg-[#1a1a1a] cursor-pointer text-white py-4 px-4 w-fit rounded-[50%] absolute bottom-[100px] right-5 opacity-0 scale-50 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100"
        >
          <svg 
            width="21" 
            height="20" 
            viewBox="0 0 21 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Bag icon</title>
            <path d="M6.6598 18.7083C7.433 18.7083 8.0598 18.0554 8.0598 17.25C8.0598 16.4446 7.433 15.7917 6.6598 15.7917C5.88661 15.7917 5.2598 16.4446 5.2598 17.25C5.2598 18.0554 5.88661 18.7083 6.6598 18.7083Z" fill="currentColor"></path>
            <path d="M15.4598 18.7083C16.233 18.7083 16.8598 18.0554 16.8598 17.25C16.8598 16.4446 16.233 15.7917 15.4598 15.7917C14.6866 15.7917 14.0598 16.4446 14.0598 17.25C14.0598 18.0554 14.6866 18.7083 15.4598 18.7083Z" fill="currentColor"></path>
            <path d="M18.4038 6.06665C18.2918 5.91665 18.1158 5.83332 17.9398 5.83332H4.8438L4.0918 2.17498C4.0838 2.12498 4.0678 2.07498 4.0438 2.02498C4.0038 1.94165 3.9478 1.86665 3.8758 1.80832C3.8118 1.74998 3.7318 1.70832 3.6438 1.69165C3.5958 1.67498 3.5398 1.67498 3.4918 1.67498H1.8998C1.5718 1.66665 1.2998 1.94998 1.2998 2.29165C1.2998 2.63332 1.5718 2.91665 1.8998 2.91665H3.0118L3.7638 6.59165C3.7638 6.59165 3.7638 6.60832 3.7638 6.61665L5.0278 12.775C5.1318 13.2917 5.4118 13.7667 5.8118 14.0917C6.2038 14.4083 6.6838 14.5833 7.1638 14.5833C7.1798 14.5833 7.1958 14.5833 7.2118 14.5833H15.0358C15.5318 14.5833 16.0198 14.4 16.4118 14.075C16.7958 13.75 17.0758 13.2917 17.1798 12.7833L18.4998 6.59165C18.5398 6.40832 18.4998 6.21665 18.3798 6.06665H18.4038ZM16.0278 12.5167C15.9798 12.75 15.8518 12.9583 15.6758 13.1083C15.4998 13.2583 15.2758 13.3417 15.0518 13.3417H7.2118C6.9798 13.3583 6.74781 13.2667 6.57181 13.1167C6.3878 12.9667 6.2598 12.75 6.2118 12.5167L5.0998 7.09165H17.1878L16.0278 12.525V12.5167Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>,

  ];

  return (
    <div className="flex flex-col mb-[100px]">
      <div className="flex justify-between px-[100px] max-sm:px-[25px]">
        <h1 className="text-[32px] max-sm:text-[24px]">{title}</h1>

        <div className="flex justify-between mb-[100px] h-[45px]">
          <button
            onClick={() => carouselRef.current?.slidePrev()}
            className="bg-gray-200 px-[13px] rounded-[50%] mr-3"
          >
            <svg
              width="20"
              height="25"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Arrow left icon</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9423 3.72468C11.1863 3.96876 11.1863 4.36449 10.9423 4.60857L6.17588 9.37496H16.3337C16.6788 9.37496 16.9587 9.65478 16.9587 9.99996C16.9587 10.3451 16.6788 10.625 16.3337 10.625H6.17588L10.9423 15.3914C11.1863 15.6354 11.1863 16.0312 10.9423 16.2752C10.6982 16.5193 10.3025 16.5193 10.0584 16.2752L4.22505 10.4419C3.98097 10.1978 3.98097 9.8021 4.22505 9.55802L10.0584 3.72468C10.3025 3.48061 10.6982 3.48061 10.9423 3.72468Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>

          <button
            onClick={() => carouselRef.current?.slideNext()}
            className="bg-gray-200 px-[13px] rounded-[50%]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Arrow right icon</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0584 3.72468C10.3025 3.48061 10.6982 3.48061 10.9423 3.72468L16.7756 9.55802C17.0197 9.8021 17.0197 10.1978 16.7756 10.4419L10.9423 16.2752C10.6982 16.5193 10.3025 16.5193 10.0584 16.2752C9.81431 16.0312 9.81431 15.6354 10.0584 15.3914L14.8248 10.625H4.66699C4.32181 10.625 4.04199 10.3451 4.04199 9.99996C4.04199 9.65478 4.32181 9.37496 4.66699 9.37496H14.8248L10.0584 4.60857C9.81431 4.36449 9.81431 3.96876 10.0584 3.72468Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="pl-[90px] h-[600px] mb-16 max-md:pl-[25px] max-[500px]:pl-[10px]">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          animationDuration={500}
          disableButtonsControls
          disableDotsControls 
          responsive={{
            0: { items: 1 },
            500:{items: 1.2},
            768: { items: 2 },
            1024: { items: 3.2 },
          }}
          mouseTracking={false} 
          controlsStrategy="responsive"
        />
      </div>

      <Link href="/shop" className="mx-auto">
        <button className=" bg-[#090909] text-white px-5 py-3 rounded-3xl text-[14px]  transition-colors duration-500 hover:bg-[#171717]">View all</button>
      </Link>
      
    </div>
  );
};

export default CarouselComponent;

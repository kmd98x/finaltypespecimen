"use client";

import React from 'react'
import { useSwiper } from 'swiper/react'

export default function SwiperButton({ children, className }) {
    // https://swiperjs.com/react#useswiper
    const swiper = useSwiper();

    return (
        <button onClick={() => children === "Volgende" ? swiper.slideNext() : swiper.slidePrev()} className={`${className} bg-groen text-beige px-8 py-6 rounded-lg text-lg z-50`}>
            {children}
            <span className='absolute size-[calc(100%-6px)] top-[3px] left-[3px] border border-beige rounded-lg'></span>
        </button>
    )
}

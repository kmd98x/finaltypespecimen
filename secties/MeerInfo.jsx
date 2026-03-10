"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination"

export default function MeerInfo() {
    const stijling = {
        div: "flex items-center justify-center gap-8 w-full pointer-events-none py-32 relative h-full"
    }

    return (
        <section className='bg-groen flex items-center justify-center min-h-screen'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination
                className='h-screen'
            >
                <SwiperSlide>
                    <div className={stijling.div}>
                        <div className='border-b border-beige absolute top-10 w-[calc(100%-500px)]'>
                            <img src="/images/vanwaar.svg" className='-ml-40' alt="Vanwaar titel" />
                        </div>

                        <img src="/images/meer-info-slide-1.svg" alt="Gill Sans slide 1" className='absolute left-0 bottom-0 w-[960px]' />
                        <p className='gill-sanse-condensed text-beige w-full max-w-[65ch] text-3xl ml-80 mb-40'>Komt uit Engeland. Het werd ontworpen door Eric Gill, een Britse beeldhouwer en lettertypeontwerper, geboren in Brighton in 1882. Hij studeerde kalligrafie onder Edward Johnston, dezelfde man die het lettertype voor de Londense metro ontwierp. Dat metrolettertype was de directe inspiratiebron voor Gill Sans. In 1926 schilderde Gill met de hand een uithangbord voor een boekwinkel in Bristol, en dat experiment groeide uit tot een volledig lettertype. In 1928 bracht Monotype het officieel uit.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={stijling.div}>
                        <div className='border-b border-beige absolute top-10 w-[calc(100%-500px)]'>
                            <img src="/images/hoe-het-gebruikt-wordt.svg" className='-ml-40' alt="Vanwaar titel" />
                        </div>
                        <img src="/images/meer-info-slide-2.svg" alt="Gill Sans slide 2" className='mt-40' />
                        <p className='gill-sanse-condensed text-beige w-full max-w-[60ch] text-3xl'>Werd al snel het gezicht van Brits design. De spoorwegen gebruikten het op treinstellen, borden en dienstregelingen. Penguin Books zette het in op hun iconische boekomslagen. De BBC nam het op in hun logo. British Railways, de Britse overheid, Ordnance Survey, allemaal kozen ze voor Gill Sans. Het werkt zowel als display lettertype op grote posters als leesbaar in kleine tekstblokken, wat vrij zeldzaam is voor een schreefloos lettertype.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={stijling.div}>
                        <div className='border-b border-beige absolute top-10 w-[calc(100%-500px)]'>
                            <img src="/images/wat-het-bijzonder-maakt.svg" className='-ml-40' alt="Vanwaar titel" />
                        </div>
                        <img src="/images/meer-info-slide-3.svg" alt="Gill Sans slide 3" className='w-full max-w-[600px]' />
                        <p className='gill-sanse-condensed text-beige w-full max-w-[60ch] text-3xl'>Valt tussen twee werelden in. Het heeft de strakheid van een modern schreefloos lettertype, maar ook de warmte en menselijkheid van klassieke Romeinse lettertypes. Dat komt doordat Gill zich liet inspireren door eeuwenoude steenhouwerstechnieken. Zijn achtergrond als beeldhouwer is zichtbaar in elke letter. De dubbele verdieping van de kleine "g", de perfecte cirkel van de "o", de verticale uiteinden van de "c" en "e" , het zijn allemaal bewuste keuzes die het lettertype herkenbaar en tegelijk tijdloos maken. Niet puur geometrisch zoals Futura, niet kil zoals Helvetica. Gill Sans heeft karakter.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

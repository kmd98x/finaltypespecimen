"use client";
import React from 'react'

// https://swiperjs.com/react
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperButton from '@/components/SwiperButton';
import "swiper/css";

export default function Geschiedenis() {

    const stijling = {
        div: "flex items-center justify-center gap-8 w-full pointer-events-none py-32"
    }

    return (
        <section className='bg-beige flex items-center justify-center min-h-screen'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                className='h-screen'
                direction='vertical'
            >
                <SwiperButton className="absolute left-1/2 -translate-x-1/2 top-8">Vorige</SwiperButton>

                <SwiperSlide>
                    <div className={stijling.div}>
                        <img src="/images/1913.svg" alt="1913 afbeelding" />
                        <span className="inline-block w-2 h-[500px] bg-donker-beige"></span>
                        <p className='gill-sanse-condensed text-rood w-full max-w-[35ch] text-5xl'>Johnston Sans werd ontworpen door Edward Johnston voor de Londense metro. Eric Gill leerde het vak bij Johnston als zijn leerling en had een kleine rol in het ontwerpen van dit lettertype.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={stijling.div}>
                        <p className='gill-sanse-condensed text-groen w-full max-w-[35ch] text-5xl text-right'>Niet helemaal tevreden met Johnston Sans, besloot Eric Gill zijn eigen lettertype te maken. Zo leesbaar en perfect mogelijk.</p>

                        <img src="/images/1926.svg" alt="1926 afbeelding" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={stijling.div}>
                        <img src="/images/1928.svg" alt="1928 afbeelding" />
                        <p className='gill-sanse-condensed text-rood w-full max-w-[35ch] text-5xl'>Stanley Morison van Monotype zag het potentieel van Gill's werk. Gill Sans werd verder ontwikkeld en officieel uitgebracht.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={stijling.div}>
                        <p className='gill-sanse-condensed text-groen w-full max-w-[35ch] text-5xl'>1929 Gill Sans werd al snel populair. De London and Eastern Railway koos Gill Sans voor al hun posters, dienstregelingen en advertenties.</p>

                        <img src="/images/1926.svg" alt="1926 afbeelding" />
                    </div>
                </SwiperSlide>

                <SwiperButton className="absolute left-1/2 -translate-x-1/2 bottom-8">Volgende</SwiperButton>
            </Swiper>
        </section>
    )
}

"use client";

import React, { useRef } from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function LetterVerschil() {
    const johnston = useRef();
    const vs = useRef();
    const gill = useRef();
    const container = useRef();

    useGSAP(() => {
        gsap.to([johnston.current, vs.current, gill.current], {
            duration: 0.8,
            y: 0,
            opacity: 1,
            stagger: 0.5,
            scrollTrigger: {
                trigger: container.current,
                start: "center center"
            }
        });


    })

    return (
        <section className='bg-beige py-40 relative' ref={container}>

            <img src="/images/letter-verschil-achtergrond.png" className='absolute size-full object-cover z-0 top-0 left-0' alt="" />
            
            <header className='flex flex-col items-center relative z-10'>
                <img src="/images/letter-verschil/johnston-underground.svg" ref={johnston} className='opacity-0 translate-y-5 relative z-10' alt="Johnston Underground" />
                <img src="/images/letter-verschil/vs.svg" ref={vs} className='opacity-0 translate-y-5 -mt-28 z-0 relative' alt="Johnston Underground" />
                <img src="/images/letter-verschil/gill-sans.svg" ref={gill} className='opacity-0 translate-y-5 relative -mt-36' alt="Johnston Underground" />
            </header>

            <main className='flex items-center gap-32 mt-32 max-w-7xl mx-auto'>
                <section className='relative'>
                    <img src="/images/letter-verschil/J.svg" className='relative z-10 h-[350px]' alt="J letter Johnston" />
                    <h3 className='text-rood text-[13rem] -right-4 top-55 leading-0 absolute z-0'>J</h3>
                </section>

                <section className='relative'>
                    <img src="/images/letter-verschil/Q.svg" className='relative z-10 h-[350px]' alt="J letter Johnston" />
                    <h3 className='text-rood text-[10rem] -right-10 top-55 leading-0 absolute z-0'>Q</h3>
                </section>

                <section className='relative'>
                    <img src="/images/letter-verschil/R.svg" className='relative z-10 h-[350px]' alt="J letter Johnston" />
                    <h3 className='text-rood text-[13rem] -right-4 top-55 leading-0 absolute z-0'>R</h3>
                </section>

                <section className='relative'>
                    <img src="/images/letter-verschil/S.svg" className='relative z-10 h-[350px]' alt="J letter Johnston" />
                    <h3 className='text-rood text-[13rem] -right-4 top-55 leading-0 absolute z-0'>S</h3>
                </section>

                <section className='relative'>
                    <img src="/images/letter-verschil/1.svg" className='relative z-10 h-[350px]' alt="J letter Johnston" />
                    <h3 className='text-rood text-[13rem] -right-11 top-55 leading-0 absolute z-0'>1</h3>
                </section>

                <section className='relative'>
                    <img src="/images/letter-verschil/3.svg" className='relative z-10 h-[350px]' alt="J letter Johnston" />
                    <h3 className='text-rood text-[13rem] -right-4 top-55 leading-0 absolute z-0'>3</h3>
                </section>

                <section className='relative'>
                    <img src="/images/letter-verschil/5.svg" className='relative z-10 h-[350px]' alt="J letter Johnston" />
                    <h3 className='text-rood text-[13rem] -right-4 top-55 leading-0 absolute z-0'>5</h3>
                </section>
            </main>
        </section>
    )
}

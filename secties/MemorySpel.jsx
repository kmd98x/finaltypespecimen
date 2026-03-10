"use client";

import React, {useEffect, useRef, useState} from 'react'
import Image from 'next/image';

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// https://www.youtube.com/watch?v=2FpfLOde5kg&t=1s
// Bron van video voor het bordspel
function genereerKaartenStapel() {
    const kaarten = [
        "/images/kaarten/kleine-letter-g.svg",
        "/images/kaarten/hoofdletter-g.svg",
        "/images/kaarten/the-greatest-gatsby.svg",
        "/images/kaarten/logos.svg",
        "/images/kaarten/two-story-a.svg",
    ]

    const stapel = [...kaarten, ...kaarten];
    return stapel.sort(() => Math.random() - 0.5);
}

export default function MemorySpel() {
    const [kaarten, setKaarten ] = useState([]);
    const [omgedraaid, setOmgedraaid] = useState([]);
    const [opgelost, setOpgelost] = useState([]);

    useEffect(() => {
        setKaarten(genereerKaartenStapel());
    }, [])

    useEffect(() => {
        function checkVoorEenMatch() {
            const [eerste, tweede ] = omgedraaid;

            if (kaarten[eerste] === kaarten[tweede]) {
                setOpgelost([...opgelost, ...omgedraaid])
            }

            setOmgedraaid([])
        }

        if (omgedraaid.length === 2) {
            setTimeout(() => {
                checkVoorEenMatch();
            }, 1000);
        }
        
    }, [kaarten, omgedraaid])

    // https://chatgpt.com/share/69b00776-c3d0-8007-ba82-58d0e287d3dc
    function draaiKaart(index) {
        if (!omgedraaid.includes(index) && omgedraaid.length < 2) {
            setOmgedraaid([...omgedraaid, index]);
        }
    }
    
    // Animatie voor het "Draai" woord
    const draai = useRef();
    useGSAP(() => {
        gsap.to(draai.current, {
            duration: 5,
            repeat: -1,
            rotate: '360deg',
            ease: 'linear'
        })
    })
    
    return (
        <section className='bg-groen text-beige py-32'>
            <header className='flex relative max-w-7xl mx-auto'>
                <p className='text-right text-3xl max-w-[20ch]'>Verborgen onder de kaarten liggen foto's uit het leven van Gill Sans.</p>
                <p className='absolute left-80 text-5xl gill-sans-heavy' ref={draai}>Draai</p>
                <p className='ml-32 gill-sans-italic text-4xl relative z-10'>de kaarten om, zoek de paren</p>
                <p className='text-rood text-[20rem] gill-sans-heavy-italic -ml-32 relative z-0 leading-0 self-end'>&</p>
                <p className='self-end gill-sans-condensed text-2xl -ml-16 z-10'>laat het lettertype zichzelf vertellen.</p>
            </header>

            <div className='mt-40 max-w-7xl w-full m-auto rounded-2xl grid grid-cols-5 gap-8 my-20 bg-beige p-16 relative'>
                {kaarten.map((kaart, index) => (
                    <div key={index} className='cursor-pointer transform bg-groen' onClick={() => draaiKaart(index)}>
                        <Image 
                            width={254} 
                            height={307} 
                            src={kaart} alt="Kaart" 
                            className={omgedraaid.includes(index) || opgelost.includes(index) ? "opacity-100" : "opacity-0"} />
                    </div>
                ))}
            </div>
        </section>
    )
}

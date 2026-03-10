"use client";

import Titel from '@/components/Titel';
import React, { useState } from 'react'

export default function Letters() {
    const [geselecteerdeLetter, setGeselecteerdeLetter] = useState();
    
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const cijfers_tekens = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "&", "*", "(", ")", "+", "=", "?", ",", ".", ";", ":", "'", "\"", "-", "_"];

    const stijling = {
        titel: "col-span-6 py-20",
        ul: "flex flex-wrap items-start justify-start relative z-10",
        li: "gill-sans-medium px-7 py-5 text-7xl text-beige/20 hover:text-beige transition duration-300 cursor-default",
    };

    return (
        <section className='grid grid-cols-3 items-start gap-32 min-h-screen bg-groen px-20 relative'>

            <p className='absolute left-1/2 bottom-[450px] -translate-x-1/2 text-[70rem] gill-sans-bold leading-0 z-0 text-beige/5'>{geselecteerdeLetter}</p>
            
            <ul className={`${stijling.ul}`}>
                <Titel titel="Hoofdletters" className={stijling.titel} />

                {letters.map((letter, index) => (
                    <li key={index} className={`uppercase ${stijling.li}`} onMouseOver={() => setGeselecteerdeLetter(letter.toUpperCase())}>{letter}</li>
                ))}
            </ul>

            <ul className={`${stijling.ul}`}>
                <Titel titel="Kleine letters" className={stijling.titel} />

                {letters.map((letter, index) => (
                    <li key={index} className={`${stijling.li}`} onMouseOver={() => setGeselecteerdeLetter(letter)}>{letter}</li>
                ))}
            </ul>

            <ul className={`${stijling.ul}`}>
                <Titel titel="Cijfers & tekens" className={stijling.titel} />
                {cijfers_tekens.map((cijfer_teken, index) => (
                    <li key={index} className={`${stijling.li}`} onMouseOver={() => setGeselecteerdeLetter(cijfer_teken)}>{cijfer_teken}</li>
                ))}
            </ul>
        </section>
    )
}

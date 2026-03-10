"use client";

import KleurKiezer from '@/components/KleurKiezer';
import RadioButton from '@/components/RadioButton';
import Titel from '@/components/Titel'
import React, { useState } from 'react'

export default function Interactief() {
    // https://react.dev/reference/react/useState
    const [weight, setWeight] = useState("gill-sans-light");
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    const [color, setColor] = useState("#000000"); 

    const bovenLetters = [
        {
            letter: "T",
            font: "gill-sans-light",
            label: "Light"
        },
        {
            letter: "Y",
            font: "gill-sans-regular",
            label: "Regular"
        },
        {
            letter: "P",
            font: "gill-sans-condensed",
            label: "Condensed"
        },
        {
            letter: "E",
            font: "gill-sans-condensed-bold",
            label: "Condensed Bold"
        },
    ]

    const onderLetters = [
        {
            isImage: true,
            letter: "s-letter.svg",
            font: "gill-sans-medium",
            label: "Semi-Bold.svg"
        },
        {
            isImage: false,
            letter: "P",
            font: "gill-sans-bold",
            label: "Bold"
        },
        {
            isImage: false,
            letter: "E",
            font: "gill-sans-heavy",
            label: "Heavy"
        },
        {
            isImage: true,
            letter: "c-letter.svg",
            font: "gill-sans-light",
            label: "Ultra-Bold.svg"
        },
        {
            isImage: false,
            letter: "I",
            font: "gill-sans-light-italic",
            label: "Light-Italic"
        },
        {
            isImage: false,
            letter: "M",
            font: "gill-sans-italic",
            label: "Italic"
        },
        {
            isImage: true,
            letter: "e-letter.svg",
            font: "",
            label: "SemiBold-italic.svg"
        },
        {
            isImage: false,
            letter: "N",
            font: "gill-sans-bold-italic",
            label: "Bold Italic"
        },
        {
            isImage: false,
            letter: "!",
            font: "gill-sans-heavy-italic",
            label: "Heavy Italic"
        },
    ]

    const stijling = {
        div: "flex items-start justify-center gap-5",
        label: "text-3xl text-groen flex flex-col items-center",
        span: "w-px h-24 bg-rood",
        p: "text-rood bg-groen px-12 py-7 text-[11rem]"
    }

    return (
        <section className='min-h-screen bg-beige flex flex-col gap-5 justify-start items-center'>
            <Titel titel="Verschillende stijlen" kleur='rood' className="mx-auto py-10" />

            <div className={`${stijling.div}`}>
                {bovenLetters.map((letter, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <p className={`${stijling.label} ${letter.font} -mb-8 relative z-20`}>
                            {letter.label}
                            <span className={`${stijling.span}`}></span>
                        </p>

                        <p className={`${stijling.p} ${letter.font} h-[260px]`}>{letter.letter}</p>
                    </div>
                ))}
            </div>

            <div className={`${stijling.div} w-screen`}>
                {onderLetters.map((letter, index) => (
                    <div key={index} className='flex-1 flex flex-col items-center'>
                        {letter.isImage ? (
                            <>
                                <span className={`${stijling.p} h-[260px] flex items-center justify-center`}>
                                    <img src={`/images/${letter.letter}`}></img>
                                </span>

                                <p className={`${stijling.label} ${letter.font} -mt-8`}>
                                    <span className={`${stijling.span}`}></span>
                                    <img src={`/images/${letter.label}`} className='mt-1'></img>
                                </p>
                            </>
                        ) : (
                            <>
                                <p className={`${stijling.p} ${letter.font} h-[260px] w-full text-center`}>{letter.letter}</p>

                                <p className={`${stijling.label} ${letter.font} -mt-8 max-w-[5ch]`}>
                                    <span className={`${stijling.span}`}></span>
                                    {letter.label}
                                </p>
                            </>
                        )}

                    </div>
                ))}
            </div>

            <form className='w-full max-w-7xl my-32'>
                <input
                    type="text"
                    name="text-veld"
                    id="text-veld"
                    className={`bg-donker-beige p-12 w-full text-5xl text-center ${italic ? "italic" : "normal"} ${weight} ${underline ? "underline" : "no-underline"}`}
                    placeholder='Type hier'
                    style={{ color: `${color}`}} />

                <div className='flex items-center gap-6 mt-8'>
                    <RadioButton
                        type="radio"
                        onChange={() => setWeight("gill-sans-light")}
                        name="dikte"
                        id="light"
                        label="Light"
                        className={`${weight === "gill-sans-light" ? "bg-groen text-beige" : "bg-transparent text-groen border border-groen"}`} />

                    <RadioButton
                        type="radio"
                        onChange={() => setWeight("gill-sans-medium")}
                        name="dikte"
                        id="medium"
                        label="Medium"
                        className={`${weight === "gill-sans-medium" ? "bg-groen text-beige" : "bg-transparent text-groen border border-groen"}`} />

                    <RadioButton
                        type="radio"
                        onChange={() => setWeight("gill-sans-bold")}
                        name="dikte"
                        id="bold"
                        label="Bold"
                        className={`${weight === "gill-sans-bold" ? "bg-groen text-beige" : "bg-transparent text-groen border border-groen"}`} />

                    <RadioButton
                        type="radio"
                        onChange={() => setWeight("gill-sans-heavy")}
                        name="dikte"
                        id="heavy"
                        label="Heavy"
                        className={`${weight === "gill-sans-heavy" ? "bg-groen text-beige" : "bg-transparent text-groen border border-groen"}`} />

                    <RadioButton
                        type="checkbox"
                        onChange={() => setItalic(italic === true ? false : true)}
                        name="italic"
                        id="italic"
                        label="italic"
                        className={`${italic ? "bg-groen text-beige" : "bg-transparent text-groen border border-groen"}`} />

                    <RadioButton
                        type="checkbox"
                        onChange={() => setUnderline(underline === true ? false : true)}
                        name="underline"
                        id="underline"
                        label="underline"
                        className={`${underline ? "bg-groen text-beige" : "bg-transparent text-groen border border-groen"}`} />

                    <KleurKiezer
                        onChange={(e) => setColor(e.target.value)}
                        name="kleur"
                        id="kleur"
                        color={color} />
                </div>
            </form>
        </section>
    )
}

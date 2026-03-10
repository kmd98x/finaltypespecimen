import React from 'react'

export default function Titel({ titel, className, kleur = "beige" }) {
    const stijling = {
        span: "flex-1 h-px"
    }

    const tekstKleuren = {
        rood: "text-rood",
        groen: "text-groen",
        beige: "text-beige"
    }

    const bgKleuren = {
        rood: "bg-rood",
        groen: "bg-groen",
        beige: "bg-beige"
    }
    return (
        <h2 className={`relative gap-10 max-w-5xl w-full flex items-center uppercase ${className} ${tekstKleuren[kleur]}`}>
            <span className={`${bgKleuren[kleur]} ${stijling.span}`}></span>
            {titel}
            <span className={`${bgKleuren[kleur]} ${stijling.span}`}></span>
        </h2>
    )
}

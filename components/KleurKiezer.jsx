import React from 'react'

export default function KleurKiezer({name, id, className, color, onChange}) {
    return (
        <div className='relative'>
            <input 
                type="color" 
                onChange={onChange} 
                name={name}
                id={id} 
                className='absolute' />

            <label htmlFor={id} className={`px-12 py-4 rounded-lg inline-block relative ${className}`} style={{ background: `${color}`}}>Kies een kleur</label>
        </div>
    )
}

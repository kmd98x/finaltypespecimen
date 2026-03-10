import React from 'react'

export default function RadioButton({type, name, id, label, value, className, onChange}) {
    return (
        <div>
            <input 
                type={type} 
                onChange={onChange} 
                name={name} 
                id={id} 
                className='hidden' 
                defaultValue={value} />

            <label htmlFor={id} className={`px-12 py-4 rounded-lg inline-block relative ${className}`}>
                {type === "radio" || type === "checkbox" ? label : "Zet type radio of checkbox"}
                <span className='w-11/12 h-10/12 border border-beige rounded-md absolute left-1 top-1'></span>
            </label>
        </div>
    )
}

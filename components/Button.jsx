import React from 'react'

export default function Button({onClick, children}) {
    if (onClick) {
        onClick()
    }
    
    return (
        <button onClick={onClick} className=''>{children}</button>
    )
}

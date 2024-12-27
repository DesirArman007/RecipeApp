import React from 'react'

function Button({label,backgroundColor, textColor, borderColor, onClick, width, height}) {
  return (
    <button className={` flex justify-center items-center gap-2 ${ width || 'px-7'} ${ height || 'py-3'} border font-montserrat
        ${backgroundColor || 'bg-rose-600'}
        ${textColor || 'text-white'}
        ${borderColor || 'border-transparent'}
        rounded-full w-full hover:border-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}
        onClick={onClick}>
            {label}
            
    </button>
  )
}

export default Button
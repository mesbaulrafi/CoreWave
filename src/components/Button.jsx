import React from 'react'

const Button = ({className,btnText}) => {
  return (
    <button className={`cursor-pointer text-white hover:text-black bg-[#06c279] py-3.5 px-7 border-2 border-[#06c279] hover:bg-transparent text-center rounded-[5px] duration-200 ${className}`}>{btnText}</button>
  )
}

export default Button
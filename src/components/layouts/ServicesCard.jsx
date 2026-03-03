import React from 'react'

const ServicesCard = ({ cardIcon, cardTitle, cardText }) => {
  return (
    <div className="group bg-white w-[312px] rounded-[10px] shadow-sm hover:bg-[#7ae0b9] transition-all duration-300 cursor-pointer">
      <div className="pt-10.5 pl-10.5 pb-15 pr-5">
        
        
        <div className="mb-4 inline-block transition-all duration-200 group-hover:brightness-0 group-hover:invert">
          {cardIcon}
        </div>
        
        <h4 className='font-lato font-semibold text-[20px] leading-7.5 block py-3.5 group-hover:text-white transition-all duration-200'>
          {cardTitle}
        </h4>
        
        <p className='font-lato text-base leading-6 text-[#7B7B7B] w-[90%] group-hover:text-white transition-all duration-200'>
          {cardText}
        </p>

      </div>
    </div>
  )
}

export default ServicesCard
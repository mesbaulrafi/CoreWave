import React from 'react'
import WebLogo from '../../assets/logo/WebLogo'


const ServicesCard = ({cardLogo,cardTitle,cardText,}) => {
  return (
   <>
   <div className="bg-white w-[312px] rounded-[10px]">
    <div className="pt-10.5 pl-10.5 pb-15 ">
        <i className=''>{cardLogo}</i>
        <h4 className='font-lato font-semibold text-[20px] leading-7.5 inline-block py-3.5'>{cardTitle}</h4>
        <p className='font-lato  text-base leading-6 text-[#7B7B7B] w-[80%]'>{cardText} </p>
    </div>
   </div>
   </>
  )
}

export default ServicesCard
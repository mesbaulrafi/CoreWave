import React from 'react'
import Containar from '../Containar'
import Images from '../Images'
import Logo from "/src/assets/Logo.png"
import { Link } from 'react-router-dom'
import Button from '../Button'



const Header = () => {
  return (
   <>
   <div className="bg-[#eefff9] py-5">
    <Containar>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="">
          <Images imgSrc={Logo}/>
        </div>
        {/* Menu & Button */}
        <div className="">
          <ul className='flex items-center gap-x-11'>
            <li className='hover:text-[#06c279] duration-200'><Link to={'./'}>Home</Link></li>
            <li className='hover:text-[#06c279] duration-200'><Link to={'./'}>About</Link></li>
            <li className='hover:text-[#06c279] duration-200'><Link to={'./'}>Portfolio</Link></li>
            <li className='hover:text-[#06c279] duration-200'><Link to={'./'}>Services</Link></li>
            <li className='hover:text-[#06c279] duration-200'><Link to={'./'}>Blog</Link></li>
            <li className='hover:text-[#06c279] duration-200'><Link to={'./'}>Testimonial</Link></li>
            <Button btnText={'Register'} className={'ml-25'}/>
          </ul>
        </div>
      </div>
    </Containar>
   </div>
   </>
  )
}

export default Header
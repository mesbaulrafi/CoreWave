import React from 'react'
import Containar from '../Containar'
import ServicesCard from '../layouts/ServicesCard'

const Services = () => {
  return (
    <>
    <div className="py-25 bg-[#eefff9] rounded-tl-full rounded-br-full">
        <Containar>
            <div className="flex">
                <div className="">
                  <ServicesCard/>
                </div>
                <div className=""></div>
            </div>
        </Containar>
    </div>
    </>
  )
}

export default Services
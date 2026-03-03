import React from "react";
import Containar from "../Containar";
import Images from "../Images";
import ExperienceImg from "/src/assets/ExperienceImg.png"


const Experience = () => {
  return (
    <>
      <div className="py-25">
        <Containar>
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <h2 className="text-[45px] font-semibold w-[445px]">Experience the power of Corewave</h2>
              <p className="text-base text-[#7B7B7B] w-[550px] pt-7.5 pb-11">Are you ready to take your business to the next level? Look no further than Corewave. Our innovative technology and expert team can help you unlock your business's full potential. By harnessing the power of Corewave, you can streamline your operations, improve efficiency</p>
              <button className="bg-[#DAF6EB] px-[25px] py-[14.5px] text-[#06C279] text-base font-semibold font-lato rounded-[5px]">Learn More</button>
            </div>
            <div className="w-1/2">
                <Images imgSrc={ExperienceImg}/>
            </div>
          </div>
        </Containar>
      </div>
    </>
  );
};

export default Experience;

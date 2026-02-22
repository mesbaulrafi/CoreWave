import React from "react";
import Containar from "../Containar";
import Images from "../Images";
import BennerImg from "/src/assets/bennerImg.png";
import Button from "../Button";

const Benner = () => {
  return (
    <>
      <div className="bg-[#eefff9]">
        <Containar>
          <div className="flex items-center justify-between">
            <div className="">
              <h2 className="text-[60px] font-light">Empower Your Team</h2>
              <h1 className="text-[60px] font-bold">With CoreWave's</h1>
              <p className="w-[511px] text-[20px] pt-9 pb-13">
                Boost Productivity and Wellness in Your Organization with
                CoreWave's Advanced Tools and Techniques
              </p>
              <div className="flex items-center gap-x-5">
                <Button btnText={'Explore More'}/>
                <Button btnText={'Watch Video'} />
              </div>
            </div>
            <div className="">
              <Images imgSrc={BennerImg} className={""} />
            </div>
          </div>
        </Containar>
      </div>
    </>
  );
};

export default Benner;

import React from "react";
import Containar from "../Containar";
import ServicesCard from "../layouts/ServicesCard";
import WebLogo from "../../assets/logo/WebLogo";


const Services = () => {
  return (
    <>
      <div className=" bg-[#eefff9]  rounded-tl-[300px] rounded-br-[300px] overflow-hidden">
        <Containar>
          <div className="flex justify-between  ">
            {/* Card Part */}
            <div className="flex gap-10 py-[70px]">
              <div className="pt-[140px]">
                {/* Card One */}
                <div className="pb-10 ">
                  <ServicesCard
                    cardIcon={<WebLogo />}
                    cardTitle={"Web Development"}
                    cardText={
                      "Web development is the art of creating engaging and visually appealing websites "
                    }
                  />
                </div>
                {/* Card Two */}
                <div className=" ">
                  <ServicesCard
                    cardIcon={<WebLogo />}
                    cardTitle={"Web Development"}
                    cardText={
                      "Web development is the art of creating engaging and visually appealing websites "
                    }
                  />
                </div>
                <div className=""></div>
              </div>
              <div className="">
                {/* Card Three */}
                <div className=" pb-10">
                  <ServicesCard
                    cardIcon={<WebLogo />}
                    cardTitle={"Web Development"}
                    cardText={
                      "Web development is the art of creating engaging and visually appealing websites "
                    }
                  />
                </div>
                {/* Card Four */}
                <div className=" ">
                  <ServicesCard
                    cardIcon={<WebLogo />}
                    cardTitle={"Web Development"}
                    cardText={
                      "Web development is the art of creating engaging and visually appealing websites "
                    }
                  />
                </div>
                <div className=""></div>
              </div>
            </div>
            {/* Text Part */}
            <div className="pl-[113px] pt-[335px]">
              <h3 className="font-lato font-semibold text-[45px] leading-14 ">We offer a variety of services such as</h3>
              <p className=" py-7.5  font-lato text-base leading-6.5 text-[#7B7B7B]">At our company, we pride ourselves on offering a variety of services to meet the diverse needs of our clients. Whether you're looking for marketing assistance, website design, or IT support, we've got you covered</p>
              <button className="bg-[#DAF6EB] px-[25px] py-[14.5px] text-[#06C279] text-base font-semibold font-lato rounded-[5px]">All Services</button>
            </div>
          </div>
        </Containar>
      </div>
    </>
  );
};

export default Services;

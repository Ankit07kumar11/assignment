import React from "react";
import {BsArrowLeft} from "react-icons/bs";
import HomeImage from "../assets/Home.svg";
import Section1 from "../assets/section1.svg"
import Section2 from "../assets/section2.svg"
import Section8 from "../assets/section8.svg"

const Sidebar = () => {
    return (
        <>
            <div className="flex flex-col justify-between  w-[250px] h-[677px] px-6 py-10 bg-black">
                <div>

                <div className="relative flex flex-row pb-0 gap-2 w-8 shrink-0 items-center">
                    <div className="bg-[#3772ff] relative flex flex-col w-8 h-8 shrink-0 px-1 py-2 rounded-[50%]">
                        <div className="text-center text-sm font-['Poppins'] font-semibold tracking-[-0.3] leading-[15px] text-[#fefefe] ml-0 h-full">
                            N
                        </div>

                    </div>

                    <div className="text-2xl ml-1 font-['Poppins'] font-semibold tracking-[-0.47] leading-[31.4px] text-white w-16">
                        Name
                    </div>

                    <div className=" text-white ml-6 text-2xl ">
                    <BsArrowLeft/>
                    </div>
                </div>

                <div className="mt-10 flex flex-col w-[250px] gap-5">
                    <div className=" flex flex-row gap-5">
                        <div>
                            <img src={HomeImage} alt="Home" />
                            
                        </div>
                        <div className="text-[#808191]">Home</div>
                    </div>
                    <div className=" flex flex-row gap-5">
                        <div>
                            <img src={Section1} alt="section1" />
                            
                        </div>
                        <div className="text-[#808191]">Section 1</div>
                    </div>
                    <div className=" flex flex-row gap-5">
                        <div>
                            <img src={Section2} alt="Section 2" />
                            
                        </div>
                        <div className="text-[#808191]">Section 2</div>
                    </div>
                    <div className=" flex flex-row gap-5">
                        <div>
                            <img src={Section8} alt="Home" />
                            
                        </div>
                        <div className="text-[#808191]">Section 8</div>
                    </div>
                    <div className=" flex flex-row gap-5">
                        <div>
                            <img src={Section8} alt="Home" />
                            
                        </div>
                        <div className="text-[#808191]">Section 8</div>
                    </div>

                </div>


                </div>


            </div>
        </>
    );
};

export default Sidebar;

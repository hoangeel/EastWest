"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';

import icon from "../../assets/imgs/iconplay.png"
import section from "../../../public/images/section.png"


export default function Section() {
  const router = useRouter()
  return (
    <>
      <div className="w-full h-[1095px] max-lg:h-[730px] max-md:bg-sectionLg max-md:bg-[length:100%_120%] bg-section bg-no-repeat bg-[length:100%_120%] z-10">
        <div className='max-lg:h-[730px] w-full h-[1095px] bg-[#272626] opacity-60 absolute top-0 z-20' />
      </div>
      <div className='w-full  z-30 bg-none absolute top-0'>
        <div className="container px-[50px] mx-auto ">
          <div className=" max-lg:py-[166px] pt-[368px] pb-[294px] ">
            <h1 className='max-sm:text-[30px] max-md:max-w-[255px] max-lg:text-[41px] font-[100] text-[60px] leading-[107%] text-[#FFFFFF] max-w-[496px] mb-[30px]' >Learn The Ancient Art of Yoga</h1>
            <p className='max-md:max-w-[255px] max-lg:text-[17px] font-[400] text-[23px] leading-[147%] max-w-[486px] text-[#FFFFFF] mb-[30px] shadow-[0px 4px 4px rgba(0, 0, 0, 0.25);]'>Transform your life with the world’s leading yoga & meditation training community.</p>
            <div className='max-lg:w-full'><button className="max-sm:w-[80%] max-lg:mx-auto max-lg:w-[221px] max-lg:h-[59px] w-[179px] h-[67px] font-[700] text-[19x] leading-[29px] text-[#FFFFFF] rounded-[2px] border-[2px] border-[#BFA988] border-solid hover: opacity-60 hover:cursor-pointer">Learn More {">"}</button></div>
          </div>
        </div>
      </div>
      <div className=' max-lg:bg-[#231F1F] max-lg:h-[101px] max-lg:pt-[30px] max-lg:w-full max-lg:flex max-lg:flex-row-reverse max-md:top-[630px] max-lg:left-[0px] absolute top-[500px] left-[48%] hover:cursor-pointer hover:opacity-70 z-30'>
        <Image src={icon} alt="" className='max-lg:mr-auto max-lg:w-[40px] max-lg:h-[40px] w:[90px] h:auto'/>
        <p className='max-lg:ml-auto max-lg:mr-[30px] max-lg:mt-[0px] text-[20px] text-[#FFFFFF] font-[700] leading-[170%] ml-[-40px] mt-[26px]'>Watch The Video</p>
      </div>
    </>
  )
}


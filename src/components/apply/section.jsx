"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';

import veter from "../../assets/imgs/Vector(1).png"

export default function Section({title, cssImage}) {
  const router = useRouter()
  return (
    <div className='w-full h-full bg-[#272626]'>
      <div className='max-2xl:px-[76px] max-lg:px-[50px] max-sm:pt-[150px] max-sm:pb-[50px] container max-w-[1920px] px-[155px] pt-[228px] pb-[94px] mx-auto'>
        <h1 className='max-sm:text-[30px] max-md:max-w-[90%] max-lg:text-[41px] font-[100] text-[60px] leading-[107%] text-[#FFFFFF] max-w-[783px] mb-[30px]' >{title}</h1>
        <Image src={veter} alt='' className={'max-sm:my-[10px] max-lg:mt-[10px] max-lg:mb-[30px] w-[312px] h-[5.5px]  my-[10px]' + (" ") + cssImage}/>
      </div>  
    </div>
  )
}
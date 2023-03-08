"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import veter from "../../assets/imgs/Vector(1).png"


export default function CostaRica() {
  const router = useRouter()
  return (
    <div className="max-md:hidden w-full h-full bg-CostaRica bg-no-repeat bg-cover mt-[31px]">
      <div className="max-w-[1920px] mx-auto">
        <div className='max-lg:py-[150px] text-left pt-[315px] pb-[281px]'>
        {/* <h4 className='text-[31px] text-[#FFFFFF] pb-[31px] border-b-[2px] border-solid border-[#FFFFFF] origin-top-left  rotate-90 max-w-[351px]'>NEW IN 2023!</h4> */}
          <div className='max-xl:ml-[76px] ml-[162px] max-lg:mr-[100px]'>
            <h1 className='max-lg:mb-[40px] max-lg:text-[24px] font-[100] leading-[32.48px] text-[28px] text-[#ECDBAE] mb-[50px] '>Beach & Surf</h1>
            <h3 className='max-lg:text-[120px] font-Akronim'>Costa Rica</h3>
          </div>
          <Image src={veter} alt='' className='max-lg:my-[50px] w-[727px] h-[11px]  mt-[50px]'/>
        </div>
      </div>
    </div>
  )
}


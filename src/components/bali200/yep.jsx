"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import yepRYS from "../../assets/imgs/yepRYS.png";
import yepimg from "../../assets/imgs/yepImg.png";

export default function Yep() {
  const router = useRouter()
  return (
    <div className="w-full h-full bg-[#FFFFFF]">
      <div className="max-sm:py-[50px]  max-lg:px-[50px] max-xl:py-[100px] max-2xl:px-[76px] max-w-[1920px] mx-auto container px-[250px] py-[175px]" >
        <div className='max-lg:flex-col flex flex-row items-center'>
          <div className='max-lg:text-center'>
            <h4 className='max-sm:mb-[20px]  max-sm:text-[30px] mb-[50px] max-w-[652px] tracking-[.03em] font-[100] leading-[107%] text-[58px] text-[#000000]'>Yep, we’re with Yoga Alliance.</h4>
            <p className='max-sm:mb-[20px] max-sm:text-[17px] max-lg:mx-auto mb-[50px] max-w-[486px] font-[400] leading-[147%] text-[23px] text-[#000000]'>Getting registered with Yoga Alliance isn’t required to teach yoga. However, some studios require a 200 hour certification as a minimum requirement to teach yoga. </p>
            <Image src={yepRYS} alt='' className='max-sm:mb-[20px] max-lg:mb-[50px] max-lg:mx-auto'/>
          </div>
          <Image src={yepimg} alt='' className='max-lg:ml-0 ml-[33px] w-[729px] h-auto'/>
        </div>
      </div>
    </div>
  )
}


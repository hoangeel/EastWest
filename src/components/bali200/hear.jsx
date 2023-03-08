"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import veter from "../../assets/imgs/Vector(1).png"
import hear1 from "../../assets/imgs/hear1.png";
import hear2 from "../../assets/imgs/hear3.png";
import hear3 from "../../assets/imgs/hear2.png";

export default function Hear() {
  const router = useRouter()
  return (
    <div className=" w-full h-full bg-[#ffffff] bg-no-repeat bg-cover">
      <div className="max-xl:pb-[100px] max-2xl:px-[160px] max-xl:px-[76px] max-sm:px-[50px] max-sm:pt-[20px] max-sm:pb-[50px] max-lg:pt-[50px] max-xl:pt-[100px] max-w-[1920px] mx-auto container px-[338px]  pb-[229px] pt-[214px]" >
        <h4 className='max-sm:no-underline max-lg:text-[40px] max-xl:mb-[100px] max-md:text-[30px] mb-[126px] text-center tracking-[.03em] font-[100] leading-[97%] text-[58px] text-[#000000] underline decoration-dotted underline-offset-[26px] decoration-[#E2D9C3]'>Hear From Our Students:</h4>
        <div className='grid grid-cols-2'>
          <Image src={hear1} alt='' className='pr-[30px]'/>
          <Image src={hear2} alt='' className='mb-[58px]'/>
          <Image src={hear3} alt='' className='mt-[-120px] pr-[10px]'/>
          <Image src={hear1} alt='' className=''/>
        </div>
      </div>
    </div>
  )
}


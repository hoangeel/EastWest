"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import logo2 from "../../assets/imgs/LAYOGA.png"
import logo22 from "../../assets/imgs/MAGAZINE(1).png"
import logo from "../../assets/imgs/rys300(1).png";
import vecter1 from "../../assets/imgs/la-yoga-vector1.png";
import vecter2 from "../../assets/imgs/la-yoga-vector2.png";

export default function LaYoga({logo300, logo200, bg}) {
  const router = useRouter()
  return (
    <div className={bg + (" ") + "w-full h-full bg-laYoga bg-no-repeat bg-[length:100%_100%]"}>
      <div className="max-sm:py-[50px] max-lg:pt-[100px] max-w-[1920px] mx-auto container  pt-[139px] pb-[145px]" >
        <p className='max-md:max-w-[600px] max-md:text-[17px] font-[300] leading-[157%] text-[29px] text-[#FFFFFF] px-[50px] max-w-[876px] mx-auto'>
          We bring the best yoga teachers on earth to the best yoga resorts. See why LA Yoga 
          Magazine called East+west the “<b className='underline decoration-dotted underline-offset-8'>World’s Coolest Yoga Teacher Training</b>”.
        </p>
        <div className='max-sm:mt-[30px] max-lg:ml-0 max-xl:mt-[20px] mt-[-20px] flex flex-row items-end ml-[64px]'>
          <Image src={vecter1} alt='' className='max-sm:w-[30%] max-lg:w-[40%]' />
          <div className='max-sm:mx-[10px] max-md:mb-[-20px] mx-[30px] mb-[-30px]'>
            <Image src={logo} alt="" className={logo300 + (' ') + 'max-sm:px-[20px] w-[230px] h-auto mx-auto max-lg:w-[140px] max-lg:px-[10px] max-2xl:px-[30px] px-[65px]'}/>
            <Image src={logo2} alt="" className={logo200 + (' ') + 'w-[243px] h-auto mx-auto max-lg:w-[150px]'}/>
            <Image src={logo22} alt="" className={logo200 + (' ') + 'w-[133px] h-auto mx-auto mt-[14px] max-lg:w-[100px]'}/>
         </div>
          <Image src={vecter2} alt='' className='max-sm:w-[35%] max-lg:w-[40%]'/>
        </div>
      </div>
    </div>
  )
}


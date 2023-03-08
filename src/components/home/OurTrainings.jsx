"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import img200 from "../../assets/imgs/img200.png"
import img300 from "../../assets/imgs/img300.png"


export default function OurTrainings() {
  const router = useRouter()
  return (
    <div className="bg-[#231F1F] w-full max-md:hidden">
      <div className="bg-[#2D2A29] w-full h-[499px] max-lg:h-[350px]">
        <div className='max-lg:left-[50px] max-2xl:rotate-0 max-2xl:left-[75px] max-2xl:top-[50px] relative top-[250px] left-[100px] origin-center rotate-90 font-[700] leading-[153%] text-white text-[25px] max-w-[201px] drop-shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] pb-[20px] border-b-[15px] border-solid boder-[#A2B3CC]'>OUR TRAININGS</div>    
      </div>
      <div className="max-lg:px-[50px] max-lg:mt-[-150px] container max-w-[1920px] px-[76px] pt-[0px] pb-[126px] mx-auto mt-[-314px] ">
        <div className='max-lg:gap-[40px] grid grid-cols-2 gap-[93px] text-center'>
          <div className='max-w-[580px] ml-auto' onClick={() => router.push("./bali-200-hour")}>
            <Image src={img200} alt="" className='w-[580px] h-auto'/>
            <h1 className='max-lg:mt-[-250px] max-lg:text-[40px] max-lg:leading-[110%] max-xl:mt-[-300px] max-xl:mb-[150px] max-w-[414px] mx-auto mt-[-372px] text-white leading-[62.06px] mb-[213px]'>200 Hour Teacher Training</h1>
            <p className='font-[400] leading-[153%] text-white text-[25px] max-w-[486px] mx-auto'>New(ish) to yoga? Want to go deeper into your practice, and possibly teach? Join our 200 Hour Teacher training.</p>
          </div>
          <div className='max-w-[580px] mr-auto' onClick={() => router.push("./bali-300-hour")}>
            <Image src={img300} alt="" className='w-[580px] h-auto'/>
            <h1 className='max-lg:mt-[-250px] max-lg:text-[40px] max-lg:leading-[110%] max-xl:mt-[-300px] max-xl:mb-[150px] max-w-[414px] mx-auto mt-[-372px] text-white leading-[62.06px] mb-[213px]'>300 Hour Teacher Training</h1>
            <p className='font-[400] leading-[153%] text-white text-[25px] max-w-[486px] mx-auto'>Already finished your 200 hour? Want to hone your teaching craft, and go deeper into the subtle nature of yoga? Join our 300 hour.</p>
          </div>
        </div>  
      </div>
    </div>
  )
}


"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import veter from "../../assets/imgs/Vector(1).png"

export default function Application() {
  const router = useRouter()
  return (
    <div className='w-full h-full bg-[#FAF8F3] mt-[28px] mb-[82px] max-md:mb-[40px]'>
      <div className='max-md:py-[50px] max-2xl:px-[76px] max-lg:px-[50px] max-2xl:pb-[100px] container max-w-[1920px] px-[155px] pt-[109px] pb-[198px] mx-auto'>
        <h4 className='max-md:text-[30px] text-[44px]'>Application process</h4>
        <Image src={veter} alt='' className='max-sm:mt-[10px] max-lg:mt-[10px] w-[312px] h-[5.5px]  mt-[53px]'/>
        <div className=' max-lg:grid-cols-1 grid grid-cols-2 items-start'>
          <div className='max-md:mb-[30px] max-md:text-[14px] max-lg:mb-[50px] mt-[34.5px] font-[300] text-[23px] leading-[173%]  text-[#000000] max-w-[740px]'>
            <p className='mb-[50px] max-md:mb-[30px]'>
              This is some new text about the next step in the process. This is some new text about the next 
              step in the process.This is some new text about the next step in the process.This is some new 
              text about the next step in the process.
            </p>
            <button className='max-md:text-[14px] border-[#E7D0AD] border-b-[12px] border-solid font-[700] text-[27px] bg-[#D2B384] text-[#FFFFFF] w-[94%] h-[84px] hover:cursor-pointer hover:opacity-60'>I’d like to schedule a zoom info call {'>'}</button>
            <button className='max-md:mb-[30px] max-md:text-[14px] border-[#E7D0AD] border-b-[12px] border-solid font-[700] text-[27px] mt-[31px] mb-[65px] bg-[#D2B384] text-[#FFFFFF] w-[94%] h-[84px] hover:cursor-pointer hover:opacity-60'>I’m Ready to put my deposit down {'>'}</button>
            <p>
              *Deposits are refundable within 48 hours if you change your mind. They can also be transferred to 
              other months anytime 30 days before the training start date. Deposits are otherwise non-refundable. 
            </p>
          </div>
          <div className=' max-lg:pb-0 max-lg:border-0 max-lg:pl-0 max-lg:ml-0 max-xl:pl-[30px] max-xl:ml-[30px] pb-[800px] border-l-[1px] border-solid border-[#BFB79E] pl-[87px] ml-[50px]'>
            <div onClick={() => router.push("./contact")} className='max-md:bg-[#FAF8F3] max-md:text-[14px] max-md:border-0 max-md:p-0 max-lg:max-w-[400px] max-lg:mx-auto max-xl:p-[30px] pt-[49px] pb-[120px] px-[50px] text-[#000000] font-[700] leading-[143%] text-[28px] max-w-[548px] text-center bg-[#FFFFFF] border-[1px] border-solid border-[#ECDBAE] hover:cursor-pointer hover:opacity-70'>
              <p className='max-md:mb-[10px] mb-[30px]'>Questions?</p>
              <p className='font-[300] '>info@yogaeastwest.com Text/Whatsapp:+1 (716) 368-1714</p>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}



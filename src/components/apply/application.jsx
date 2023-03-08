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
            <p className='mb-[17px]'>
              East+West was founded with a rebellious spirit and an ambitious mission: to help students merge the 
              most beautiful aspects of Eastern and Western philosophies. A place unlike any in the world, East+West 
              was founded with a rebellious spirit and an ambitious mission: to help students merge the most beautiful 
              aspects of Eastern and Western philosophies. A place unlike any in the world,
            </p>
            <div className='space-y-[20px]'>
              <div className="w-full">
                <label className='font-[600] w-full mb-[10px]'>Full Name</label>
                <input className="max-xl:py-[10px] max-xl:px-[20px] py-[30px] px-[40px] w-full bg-[#FFFFFF] border-[1px] border-[#D2CAC3] border-solid rounded-[5px] " type="text" />
              </div>
              <div className="w-full">
                <label className='font-[600] w-full mb-[10px]'>Email Address:</label>
                <input className="max-xl:py-[10px] max-xl:px-[20px] py-[30px] px-[40px] w-full bg-[#FFFFFF] border-[1px] border-[#D2CAC3] border-solid rounded-[5px] " type="text" />
              </div>
              <div className="w-full">
                <label className='font-[600] w-full mb-[10px]'>Phone Number (please include country code):</label>
                <input className="max-xl:py-[10px] max-xl:px-[20px] py-[30px] px-[40px] w-full bg-[#FFFFFF] border-[1px] border-[#D2CAC3] border-solid rounded-[5px] " type="text" />
              </div>
              <div className="w-full">
                <label className='font-[600] w-full mb-[10px]'>Which event are you applying for?:</label>
                <input className="max-xl:py-[10px] max-xl:px-[20px] py-[30px] px-[40px] w-full bg-[#FFFFFF] border-[1px] border-[#D2CAC3] border-solid rounded-[5px]" type="text" placeholder="Soonest Available"/>
              </div>
              <div className="w-full">
                <label className='font-[600] w-full mb-[10px]'>Where do you live?</label>
                <input className="max-xl:py-[10px] max-xl:px-[20px] py-[30px] px-[40px] w-full bg-[#FFFFFF] border-[1px] border-[#D2CAC3] border-solid rounded-[5px]" type="text" placeholder="(city, state, country)"/>
              </div>
              <div className="w-full">
                <label className='font-[600] w-full mb-[10px]'>Experience Levels:</label>
                <input className="max-xl:py-[10px] max-xl:px-[20px] py-[30px] px-[40px] w-full bg-[#FFFFFF] border-[1px] border-[#D2CAC3] border-solid rounded-[5px]" type="text" placeholder="1-6 months practice"/>
              </div>
            </div>
            <button onClick={() => router.push("./apply-next")} className='border-[#E7D0AD] border-b-[12px] border-solid max-lg:mt-[30px] max-sm:h-[40px] max-xl:h-[60px] max-xl:w-[50%] mt-[48px] bg-[#D2B384] text-[#FFFFFF] w-[336px] h-[84px] hover:cursor-pointer hover:opacity-60'>NEXT {'>'}</button>
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



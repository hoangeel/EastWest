"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import logo from "../../assets/imgs/logo.png"
import icon from "../../assets/imgs/iglogo.png";


export default function Footer() {
  const router = useRouter()
  return (
    <div className="w-full h-full bg-[#231F1F]">
      <div className="max-sm:py-[50px] max-md:px-[50px] max-xl:pt-[100px] max-xl:px-[76px] max-w-[1920px] mx-auto container px-[100px] pt-[199px] pb-[50px]" >
        <div className='max-sm:flex-col  flex flex-row items-center'>
          <Image onClick={() => router.push("./")} src={logo} alt='' className='max-sm:mr-0 max-md:mb-[30px] max-lg:mr-[50px] max-xl:ml-0 max-xl:mr-[100px] ml-[60px] mr-[258px]'/>
          <div>
            <ul stype="list-style-type:circle" className='max-sm:text-center max-md:space-y-[20px] space-y-[30px]'>
              <li className='max-md:text-[13px] max-lg:text-[24px] font-[400] leading-[146%] text-[27px] text-[#AD9E98] hover:cursor-pointer hover:opacity-70'>BLOG & RESOURCES</li>
              <li className='max-md:text-[13px] max-lg:text-[24px] font-[400] leading-[146%] text-[27px] text-[#AD9E98] hover:cursor-pointer hover:opacity-70'>E+W ON YOGA ALLIANCE</li>
              <li className='max-md:text-[13px] max-lg:text-[24px] font-[400] leading-[146%] text-[27px] text-[#AD9E98] hover:cursor-pointer hover:opacity-70'>CONTACT US</li>
              <li className='max-md:text-[13px] max-lg:text-[24px] font-[400] leading-[146%] text-[27px] text-[#AD9E98] hover:cursor-pointer hover:opacity-70'>BALI TEACHER TRAINING</li>
              <li className='max-md:text-[13px] max-lg:text-[24px] font-[400] leading-[146%] text-[27px] text-[#AD9E98] hover:cursor-pointer hover:opacity-70'>COSTA RICA TEACHER TRAINING</li>
            </ul>
          </div>
        </div>
        <div className='max-md:mt-[20px] max-xl:mt-[50px] flex flex-row items-center mt-[100px]'>
          <p className='max-md:text-[12px] ml-auto font-[400] leading-[147%] text-[23px] text-[#FFFFFF] hover:cursor-pointer hover:opacity-70'>Follow Us On Instagram {">"}</p>
          <Image src={icon} alt='' className='max-md:w-[40px] max-md:ml-[10px] ml-[25px] w-[57px] h-auto hover:cursor-pointer hover:opacity-70'/>
        </div>
        <hr className='max-md:my-[20px] mt-[48px] mb-[30px] bg-[#AD9D98]'/>
        <div className='max-md:space-y-[10px] max-md:flex-col max-xl:px-0 flex flex-row px-[60px]'>
          <p className='max-md:text-[12px] max-lg:text-[16px] font-[400] leading-[147%] text-[23px] text-[#AD9E98]'>© 2023 EAST+WEST All rights reserved.</p>
          <p className='max-md:ml-0 max-md:text-[12px] max-lg:text-[16px] max-xl:mr-[30px] ml-auto mr-[50px] font-[400] leading-[147%] text-[23px] text-[#AD9E98] hover:cursor-pointer hover:opacity-70'>Privacy Policy</p>
          <p className='max-md:text-[12px] max-lg:text-[16px] font-[400] leading-[147%] text-[23px] text-[#AD9E98] hover:cursor-pointer hover:opacity-70'>Terms & Conditions</p>
        </div>
      </div>
    </div>
  )
}


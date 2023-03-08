"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import veter from "../../assets/imgs/Vector(1).png"

export default function Sample() {
  const router = useRouter()
  return (
    <div className=" w-full h-full bg-sample bg-no-repeat bg-[length:100%_100%]">
      <div className="max-sm:pt-[20px] max-sm:pb-[50px] max-lg:pt-[50px] max-xl:pt-[100px] max-w-[1920px] mx-auto container  pb-[210px] pt-[155px]" >
        <div className='max-sm:flex-col flex flex-row max-sm:p-[50px] max-lg:p-[50px] max-w-[1412px] mx-auto bg-white py-[85px] px-[80px] max-xl:px-[80px]'>
          <div className='max-sm:max-w-[100%] max-sm:text-center max-sm:mr-[20px] max-xl:mr-[30px] max-xl:max-w-[45%] max-w-[505px] mr-[67px]'>
            <h4 className='max-sm:text-[20px] max-md:text-[30px] text-[44px] text-[#3E3830] leading-[97%]'>Sample Daily Schedule</h4>
            <Image src={veter} alt='' className='max-sm:mx-auto max-md:my-[20px] max-xl:my-[30px] max-sm:w-[120px] max-lg:w-[150px] max-sm:h-[3px] w-[312px] h-[5.5px] mb-[51px] mt-[65px]'/>
            <p className='max-md:text-[14px] font-[300] leading-[173%] text-[23px] text-[#000000]'>
              Yoga teachers who succeed in the modern world carry two things; the integrity of the 
              ancient yoga practice, and a high standard of professional habits. This teacher training 
              is designed to instill students with both of these. The focus is on finding integration 
              between Eastern spiritual practices and western life and developing the life and professional 
              habits to make the dream of teaching yoga a reality.
            </p>
          </div>
          <div className='max-sm:text-center max-sm:mt-[50px] max-md:mt-[80px] max-w-[683.26px] mt-[150px]'>
            <p className='max-md:text-[14px] max-lg:text-[26px] font-[700] leading-[147%] text-[32px] text-[#2D2A29]'>7:00-9:00 AM Sadhana & Yoga Practice</p>
            <hr className='max-md:my-[10px] my-[20px] '/>
            <p className='max-md:text-[14px] max-lg:text-[26px] font-[700] leading-[147%] text-[32px] text-[#2D2A29]'>7:00-9:00 AM Sadhana & Yoga Practice</p>
            <hr className='max-md:my-[10px] my-[20px] '/>
            <p className='max-md:text-[14px] max-lg:text-[26px] font-[700] leading-[147%] text-[32px] text-[#2D2A29]'>7:00-9:00 AM Sadhana & Yoga Practice</p>
            <hr className='max-md:my-[10px] my-[20px] '/>
            <p className='max-md:text-[14px] max-lg:text-[26px] font-[700] leading-[147%] text-[32px] text-[#2D2A29]'>7:00-9:00 AM Sadhana & Yoga Practice</p>
            <hr className='max-md:my-[10px] my-[20px] '/>
            <p className='max-md:text-[14px] max-lg:text-[26px] font-[700] leading-[147%] text-[32px] text-[#2D2A29]'>7:00-9:00 AM Sadhana & Yoga Practice</p>
            <hr className='max-md:my-[10px] my-[20px] '/>
            <p className='max-md:text-[14px] max-lg:text-[26px] font-[700] leading-[147%] text-[32px] text-[#2D2A29]'>7:00-9:00 AM Sadhana & Yoga Practice</p>
            <hr className='max-md:my-[10px] my-[20px] '/>
            <p className='max-md:text-[14px] max-lg:text-[26px] font-[700] leading-[147%] text-[32px] text-[#2D2A29]'>7:00-9:00 AM Sadhana & Yoga Practice</p>
          </div>
        </div>
      </div>
    </div>
  )
}


"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import our2 from "../../assets/imgs/our2.png";
import our1 from "../../assets/imgs/our1.png";
import our300 from "../../assets/imgs/our300.png";

export default function OurBali200({hidden200, hidden300, text, textname}) {
  const router = useRouter()
  return (
    <div className=" w-full h-full bg-[#ffffff] bg-no-repeat bg-cover">
      <div className="max-sm:px-[50px] max-sm:pt-[20px] max-sm:pb-[50px] max-lg:pt-[50px] max-xl:pt-[100px] max-w-[1920px] mx-auto container  pb-[83px] pt-[268px]" >
        <div className='max-sm:px-0 max-sm:space-x-0 max-sm:flex-col max-md:space-x-[30px] max-lg:mb-[50px] flex flex-row items-center mb-[85px] pr-[50px] space-x-[60px]'>
          <hr className='max-sm:hidden w-[300px] mr-[10px] mb-[150px]'/>
          <Image src={our2} alt='' className={hidden200 + (" ") + 'max-sm:w-[40%] h-auto max-sm:mx-auto max-sm:mb-[20px]'} />
          <Image src={our300} alt='' className={hidden300 + (" ") +'max-sm:w-[40%] h-auto max-sm:mx-auto max-sm:mb-[20px]'} />
          <div className='max-sm:text-center max-w-[585px] text-left'>
            <p className='max-sm:mb-[10px] max-sm:text-[20px] max-lg:mb-[30px] max-lg:text-[26px] font-[600] leading-[147%] text-[36px] text-[blank] mb-[80px]'>{text}</p>
            <p className='max-sm:text-[26px] max-lg:text-[30px] text-[40px] text-[#3E3830]'>{textname}</p>
          </div>
        </div>
        <div className='max-sm:px-0 max-sm:space-x-0 max-sm:flex-col max-md:space-x-[30px] flex flex-row-reverse items-center space-x-[60px] pl-[50px]'>
          <hr className='max-sm:hidden max-xl:ml-[70px] w-[300px] ml-[169px] mt-[100px]'/>
          <Image src={our1} alt='' className='max-sm:w-[40%] h-auto max-sm:mx-auto max-sm:mb-[20px]' />
          <div className='max-sm:text-center max-w-[585px] text-right'>
            <p className='max-sm:mb-[10px] max-sm:text-[20px] max-lg:mb-[30px] max-lg:text-[26px] font-[600] leading-[147%] text-[36px] text-[blank] mb-[80px]'>““There aren’t words to describe the unbelievable awesomeness of this experience. All the teachers are real life unicorns.”</p>
            <p className='max-sm:text-[26px] max-lg:text-[30px]  text-[40px] text-[#3E3830]'>-Tamah, LA</p>
          </div>
        </div>
      </div>
    </div>
  )
}


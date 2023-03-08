"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import img from "../../assets/imgs/image15.png";


export default function Schedule() {
  const router = useRouter()
  return (
    <div className="w-full h-full bg-[#ffffff] bg-Schedule bg-no-repeat bg-[length:100%_100%]">
      <div className="max-sm:py-[50px] max-md:px-[50px] max-xl:px-[76px] max-w-[1717px] mx-auto container px-[160px] pt-[242px] pb-[106px] max-lg:pt-[200px]" >
        <div className='max-sm:p-[20px] items-center max-lg:flex-col max-xl:px-[50px] max-xl:py-[50px] flex flex-row py-[83px] px-[142px] bg-[#E9DFD3] boder-[2px] border-[#3B3535] border-solid'>
          <Image src={img} alt="" className='max-lg:mx-auto max-lg:w-[50%]'/>
          <div className='max-lg:ml-0 max-xl:ml-[50px] ml-[102px] text-center max-w-[526px]'>
            <h4 className='max-sm:text-[16px] max-sm:my-[20px] max-xl:mb-[50px] font-[100] leading-[79%] text-[44px] text-[#2D2A29] max-w-[425px] mx-auto mb-[72px] mt-[24px]'>Schedule a Free Zoom Info Call</h4>
            <p className='max-sm:text-[14px] max-sm:my-[20px] font-[400] leading-[147%] text-[28px] text-[#2D2A29] mb-[19px]'>Overwhelmed with options? Questions about Yoga Alliance? Let’s schedule a free zoom info call.</p>
            <button className='max-sm:text-[16px] max-sm:w-full bg-[#FFFFFF] font-[700] leading-[29px] text-[21px] text-[#000000] w-[310px] h-[71px] hover:cursor-pointer hover:opacity-70'>Schedule a Call {'>'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}


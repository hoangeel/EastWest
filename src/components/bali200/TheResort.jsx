"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import checkT from "../../assets/imgs/check-t.png";
import Resort1 from "../../assets/imgs/Resort1.png";
import Resort2 from "../../assets/imgs/Resort2.png";
import Resort3 from "../../assets/imgs/Resort3.png";
import Resort4 from "../../assets/imgs/Resort4.png";
import Resort5 from "../../assets/imgs/Resort5.png";

export default function TheResort() {
  const router = useRouter()
  return (
    <div className=" w-full h-full bg-[#ffffff] bg-no-repeat bg-cover">
      <div className="max-xl:px-[76px] max-sm:px-[50px] max-sm:pt-[20px] max-sm:pb-[50px] max-lg:pt-[50px] max-xl:pt-[100px] max-w-[1920px] mx-auto container px-[160px]  pb-[62px] pt-[78px]" >
        <div className='max-lg:grid-cols-1 grid grid-cols-2'>
          <div className='max-lg:mr-0 max-lg:pr-0 max-lg:border-0 max-xl:mr-[10px] max-xl:pr-[30px] max-2xl:mr-[50px] max-2xl:pr-[50px] mr-[140px] pr-[74px] max-w-[765px] border-r-[1px] border-solid border-[#D5CEB7]'>
            <h4 className='max-sm:mb-[20px] max-lg:mb-[30px] max-xl:mb-[50px] max-sm:text-[30px] mb-[142px] tracking-[.03em] font-[100] leading-[97%] text-[58px] text-[#000000]'>The Resort</h4>
            <p className='max-sm:text-[16px] max-lg:mb-[30px] font-[300] leading-[157%] text-[29px] text-[#3E3830] mb-[40px]'>We’ve run over 50 trainings in Bali at 5 different resorts, so we know a thing or two about selective spaces. </p>
            <div className='max-lg:space-y-[20px] max-xl:ml-[0px] ml-[40px] space-y-[40px]'>
              <div className='flex flex-row'>
                <Image src={checkT} alt='' className='max-sm:w-[20px] max-sm:h-[20px] max-xl:mt-[5px] max-xl:w-[40px] max-xl:h-[40px] w-[56px] h-[56px]'/>
                <div className='ml-[16px] max-xl:ml-[10px]'>
                  <p className='max-sm:text-[16px] max-lg:mb-[10px] font-[600] leading-[157%] text-[29px] text-[#3E3830] mb-[40px]'>Newly renovated rooms</p>
                  <p className='max-sm:text-[14px] font-[300] leading-[157%] text-[24px] text-[#3E3830]'>Ubud is in the jungle, and many resorts have mold problems in their rooms.</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <Image src={checkT} alt='' className='max-sm:w-[20px] max-sm:h-[20px] max-xl:mt-[5px] max-xl:w-[40px] max-xl:h-[40px] w-[56px] h-[56px]'/>
                <div className='ml-[16px] max-xl:ml-[10px]'>
                  <p className='max-sm:text-[16px] max-lg:mb-[10px] font-[600] leading-[157%] text-[29px] text-[#3E3830] mb-[40px]'>Newly renovated rooms</p>
                  <p className='max-sm:text-[14px] font-[300] leading-[157%] text-[24px] text-[#3E3830]'>Ubud is in the jungle, and many resorts have mold problems in their rooms.</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <Image src={checkT} alt='' className='max-sm:w-[20px] max-sm:h-[20px] max-xl:mt-[5px] max-xl:w-[40px] max-xl:h-[40px] w-[56px] h-[56px]'/>
                <div className='ml-[16px] max-xl:ml-[10px]'>
                  <p className='max-sm:text-[16px] max-lg:mb-[10px] font-[600] leading-[157%] text-[29px] text-[#3E3830] mb-[40px]'>Newly renovated rooms</p>
                  <p className='max-sm:text-[14px] font-[300] leading-[157%] text-[24px] text-[#3E3830]'>Ubud is in the jungle, and many resorts have mold problems in their rooms.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='space-y-[40px] mb-[110px] max-lg:mb-[50px] max-lg:space-y-0 max-lg:grid max-lg:grid-cols-2 max-lg:mt-[20px] max-sm:grid-cols-1 max-sm:space-y-[20px]'>
            <Image src={Resort1} alt='' className='max-sm:p-0 max-lg:p-3 max-lg:mx-auto ml-auto w-[100%] h-auto'/>
            <Image src={Resort2} alt='' className='max-sm:p-0 max-lg:p-3 max-lg:mx-auto ml-auto w-[100%] h-auto'/>
            <Image src={Resort3} alt='' className='max-sm:p-0 max-lg:p-3 max-lg:mx-auto ml-auto w-[100%] h-auto'/>
            <Image src={Resort4} alt='' className='max-sm:p-0 max-lg:p-3 max-lg:mx-auto ml-auto w-[100%] h-auto'/>
            <Image src={Resort5} alt='' className='max-sm:p-0 max-lg:p-3 max-lg:mx-auto ml-auto w-[100%] h-auto'/>
          </div>
        </div>
      </div>
    </div>
  )
}


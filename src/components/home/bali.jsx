"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import iconglobe from "../../assets/imgs/iconglobe.png"
import icon from "../../assets/imgs/iconplay.png"
import veter from "../../assets/imgs/Vector.png"


export default function Bali() {
  const router = useRouter()
  return (
    <div className='max-md:hidden'>
      <div className="max-lg:mt-[100px] w-full h-full bg-bali bg-no-repeat bg-cover mt-[319px] z-10">
        <div className="max-w-[1920px] mx-auto">
          <div className='text-right pt-[490px] pb-[151px]'>
            <div className='mr-[230px] max-lg:mr-[100px]'>
              <h1 className='max-lg:mb-[40px] max-lg:text-[24px] font-[100] leading-[32.48px] text-[28px] text-[#ECDBAE] mb-[69.53px] '>Bamboo & rice Fields</h1>
              <h2 className='max-lg:text-[120px]'>Ubud, Bali</h2>
            </div>
            <Image src={veter} alt='' className='max-lg:my-[50px] w-[727px] h-[11px] ml-auto mt-[100px] mb-[60px]'/>
            <div className='flex flex-row mr-[230px]'>
              <Image src={icon} alt='' className='w-[82.57px] h-[82.57px] ml-auto hover:cursor-pointer hover:opacity-70'/>
              <p className='font-[700] leading-[130%] text-[20px] text-[#FFFFFF] ml-[40.2px] mt-[10px] max-w-[270px] text-left'>Watch The Video (seriously, don’t skip this)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto bg-text bg-no-repeat bg-center bg-[length:100%_95%] z-20 absolute top-[1082px] max-lg:top-[588px]">
        <p className='max-lg:pt-[50px] text-center font-[300] leading-[45.53px] text-[29px] text-[#3E3830] max-w-[571px] mx-auto pt-[123px]'>
          East+West is the worldwide leader in yoga teacher training. We co-create beautiful, 
          miraculous, yoga trainings featuring master teachers from India.
        </p>
        <div className='pb-[98px] pt-[40px] max-lg:pb-[50px] '><Image src={iconglobe} alt='' className='w-[87px] h-[87px] mx-auto' /></div>
      </div>
    </div>
  )
}


"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import logo1 from "../../assets/imgs/logo-yoga.png"
import logo2 from "../../assets/imgs/logo-layoga.png"
import logo22 from "../../assets/imgs/MAGAZINE.png"
import logo3 from "../../assets/imgs/logo-vinny.png"
import logo4 from "../../assets/imgs/logo-yovada.png"


export default function Logo() {
  const router = useRouter()
  return (
    <div className="bg-[#EFE8DD] max-md:hidden">
      <div className="container max-w-[1920px] px-[76px] pt-[67px] pb-[79px] mx-auto ">
        <div className='grid grid-cols-4 gap-4'>
          <div><Image src={logo1} alt="" className='w-[548px] h-auto'/></div>
          <div>
            <Image src={logo2} alt="" className='w-[243px] h-auto mx-auto max-lg:w-[150px]'/>
            <Image src={logo22} alt="" className='w-[133px] h-auto mx-auto mt-[14px] max-lg:w-[100px]'/>
          </div>
          <div><Image src={logo3} alt="" className='w-[172px] h-auto mx-auto max-lg:w-[150px]'/></div>
          <div><Image src={logo4} alt="" className='w-[265px] h-auto mx-auto max-lg:w-[150px]'/></div>
        </div>
      </div>
    </div>
  )
}


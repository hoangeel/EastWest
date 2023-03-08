"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import imgFor from "../../assets/imgs/for2.png";
import imgFor2 from "../../assets/imgs/for1.png";


export default function For() {
  const router = useRouter()
  return (
    <div className="max-md:hidden w-full h-full bg-[#ffffff] bg-no-repeat bg-cover">
      <div className="max-w-[1920px] mx-auto container  pt-[127px] pb-[284px]" >
        <div className='max-lg:grid-cols-1 grid grid-cols-2'>
          <div className='max-lg:text-center'>
            <h4 className='max-lg:mx-auto  max-xl:ml-[76px] max-w-[500px] ml-[160px] mb-[40px]'>For The Love of India</h4>
            <div className='flex flex-row items-center mb-[56px]'>
              <div className='max-lg:w-[90%] max-xl:w-[710px] w-[700px] h-[2px] bg-[#D5CEB7] '/>
              <Image src={imgFor2} alt='' className=' ml-[11px]'/>
            </div>
            <p className='max-lg:mx-auto max-xl:ml-[76px] ml-[160px] max-w-[585px] font-[300] text-[29px] leading-[157%]'>
              Many of our teachers were born from India, but all of us are from there. 
              We love diving deep into the authentic traditions of yoga.
            </p>
          </div>
          <div className='max-lg:mx-auto max-lg:mt-[40px] max-xl:w-[450px] max-xl:h-[100%] w-[603px] h-[603px] bg-For bg-no-repeat bg-cover '>
            <Image src={imgFor} alt="" className='mx-auto max-xl:w-[300px] max-xl:h-[400px]' />
          </div>
        </div>
      </div>
    </div>
  )
}


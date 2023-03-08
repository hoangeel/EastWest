"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import veter from "../../assets/imgs/Vector(1).png"
import checkT from "../../assets/imgs/check-t.png";


export default function We() {
  const router = useRouter()
  return (
    <div className="w-full h-full bg-[#FFFFFF]">
      <div className="max-2xl:px-[100px] max-sm:py-[50px] max-md:px-[50px] max-xl:pt-[100px] max-xl:px-[76px] max-w-[1920px] mx-auto container px-[221px] pt-[98px] pb-[128px]" >
        <h4 className='max-lg:text-center text-[#3E3830] max-sm:text-[30px]  font-[100] leading-[97%] text-[44px]'>Unlike any training on earth</h4>
        <Image src={veter} alt='' className='max-lg:mx-auto max-md:my-[20px] max-xl:my-[30px] max-sm:w-[120px] max-lg:w-[150px] max-sm:h-[3px] w-[312px] h-[5.5px] mb-[45.4px] mt-[17px]'/>
        <p className='font-[300] leading-[173%] text-[23px] text-[#000000] max-w-[717px] mb-[63px]'>
          East+West, that’s kind of a funny name, isn’t it? We agree. We take our name seriously. 
          We believe we live in a unique time in history, where we has access and influence to a 
          wider array of culture from both the eastern and western worlds. For the first time in 
          history, one individual can embody the virtues of both of these cultures. This organization 
          is a lightening rod for individuals who seek this reality in their lives.
        </p>
        <div className='max-lg:grid-cols-1 grid grid-cols-2'>
          <div className='max-lg:ml-0 max-lg:pr-0 max-lg:border-0 max-lg:pb-[50px] max-xl:mr-[30px] max-2xl:pb-[100px] mr-[60px]  border-r-[1px] border-solid border-[#BFB79E] pb-[200px] pr-[20px]'>
            <h4 className='max-sm:text-[20px] font-[100] leading-[116%] text-[30px] text-[#000000]'>Virtues of  the East:</h4>
            <Image src={veter} alt='' className='max-md:my-[20px] max-xl:my-[30px] max-sm:w-[120px] max-lg:w-[150px] max-sm:h-[3px] w-[340px] h-[6px] mb-[65px] mt-[10px]'/>
              <div>
                <div className='flex flex-row items-start mb-[30px]'>
                  <Image src={checkT} alt='' className='max-sm:w-[20px] max-sm:h-[20px] max-xl:mt-[5px] max-xl:w-[40px] max-xl:h-[40px] w-[45px] h-[45px]'/>
                  <p className='max-sm:text-[16px] font-[300] leading-[137%] text-[31px] text-[#000000] ml-[17px] '>Immense inner peace.</p>
                </div>
                <div className='flex flex-row items-start mb-[30px]'>
                  <Image src={checkT} alt='' className='max-sm:w-[20px] max-sm:h-[20px] max-xl:mt-[5px] max-xl:w-[40px] max-xl:h-[40px] w-[45px] h-[45px]'/>
                  <p className='max-sm:text-[16px] font-[300] leading-[137%] text-[31px] text-[#000000] ml-[17px] '>Mastery of the subtle body.</p>
                </div>
                <div className='flex flex-row items-start mb-[30px]'>
                  <Image src={checkT} alt='' className='max-sm:w-[20px] max-sm:h-[20px] max-xl:mt-[5px] max-xl:w-[40px] max-xl:h-[40px] w-[45px] h-[45px]'/>
                  <p className='max-sm:text-[16px] font-[300] leading-[137%] text-[31px] text-[#000000] ml-[17px] '>Rich spiritual relationship.</p>
                </div>
              </div>
          </div>
          <div className='max-lg:ml-0 max-xl:ml-[30px] ml-[60px]'>
            <h4 className='max-sm:text-[20px] font-[100] leading-[116%] text-[30px]'>Virtues of  the West:</h4>
            <Image src={veter} alt='' className=' max-md:my-[20px] max-xl:my-[30px] max-sm:w-[120px] max-lg:w-[150px] max-sm:h-[3px] w-[340px] h-[6px] mb-[65px] mt-[10px]'/>
              <div>
                <div className='flex flex-row items-start mb-[30px]'>
                  <Image src={checkT} alt='' className='max-sm:w-[20px] max-sm:h-[20px] max-xl:mt-[5px] max-xl:w-[40px] max-xl:h-[40px] w-[45px] h-[45px]'/>
                  <p className='max-sm:text-[16px] font-[300] leading-[137%] text-[31px] text-[#000000] ml-[17px] '>Design focus.</p>
                </div>
                <div className='flex flex-row items-start mb-[30px]'>
                  <Image src={checkT} alt='' className='max-sm:w-[20px] max-sm:h-[20px] max-xl:mt-[5px] max-xl:w-[40px] max-xl:h-[40px] w-[45px] h-[45px]'/>
                  <p className='max-sm:text-[16px] font-[300] leading-[137%] text-[31px] text-[#000000] ml-[17px] '>Acceptance and integration of physical abundance.</p>
                </div>
                <div className='flex flex-row items-start mb-[30px]'>
                  <Image src={checkT} alt='' className='max-sm:w-[20px] max-sm:h-[20px] max-xl:mt-[5px] max-xl:w-[40px] max-xl:h-[40px] w-[45px] h-[45px]'/>
                  <p className='max-sm:text-[16px] font-[300] leading-[137%] text-[31px] text-[#000000] ml-[17px] '>Precise learning methods & science.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}


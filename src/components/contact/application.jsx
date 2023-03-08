"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import veter from "../../assets/imgs/Vector(1).png"

export default function ContactUs() {
  const router = useRouter()
  return (
    <div className='w-full h-full bg-[#FAF8F3] mt-[28px] mb-[82px] max-md:mb-[40px]'>
      <div className='max-lg:py-[50px] max-md:py-[50px] max-2xl:px-[76px] max-lg:px-[50px] max-2xl:pb-[100px] container max-w-[1920px] px-[155px] pt-[125px] pb-[198px] mx-auto'>
        <div className=' max-lg:grid-cols-1 grid grid-cols-2 items-start'>
          <div className='max-lg:max-w-full max-w-[548px] mr-[50px] max-lg:mr-0'>
            <div className='max-md:max-w-full max-lg:max-w-[60%] max-md:bg-[#FAF8F3] max-md:text-[14px] max-md:border-0 max-md:p-0  max-lg:mx-auto max-xl:p-[30px] pt-[49px] pb-[120px] px-[50px] text-[#000000] font-[700] leading-[143%] text-[28px] max-w-[548px] text-center bg-[#FFFFFF] border-[1px] border-solid border-[#ECDBAE] hover:cursor-pointer hover:opacity-70'>
              <p className='max-md:mb-[10px] mb-[30px]'>CONTACT US:</p>
              <p className='font-[300] '>info@yogaeastwest.com Text/Whatsapp:+1 (716) 368-1714</p>
            </div>
            <p className='max-md:max-w-full max-md:text-[14px] max-md:mt-[10px] max-lg:max-w-[60%] max-lg:mt-[30px] max-lg:mb-[30px] mt-[100px] text-center mx-auto max-w-[450px] font-[300] text-[28px] leading-[143%] text-[#000000]'>Jl. Raya Campuhan Ubud, Kedewatan, Kec. Gianyar, Kabupaten Gianyar, Bali 80571, Indonesia</p>
          </div>
          <div className='max-md:mb-[30px] max-md:text-[14px] max-lg:mb-[50px] font-[300] text-[23px] leading-[173%]  text-[#000000] max-w-[722px]'>
            <h4 className='max-md:mb-[10px] max-md:text-[20px] text-[44px] mb-[46px] max-xl:text-[30px]'>Send us a message:</h4>
            <div className="w-full mb-[20px]">
              <label className='font-[600] w-full mb-[10px]'>Full Name</label>
              <input className="max-xl:py-[10px] max-xl:px-[20px] py-[30px] px-[40px] w-full bg-[#FFFFFF] border-[1px] border-[#D2CAC3] border-solid rounded-[5px] " type="text" />
            </div>
            <div className="w-full mb-[20px]">
              <label className='font-[600] w-full mb-[10px]'>Email Address:</label>
              <input className="max-xl:py-[10px] max-xl:px-[20px] py-[30px] px-[40px] w-full bg-[#FFFFFF] border-[1px] border-[#D2CAC3] border-solid rounded-[5px] " type="text" />
            </div>
            <div className="w-full mb-[20px]">
              <label className='font-[600] w-full mb-[10px]'>Message:</label>
              <input type="textarea" className="top align-top max-md:min-h-[100px] max-xl:min-h-[200px] min-h-[489px] max-xl:py-[10px] max-xl:px-[20px] py-[30px] px-[40px] w-full bg-[#FFFFFF] border-[1px] border-[#D2CAC3] border-solid rounded-[5px] " />
            </div>
            <button onClick={() => router.push("./apply-next")} className='max-md:mt-[10px] border-[#E7D0AD] border-b-[12px] border-solid max-lg:mt-[30px] max-sm:h-[40px] max-xl:h-[60px] max-xl:w-[50%] mt-[48px] bg-[#D2B384] text-[#FFFFFF] w-[336px] h-[84px] hover:cursor-pointer hover:opacity-60'>NEXT {'>'}</button>
          </div>
        </div>
      </div>  
    </div>
  )
}



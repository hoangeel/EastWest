"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';

import icon from "../../assets/imgs/iconplay.png"
import veter from "../../assets/imgs/Vector(1).png"
const bg="bg-bali200"

export default function Section( {mbImage, pt, cssAbout, footerAbout, hour, title, text, footer, cssVideo, background, textCenter, cssbutton, cssP}) {
  const router = useRouter()
  return (
    <>
      <div className={ background + (' ') + " w-full h-[1095px] max-lg:h-[780px] bg-no-repeat bg-[length:100%_100%] bg-center " + (" ") + cssAbout}>
        <div className={'max-lg:h-[780px] w-full h-[1095px] bg-[#272626] opacity-60 absolute top-0 ' + (" ") + cssAbout} />
        <div className={footerAbout + (" ") +  'max-sm:top-[650px] max-lg:top-[630px] absolute top-[1000px]  right-0'}>
          <Image src={veter} alt='' className='max-sm:mb-[5px] max-sm:w-[120px] max-lg:w-[150px] max-sm:h-[3px] max-lg:mb-[10px] w-[244px] h-[5px] mb-[22px] ml-auto'/>
          <h1 className='max-sm:text-[12px] max-lg:text-[16px] font-[100] text-[33px] leading-[107%] text-[#FFFFFF] mr-[44px]'>{footer}</h1>
        </div>
      </div>
      <div className='w-full  bg-none absolute top-0'>
        <div className="container px-[50px] mx-auto ">
          <div className={ textCenter + (' ') + "max-sm:py-[140px] max-lg:py-[166px] pb-[248px]" + (" ") + pt}>
            <p className='font-[700] leading-[29px] text-[19px] text-[#FFFFFF]'>{hour}</p>
            <Image src={veter} alt='' className={ textCenter + (" ") + 'max-sm:my-[10px] max-lg:mt-[10px] max-lg:mb-[30px] w-[312px] h-[5.5px]  my-[10px]' + (' ') + mbImage }/>
            <h1 className={textCenter + (" ") + 'max-sm:text-[30px] max-md:max-w-[90%] max-lg:text-[41px] font-[100] text-[60px] leading-[107%] text-[#FFFFFF] max-w-[783px] mb-[30px]'} >{title}</h1>
            <p className={textCenter + (" ") + 'max-sm:mb-[20px] max-md:max-w-[90%] max-lg:text-[17px] font-[400] text-[23px] leading-[147%] max-w-[486px] text-[#FFFFFF] mb-[58px] shadow-[0px 4px 4px rgba(0, 0, 0, 0.25);]' + (" ") + cssP}>{text}</p>
            <div className='max-lg:w-full'><button className={cssbutton + (" ") + " max-lg:mx-auto max-lg:w-[221px] max-lg:h-[59px] w-[164px] h-[67px] font-[700] text-[19x] leading-[29px] text-[#FFFFFF] rounded-[2px] border-[2px] border-[#BFA988] border-solid hover: opacity-60 hover:cursor-pointer"}>Apply Now {">"}</button></div>
          </div>
        </div>
      </div>
      <div className={ cssVideo + (' ') + 'max-lg:bg-[#231F1F] max-lg:h-[101px] max-lg:pt-[30px] max-lg:w-full max-lg:flex max-lg:flex-row-reverse max-lg:left-[0px] max-lg:top-[680px] max-xl:left-[75%] max-2xl:left-[70%] absolute top-[580px] left-[65%] hover:cursor-pointer hover:opacity-70 z-30'}>
        <Image src={icon} alt="" className='max-lg:mr-auto max-lg:w-[40px] max-lg:h-[40px] w:[90px] h:auto'/>
        <p className='max-lg:ml-auto max-lg:mr-[30px] max-lg:mt-[0px] text-[20px] text-[#FFFFFF] font-[700] leading-[170%] ml-[-40px] '>Watch The Video</p>
      </div>
    </>
  )
}


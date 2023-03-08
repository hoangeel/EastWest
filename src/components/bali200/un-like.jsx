"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import img from "../../assets/imgs/unlike.png";
import imgBg from "../../assets/imgs/Ellipse3.png";
const dataUNLike=[
  {
    id:1,
    src:img,
    title:"Master level teachers",
    text:"Most YTT schools are one lead teacher, with mid or junior level assistant teachers. We’ve hand selected master level teachers from. All our teachers are highly vetted by our Western founders.",
  },
  {
    id:2,
    src:img,
    title:"INTERNATIONAL RECOGNITION",
    text:"The East+West certification is kindof a thing. Our certification holds a different weight and recognition in the industry than traditional schools.",
  },
  {
    id:3,
    src:img,
    title:"Subtle-Body Focus",
    text:"Most YTT schools are one lead teacher, with mid or junior level assistant teachers. We’ve hand selected master level teachers from. All our teachers are highly vetted by our Western founders.",
  },
  {
    id:4,
    src:img,
    title:"SPIRIT + SCIENCE",
    text:"Most YTT schools are one lead teacher, with mid or junior level assistant teachers. We’ve hand selected master level teachers from. All our teachers are highly vetted by our Western founders.",
  },
  
]

export default function UnLike({bg, color}) {
  const router = useRouter()
  return (
    <div className={bg + (" ") + "w-full h-full "}>
      <div className="max-lg:text-center max-sm:py-[50px]  max-lg:px-[50px] max-xl:py-[100px] max-2xl:px-[76px] max-w-[1920px] mx-auto container px-[250px] pt-[147px] pb-[140px]" >
        <h4 className={color + (" ") + 'max-sm:mb-[20px] max-sm:text-[30px] mb-[50px] tracking-[.03em] font-[100] leading-[97%] text-[58px]'}>Unlike any training on earth</h4>
        <p className={color + (" ") + 'max-sm:mb-[20px] max-sm:text-[17px] max-lg:mx-auto mb-[86px] max-w-[1269px] font-[400] leading-[147%] text-[23px] text-[#000000]'}>Most YTT schools are one lead teacher, with mid or junior level assistant teachers. We’ve hand selected master level teachers from. All our teachers are highly vetted by our Western founders. Most YTT schools are one lead teacher, with mid or junior level assistant teachers. </p>
        <div className='max-lg:border-0 max-lg:mr-0 mr-[30px] border-r-[1px] border-[#8C776F] border-solid'>
          <div className='max-lg:border-0 max-lg:mr-0 mr-[30px] border-r-[1px] border-[#8C776F] border-solid'>
            <div className='max-lg:pr-0 max-lg:border-0 max-lg:mr-0 mr-[30px] pr-[30px] border-r-[1px] border-[#8C776F] border-solid'>
              {
                dataUNLike.map((index) => {
                  return(
                    <div className='max-sm:mb-[20px] max-lg:mb-[60px] max-lg:grid-cols-1 grid grid-cols-2 mb-[90px]' key={index.id}>
                      <div className='flex flex-col items-start max-lg:mb-[40px]'>
                        <Image src={imgBg} alt='' className='max-sm:w-[157px] max-lg:w-[297px] w-[397px] h-auto mx-auto'/>
                        <Image src={index.src} alt='' className='max-sm:pl-[20px] max-sm:mt-[-160px] max-sm:w-[170px] max-lg:mt-[-303px] max-lg:w-[319px] pl-[37px] w-[419px] h-auto mx-auto  mt-[-403px]'/>
                      </div>
                      <div className='max-lg:max-w-full max-xl:ml-[20px] max-w-[486px] mt-[23px]'>
                        <h4 className={color + (" ") + 'max-sm:text-[20px] max-lg:mb-[20px] font-[100] text-[44px] leading-[97%] text-[#000000] mb-[50px]'}>{index.title}</h4>
                        <p className={color + (" ") + 'max-sm:text-[15px] max-sm:mb-[20px] max-lg:mx-auto max-w-[1296px] font-[400] leading-[147%] text-[23px] text-[#000000]'}>
                          {index.text}
                        </p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


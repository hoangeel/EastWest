"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import veter from "../../assets/imgs/Vector(1).png"
const dataUpcoming =[
  {
    id:1,
    text1:"Sept 5-27",
    text2:"200 Hour BALI",
    text3:"Sold Out",
    border:"border-b",
  },
  {
    id:1,
    text1:"Sept 5-27",
    text2:"200 Hour BALI",
    text3:"Sold Out",
    border:"border-b",
  },
  {
    id:1,
    text1:"Sept 5-27",
    text2:"200 Hour BALI",
    text3:"Sold Out",
    border:"border-b",
  },
  {
    id:1,
    text1:"Sept 5-27",
    text2:"200 Hour BALI",
    text3:"Sold Out",
    border:"border-b",
  },
  {
    id:1,
    text1:"Sept 5-27",
    text2:"200 Hour BALI",
    text3:"Sold Out",
    border:"",
  },
]

export default function Upcoming() {
  const router = useRouter()
  return (
    <div className=" w-full h-full bg-upcoming bg-no-repeat bg-[length:100%_100%]">
      <div className="max-sm:pt-[20px] max-sm:pb-[50px] max-lg:pt-[50px] max-xl:pt-[100px] max-w-[1920px] mx-auto container  pb-[160px] pt-[138px]" >
        <div className='max-sm:p-[50px] max-lg:p-[50px] max-w-[1082px] mx-auto bg-white py-[86px] px-[70px]'>
          <h4 className='max-sm:mb-[20px] text-center mx-auto max-md:text-[30px] text-[44px] text-[#3E3830] leading-[97%] max-w-[570px] mb-[26px]'>Upcoming Training Schedule</h4>
          <Image src={veter} alt='' className=' max-sm:w-[120px] max-lg:w-[150px] max-sm:h-[3px] mx-auto w-[312px] h-[5.5px] mb-[18.5px]'/>
          <div className='max-md:mb-[20px] mb-[47px]'>
            <h4 className='max-md:mb-[20px] max-md:text-[20px] mb-[30px] text-[30px] text-[#3E3830] leading-[117%] max-w-[570px]'>2023:</h4>
            {
              dataUpcoming.map((index) => {
                return(
                  <div key={index.id} >
                    <table className="max-sm:mx-auto">
                      <tbody>
                        <tr className={" bg-white dark:bg-gray-800 dark:border-gray-700" + (" ") + index.border}>
                          <td  className='max-sm:w-[25%] max-md:py-[10px] max-md:text-[14px] max-lg:w-[170px] w-[250px] py-[20px] font-[400] leading-[147%] text-[23px] text-[#2D2A29] mb-[50px]'>
                            {index.text1}
                          </td >
                          <td  className='max-sm:w-[40%] max-md:py-[10px] max-md:text-[14px] max-lg:w-[30%] w-[250px] px-2 py-[20px] font-[400] leading-[147%] text-[23px] text-[#2D2A29] mb-[50px]'>
                            {index.text2}
                          </td >
                          <td  className='max-sm:w-full max-md:py-[10px] max-md:text-[14px] max-lg:w-[50%] w-[500px] text-right py-[20px] font-[400] leading-[147%] text-[23px] text-[#2D2A29] mb-[50px]'>
                            {index.text3}
                          </td >
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )
              })
            }
            
          </div>
          <div className='max-md:mb-[20px] mb-[47px]'>
            <h4 className='max-md:mb-[20px] max-md:text-[20px] mb-[30px] text-[30px] text-[#3E3830] leading-[117%] max-w-[570px]'>2024:</h4>
            {
              dataUpcoming.map((index) => {
                return(
                  <div key={index.id} >
                    <table className="max-sm:mx-auto">
                      <tbody>
                        <tr className={" bg-white dark:bg-gray-800 dark:border-gray-700" + (" ") + index.border}>
                          <td  className='max-sm:w-[25%] max-md:py-[10px] max-md:text-[14px] max-lg:w-[170px] w-[250px] py-[20px] font-[400] leading-[147%] text-[23px] text-[#2D2A29] mb-[50px]'>
                            {index.text1}
                          </td >
                          <td  className='max-sm:w-[40%] max-md:py-[10px] max-md:text-[14px] max-lg:w-[30%] w-[250px] px-2 py-[20px] font-[400] leading-[147%] text-[23px] text-[#2D2A29] mb-[50px]'>
                            {index.text2}
                          </td >
                          <td  className='max-sm:w-full max-md:py-[10px] max-md:text-[14px] max-lg:w-[50%] w-[500px] text-right py-[20px] font-[400] leading-[147%] text-[23px] text-[#2D2A29] mb-[50px]'>
                            {index.text3}
                          </td >
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )
              })
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}


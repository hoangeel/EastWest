"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import icon from "../../assets/imgs/iglogo.png";
import img1 from "../../assets/imgs/image7.png";
import img2 from "../../assets/imgs/image8.png";
import img3 from "../../assets/imgs/image9.png";
import img4 from "../../assets/imgs/image10.png";
const dataOur =[
  {
    id:1,
    src: img1,
  },
  {
    id:2,
    src: img2,
  },
  {
    id:3,
    src: img3,
  },
  {
    id:4,
    src: img4,
  },
  {
    id:5,
    src: img1,
  },
  {
    id:6,
    src: img2,
  },
  {
    id:7,
    src: img3,
  },
  {
    id:8,
    src: img4,
  },
]
export default function Our() {
  const router = useRouter()
  return (
    <div className=" w-full h-full bg-[#ffffff] bg-no-repeat bg-cover">
      <div className="max-md:px-[0px] max-xl:px-[76px] max-w-[1920px] mx-auto container  pb-[83px] pl-[160px] pr-[100px]" >
        <div className='max-lg:grid-cols-1 grid grid-cols-2'>
          <div className='max-md:mb-0 max-md:max-w-[100%] max-md:text-center max-md:border-none max-md:pr-0 max-md:mr-0 max-lg:mb-[100px] max-xl:mr-[30px] max-xl:pr-[30px] max-2xl:pr-[50px] max-w-[711px] pr-[124px] border-r-[2px] border-[#D5CEB7] border-solid mr-[60px]'>
            <h4 className='max-md:mb-[39px] max-md:py-[32px] max-md:text-[32px] max-md:bg-[#F1EADE] max max-lg:mb-[100px] mb-[153px]'>OUR TEACHERS</h4>
            <p className='max-md:mb-[28px] max-md:px-[50px] max-md:text-[14px] max-lg:mb-[100px] font-[300] text-[29px] leading-[157%] text-[#3E3830] mb-[171px]'>
              East+West is a the worldwide leader in yoga teacher training. We co-create beautiful, 
              miraculous, yoga and meditation trainings with master teachers from India.
            </p>
            <h4 className='max-md:hidden text-[30px] leading-[116%] mb-[10px]'>Peter Walters</h4>
            <p className='max-md:hidden font-[700] text-[23px] leading-[152%] text-[#D2B384] mb-[50px]'>MASTERY: YOGA ASANA & TEACHING PRACTICE Teaches in: Costa Rica</p>
            <p className='max-md:hidden font-[300] text-[22px] leading-[157%] text-[#3E3830] mb-[40px]'>
              Peter is a teacher for East+West. He teaches in costa rica. Peter is know for playing 
              the harmonium during his classes and singing funny songs. He’s also a great yoga 
              teacher. Peter is a teacher for East+West. He teaches in costa rica. Peter is know for 
              playing the harmonium during his classes and singing funny songs. He’s also a great 
              yoga teacher.Peter is a teacher for East+West. He teaches in costa rica. Peter is know 
              for playing the harmonium during his classes and singing funny songs. He’s also a great 
              yoga teacher.
            </p>
            <div className='flex items-center max-md:hidden'>
              <Image src={icon} alt=''/>
              <p className='ml-[16px] leading-[157%] text-[22px] text-[#AD9E98] font-[500]'>Follow Peter</p>
            </div>
          </div>
          <div>
            <div className='max-lg:pb-0 max-md:grid-cols-1 max-md:px-[50px] grid grid-cols-2 gap-[40px] pb-[100px]'>
              {
                dataOur.map((index) => {
                  return(
                    <div key={index.id}>
                      <Image className='mx-auto' src={index.src} alt=''/>
                      <p className='max-xl:text-[30px] max-xl:mt-[-150px] text-[45px] leading-[107%] font-[900] text-center text-[#FFFFFF] max-w-[230px] mx-auto mt-[-200px] mb-[100px] '>PETER WALTERS</p>
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


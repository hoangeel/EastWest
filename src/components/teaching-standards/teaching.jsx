"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import course1 from "../../assets/imgs/details1.png"
import course2 from "../../assets/imgs/details2.png";
import course3 from "../../assets/imgs/details3.png";

export default function Teaching() {
  const router = useRouter()
  return (
    <div className='max-sm:pb-[50px] max-sm:px-0 max-sm:mt-[-100px] pb-[104px] max-lg:mt-[-300px] mt-[-1750px] container mx-auto px-[50px] justify-self-center w-full'>
      <div className="max-w-[1436px] mx-auto container border-[1px] border-solid border-[#ECDBAE]" >
        <div className='max-sm:p-[50px] max-sm:grid-cols-1 min-h-[1000px] grid grid-cols-2 items-start max-xl:px-[50px] relative px-[100px] py-[85px] bg-[#FFFFFF]'>
          <div className='max-lg:text-[14px] max-lg:space-y-[20px] pr-[3px] font-[400] leading-[147%] text-[23px] text-[#000000] space-y-[40px]'>
            <p>
              Since we first opened in 2017, East+West has grown a worldwide reputation for holding the highest 
              standards of teachers anywhere on earth. We’ve spent the last 5 years obsessively recruiting the 
              best teachers from India, Bali, the United States, Europe, and Australia. Now in 2020, we are taking 
              that a step further with East+West Live. Our mission is to create a yoga platform where students can 
              expect a fantastic class, every time.
            </p>
            <p>
              New students often practice with teachers without first taking a critical look at what they are 
              learning, or why. Yoga is a completely unregulated industry and has suffered in recent years from 
              increasingly unscrupulous standards. Yoga takes a lifetime to grasp, and we believe students 
              everywhere can benefit greatly from consciously, and critically selecting teachers.
            </p>
            <p>
              We are building a future of yoga where students have access to more masterful teachers (not 
              necessarily the most charismatic). There’s nothing wrong with having a social media following, 
              but it bears no influence on the quality of a teacher. So, What Makes the “Best” Yoga Teachers?
              Admittedly, selecting the “best” yoga teachers is an imperfect process. It’s difficult to define 
              what makes a great teacher and that is ultimately subjective. Here are a few of the factors we 
              consider when selecting a teacher.
            </p>
            <div>
              <p className='font-[700]'>1. The Feeling of Their Presence.</p>
              <p>
                First and foremost, at East+West you can expect to feel great trust, respect, reverence, and a 
                sense of inner-peace emanating from our teachers.You can immediately feel when you’re in the 
                presence of a great teacher. There are a number of additional factors we bring in when selecting 
                a teacher. In the ancient yogic tradition, this is a sign that a teacher is truly embodied in 
                their practice, meaning they live what they teach and teach directly from their experience. We 
                believe this is the most essential quality of any yoga teacher.
              </p>
            </div>
            <div>
              <p className='font-[700]'>2. The Number of Classes They’ve Taught.</p>
              <p>
                This may sound simple, but evaluating a teacher by the number of classes they’ve taught in their 
                life is a great way to measure the quality of a teacher. All of our teachers at East+West have 
                generally taught at least 1,000 yoga classes in their life. Teachers who have taught a lot of 
                classes have been teaching for a long time had ample time to hone their craft, and have displayed 
                continued excellence. Unfortunately, many studios evaluate their teachers solely based on their 
                number of social media followers. This is not always a great indicator of a skilled, experienced 
                teacher. We also feel this is taking teaching opportunities away from teachers who have actually 
                put in the work to teach yoga skillfully.
              </p>
            </div>
            <div>
              <p className='font-[700]'>3. Inclusivity</p>
              <p>
                One thing that has become obvious to us over the years is that there is not one inherently 
                superior yoga style or teacher. Different teachers will resonate with different students based 
                on their background and culture. So we try to bring teachers of a lot of different backgrounds 
                together. Also, all our teachers are genuinely down-to-earth, open people who teach in a way 
                where most people could enjoy their class.
              </p>
            </div>
            <div>
              <p className='font-[700]'>4. Integrity & Trust.</p>
              <p>
                Above all, someone calling themselves a yoga teacher should hold themselves to the highest 
                standards of integrity and trust. We have zero-tolerance for teachers using yoga to do anything 
                other than uplift and serve others.
              </p>
            </div>
          </div>
          <div className='max-sm:pb-0 max-sm:pl-0 max-sm:border-0 max-sm:ml-0 max-sm:mt-[20px] max-xl:ml-[30px] max-xl:pl-[20px] ml-[70px] max-w-[469px] pl-[39px] pb-[480px] border-l-[1px] border-solid border-[#D2B384]'>
            <h5 className='max-md:text-[20px] max-sm:mb-[20px] max-lg:mb-[30px] max-lg:text-[30px] mb-[50px] font-[700] leading-[117%] text-[41px] text-[#000000]'>What You Can Expect From East+West Teachers:</h5>
            <ol className='max-lg:ml-[20px] max-lg:text-[17px] list-decimal ml-[35px] font-[400] leading-[147%] text-[28px] text-[#000000]'>
              <li className=''>Relatable and down to earth teaching style.</li>  
              <li className=''>Have taught at least 2,000 yoga classes.</li>
              <li className=''>Naturally peaceful, joyful, and loving in a way that emanates to others.</li>
              <li className=''>Help direct students deeper into the teachings of yoga.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}


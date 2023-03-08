import Hear from "@/components/bali200/hear";
import LaYoga from "@/components/bali200/la-yoga";
import OurBali200 from "@/components/bali200/our";
import Sample from "@/components/bali200/Sample";
import Section from "@/components/bali200/section";
import TheResort from "@/components/bali200/TheResort";
import UnLike from "@/components/bali200/un-like";
import Upcoming from "@/components/bali200/upcoming";
import Yep from "@/components/bali200/yep";
import Our from "@/components/home/our";
import Schedule from "@/components/home/Schedule";

export default function Bali200Hour() {
  return (
    <main className="bg-[#FFFFFF]">
      <Section 
        hour="YOGA ALLIANCE CERTIFIED 300-Hour" 
        title='The Premier Teacher Training On Earth'
        text='200-Hour Yoga Alliance Registered All-Inclusive Teacher Trainings. Voted Best OverallTeacher Training 2019, 2021 by FindYoga.'
        footer='BALI, INDONESIA'
        cssVideo="hidden"
        background="bg-bali300"
        textCenter="text-left ml-0"
        cssbutton="ml-0"
        pt='pt-[360px]'
      />
      <LaYoga
        bg='bg-[#2D2A29] mb-[45px]'
        logo200="hidden"
        logo300=""
      />
      <UnLike
        bg='bg-[#78655E]'
        color='text-[#FFFFFF]'
      />
      <div className="h-[117px] w-full bg-[#FFFFFF] max-md:hidden"/>
      <Our/>
      <OurBali200
        hidden200="hidden"
        hidden300=""
        text="“This training inspired me to start bringing yoga philosophy into my work. The teachers are absolutely imcredible.”"
        textname="-Angela Lumba, Stanford University Director of Brain Performance"
      />
      <Upcoming/>
      <Sample/>
      <TheResort/>
      <Hear/>
      <Schedule/>
    </main>
  )
}

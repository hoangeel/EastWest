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

export default function Bali300Hour() {
  return (
    <main className="bg-[#FFFFFF]">
      <Section 
        hour="YOGA ALLIANCE CERTIFIED 200-Hour" 
        title='The Premier Teacher Training On Earth'
        text='200-Hour Yoga Alliance Registered All-Inclusive Teacher Trainings. Voted Best OverallTeacher Training 2019, 2021 by FindYoga.'
        footer='Ubud, Bali'
        cssVideo=""
        background="bg-bali200"
        textCenter="text-center mx-auto"
        cssbutton=""
        pt='pt-[360px]'
        />
      <LaYoga
        bg='bg-[#FFFFFF]'
        logo300="hidden"
        logo200=""
      />
      <Yep/>
      <UnLike
        bg='bg-[#FFFFFF]'
        color='text-[#000000]'
      />
      <div className="h-[117px] w-full bg-[#FFFFFF] max-md:hidden"/>
      <Our/>
      <OurBali200
        hidden300="hidden"
        hidden200=""
        text="“I feel lucky to be alive at the same time on earth as these teachers.”"
        textname="-Shea, US"
      />
      <Upcoming/>
      <Sample/>
      <TheResort/>
      <Hear/>
      <Schedule/>
    </main>
  )
}

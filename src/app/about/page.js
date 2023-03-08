import We from "@/components/about/we";
import Section from "@/components/bali200/section";

export default function About() {
  return (
    <main className="bg-[#FFFFFF]">
      <Section 
        hour="OUR MISSION:" 
        title='The Premier Teacher Training On Earth'
        cssVideo="sm:hidden max-sm:hidden"
        background="bg-about"
        textCenter="text-center mx-auto"
        cssbutton="hidden"
        footerAbout="hidden"
        cssAbout='h-[763px] max-lg:h-[480px]'
        pt='pt-[300px] sm:pb-0 max-sm:pb-0'
        />
        <We/>
    </main>
  )
}

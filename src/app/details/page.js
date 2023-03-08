import Section from "@/components/bali200/section";
import Weekly from "@/components/details/weekly";
import Schedule from "@/components/home/Schedule";

export default function Details() {
  return (
    <main className="bg-[#FFFFFF]">
      <Section 
        hour="curriculum breakdown: 200 Hour" 
        title='What the 200 Hour Training is Like'
        text='Not all teacher trainings are the same. In fact, there’s a huge difference. Here’s what the East+West 200 hour training is like in more detail.'
        footer='BALI, INDONESIA'
        cssVideo="sm:hidden max-sm:hidden"
        background="bg-details"
        textCenter="text-left ml-0 max-w-[783px]"
        cssbutton="hidden"
        footerAbout="hidden"
        cssAbout='h-[2486px] max-lg:h-[480px] bg-top'
        cssP='w-[486px]'
        pt='pt-[290px] sm:pb-0 max-sm:pb-0 '
        mbImage="mb-[30px]"
      />
      <Weekly/>
      <Schedule/>
    </main>
  )
}

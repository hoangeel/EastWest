import Bali from "@/components/home/bali";
import CostaRica from "@/components/home/CostaRica";
import For from "@/components/home/for";
import Logo from "@/components/home/logo";
import Our from "@/components/home/our";
import OurTrainings from "@/components/home/OurTrainings";
import Schedule from "@/components/home/Schedule";
import Section from "@/components/home/section";

export default function Home() {
  return (
    <main className="bg-[#FFFFFF]">
      <Section/>
      <Bali/>
      <Logo/>
      <OurTrainings/>
      <CostaRica/>
      <For/>
      <Our/>
      <Schedule/>
    </main>
  )
}

import Hero from "@/components/hero";
import FloatingSocial from "@/components/floating-social";
import Team from "@/components/team";
import Partner from "@/components/partner/patrner";
import AppSection from "@/components/app-section";

export default  function Home() {
  return (
    <main className='relative bg-[url("/background.svg")]  bg-center bg-repeat space-y-20 '>
      <Hero />
      <Team/>
      <Partner/>
      <AppSection/>
      <FloatingSocial />

    </main>
  );
}

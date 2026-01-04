import AboutSection from "@/components/about-section";
import AppSection from "@/components/app-section";
import Banner from "@/components/banner";
import FloatingSocial from "@/components/floating-social";
import Hero from "@/components/hero";
import Partner from "@/components/partner/patrner";
import Team from "@/components/team";
import WhyUsSection from "@/components/whyus-section";
import ServicesSection from "@/components/services-section";
import ReviewsSection from "@/components/reviews/reviews-section";
import Selutions from "@/components/selutions";
export default  function Home() {
  return (
    <main className='relative bg-[url("/background.svg")]  bg-center bg-repeat space-y-20 '>
      <Hero />
      <Team/>
      <Selutions/>
      <Partner />
      <AppSection />
      <ReviewsSection/>
      <AboutSection />
      <WhyUsSection />
      <ServicesSection />
      <Banner/>
      <FloatingSocial />

    </main>
  );
}

import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { TrustedOutbound } from "@/components/sections/trusted-outbound";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Toolkit } from "@/components/sections/toolkit";
import { FAQ } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <TrustedOutbound />
        <HowItWorks />
        <Toolkit />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

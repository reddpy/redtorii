import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SupportedChannels } from "@/components/sections/supported-channels";
import { VerificationStates } from "@/components/sections/verification-states";
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
        <HowItWorks />
        <SupportedChannels />
        <VerificationStates />
        <Toolkit />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

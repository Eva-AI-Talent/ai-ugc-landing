import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import LiveFeed from "@/components/LiveFeed";
import FiveSteps from "@/components/FiveSteps";
import UnderTheHood from "@/components/UnderTheHood";
import DistributionNetwork from "@/components/DistributionNetwork";
import FeaturesBento from "@/components/FeaturesBento";

import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <LiveFeed />
        <FiveSteps />
        <UnderTheHood />
        <DistributionNetwork />
        <FeaturesBento />
        <Pricing />
        <FAQ />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}

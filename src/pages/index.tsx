import { FeatureSection } from "@/components/feature-section/feature-section";
import { HeroSection } from "@/components/hero-section/hero-section";
import { SuportSection } from "@/components/suport-section/suport-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection/>
        <FeatureSection/>
        <SuportSection/>
      </article>
    </>
  )
}

import { DotBackground } from "@/components/ui/dot-background"
import { FeatureGrid } from "@/app/_components/feature-grid"
import { FooterCta } from "@/app/_components/footer-cta"
import { HeroSection } from "@/app/_components/hero-section"
import { SiteHeader } from "@/app/_components/site-header"
import { TopicPreview } from "@/app/_components/topic-preview"

export default function Page() {
  return (
    <DotBackground className="min-h-svh">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeatureGrid />
        <TopicPreview />
        <FooterCta />
      </main>
    </DotBackground>
  )
}

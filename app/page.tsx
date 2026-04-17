import { FeatureGrid } from "@/app/_components/feature-grid"
import { FooterCta } from "@/app/_components/footer-cta"
import { HeroSection } from "@/app/_components/hero-section"
import { SiteHeader } from "@/app/_components/site-header"
import { TopicPreview } from "@/app/_components/topic-preview"

export default function Page() {
  return (
    <div className="relative min-h-svh overflow-x-hidden bg-slate-950">
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-violet-950/30 via-slate-950 to-slate-950"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-24 z-0 size-96 animate-float-blob rounded-full bg-violet-500/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/3 z-0 size-80 animate-float-blob rounded-full bg-blue-500/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 z-0 size-96 animate-float-blob rounded-full bg-violet-600/10 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10">
        <SiteHeader />
        <main>
          <HeroSection />
          <FeatureGrid />
          <TopicPreview />
          <FooterCta />
        </main>
      </div>
    </div>
  )
}

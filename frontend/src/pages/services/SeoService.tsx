// In your SEO page (e.g., /services/seo)
import SeoHero from "@/components/SeoHero";
import NavbarHero from "@/components/navbar";
import SeoServicesBody from "@/components/SeoServicesBody";
import Footer from "@/components/footer";
import CTABannerFramedSeo from "@/components/CTABannerFramedSeo";


export default function SeoPage() {
  return (
    <>
      <NavbarHero tone="dark" fixed reserveSpace={false} />
      <SeoHero
        bgSrc="/SeoService.png" // replace with your actual hero image
        eyebrow="Seo Services" // or "SEO Services"
        ctaHref="/contact"
        ctaLabel="Book a Free Consultation"
        navHeight={72} // match your navbar height
      />
      <SeoServicesBody
        rightImageSrc="/whatwedo.png"
        featuresIcons={{
          product: "/services-icons/Star.png",
          data: "/services-icons/analytics.png",
          architecture: "/services-icons/crawl.png",
          technical: "/services-icons/system.png",
        }}
          />
          <CTABannerFramedSeo/>
        <Footer/>
      {/* …rest of the SEO sections… */}
    </>
  );
}

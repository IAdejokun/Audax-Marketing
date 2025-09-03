// src/pages/ServicesSocial.tsx
import CTABannerFramedSocial from "@/components/CTABannerFramedSocial";
import Footer from "@/components/footer";
import SocialMediaHero from "@/components/SocialMediaHero";
import SocialMediaSections from "@/components/SocialMediaSections";

export default function SocialMediaService() {
  return (
    <>
      <SocialMediaHero bgSrc="/socialmediaservice.png" />
      <SocialMediaSections/>
      <CTABannerFramedSocial/>
      {/* …rest of the social media sections */}
      <Footer/>
    </>
  );
}

// pages/services/EmailSms.tsx
import NavbarHero from "@/components/navbar";
import EmailHero from "@/components/Emailhero";
import EmailServicesBody from "@/components/EmailService";
import CTABannerFramedEmail from "@/components/CTABannerFramedEmail";
import Footer from "@/components/footer";

export default function EmailService() {
  return (
    <>
      <NavbarHero tone="dark" fixed reserveSpace={false} />
      {/* contact arrow circle shows in white; Services stays active */}
      <EmailHero bgSrc="/email-services-hero.png" />
      <EmailServicesBody />
      <CTABannerFramedEmail />
      <Footer/>
      {/* Replace with your Email/SMS specific sections */}
    </>
  );
}

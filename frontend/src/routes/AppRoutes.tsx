import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";


import Services from "@/pages/Services";

// services detail pages
import SocialMediaService from "@/pages/services/SocialMediaService";
import EmailService from "@/pages/services/EmailService";
import SeoService from "@/pages/services/SeoService";

// import ServicesEmailSms from "@/pages/services/EmailSms";
// import ServicesSeo from "@/pages/services/Seo";             // /services/seo


// import Contact from "../pages/Contact";
// import BlogHome from "../pages/BlogHome";
// import BlogPost from "../pages/BlogPost";
// import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />

      {/* Services detail pages (no index route) */}
      <Route
        path="/services/SocialMediaService"
        element={<SocialMediaService />}
      />
      <Route path="/services/EmailService" element={<EmailService />} />

      <Route path="/services/SeoService" element={<SeoService />} />

      {/* <Route path="/services/email-sms" element={<ServicesEmailSms />} />
      <Route path="/services/seo" element={<ServicesSeo />} /> */}

      {/* <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<BlogHome />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

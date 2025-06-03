import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import MessagingSection from "@/components/MessagingSection";
import RedefiningFeaturesSection from "@/components/RedefiningFeaturesSection";
import FeaturesDarkSection from "@/components/FeaturesDarkSection";
import TestimonialSection from "@/components/TestimonialSection";
import BlogSection from "@/components/BlogSection";
import BrandsSection from "@/components/BrandsSection";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MessagingSection />
      <RedefiningFeaturesSection />
      <FeaturesDarkSection />
      <TestimonialSection />
      <BlogSection />
      <BrandsSection />
      <NewsletterSection />
    </main>
  );
}

"use client";
import { SectionHeading } from "@/components/SectionHeading";
import ServicesHero from "@/components/ServicesHero";
import BeautyComponent from "@/features/shopcart";


export default function HairProductsPage() {
 
  return (
    <>
      <ServicesHero
        imageUrl="/images/make-up-studio/photo_5924641007121578706_y.jpg"
        introText="Hair Products"
        headerImage=""
      />
      {/* Add producst Here */}
      <SectionHeading title=" Products Not Yet Available" />
    </>
  );
}

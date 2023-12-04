"use client";
import { SectionHeading } from "@/components/SectionHeading";
import ServicesHero from "@/components/ServicesHero";
import BeautyComponent from "@/features/shopcart";


export default function NailProductsPage() {
 
  return (
    <>
      <ServicesHero
        imageUrl="/images/make-up-studio/photo_5924641007121578706_y.jpg"
        introText="Nail Products"
        headerImage=""
      />
      {/* Add producst Here */}
      <SectionHeading title=" Products Not Yet Available" />
    </>
  );
}

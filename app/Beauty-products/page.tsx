"use client";
import ServicesHero from "@/components/ServicesHero";
import BeautyComponent from "@/features/shopcart";


export default function Beauty() {
 
  return (
    <>
      <ServicesHero
        imageUrl="/images/make-up-studio/photo_5924641007121578706_y.jpg"
        introText="Beauty Products"
        headerImage=""
      />
      <BeautyComponent/>
    </>
  );
}

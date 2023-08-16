"use client";
import ServicesHero from "@/components/ServicesHero";
import { PopularProducts } from "@/components/popularProducts";
import Gallery from "@/components/Gallery";
import HorizontalRule from "@/components/HorizontalRule";
import EmployeeCards from "@/components/EmployeeCards";
import MakeUpIntro from "@/components/make-up-intro";
export default function MakeUpStudio() {
  const images = [
    ...Array.from({ length: 6 }, (_, index) => ({
      src: `/images/make-up-studio/photo_5924641007121578${700 + index}_y.jpg`,
      alt: `Image ${index + 3}`,
      caption: ``,
      price: "",
    })),
    ...Array.from({ length: 3 }, (_, index) => ({
      src: `/images/make-up-studio/photo_5924641007121578${848 + index}_y.jpg`,
      alt: `Image ${index + 3}`,
      caption: ``,
      price: "",
    })),
    ...Array.from({ length: 4 }, (_, index) => ({
      src: `/images/make-up-studio/photo_59678221401641290${83 + index}_y.jpg`,
      alt: `Image ${index + 3}`,
      caption: ``,
      price: "",
    })),
  ];
  const employeesData = [
    {
      name: "Selma",
      phoneNumber: "+264813347480",
      socialMedia: "https://www.instagram.com/shenatungo/",
      imageSrc: "/images/IMG_3100.JPG",
      instagramHandle: "@shenatungo",
      whatsapp: false,
    },
  ];
  const introductoryMessage = [
    {
      headingText: "Book an appointment with Selma",
      meetOur: "",
    },
  ];
  return (
    <>
      <ServicesHero
        imageUrl="/images/make-up-studio/photo_5924641007121578706_y.jpg"
        introText="Make Up Studio"
        headerImage=""
      />
      <MakeUpIntro />
      <HorizontalRule />
      <Gallery
        images={images}
        HeadingText="Our Captivating Makeup Studio Gallery"
        introText="With an unwavering passion for creativity and a keen eye for detail,
        our team curates looks that are as diverse as the individuals they
        grace."
      />
      <HorizontalRule />
      <PopularProducts />
      <HorizontalRule />
      <EmployeeCards
        employees={employeesData}
        openingText={introductoryMessage}
      />
    </>
  );
}

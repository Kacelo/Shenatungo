"use client";
import ServicesHero from "@/components/ServicesHero";
import { PopularProducts } from "@/components/popularProducts";
import Gallery from "@/components/Gallery";
import HorizontalRule from "@/components/HorizontalRule";
import EmployeeCards from "@/components/EmployeeCards";
import MakeUpIntro from "@/components/make-up-intro";
import { NailServices } from "@/components/nailServices";
export default function MakeUpStudio() {
  const images = [
    ...Array.from({ length: 2 }, (_, index) => ({
      src: `/images/nail-department/photo_5924641007121578${865 + index}_y.jpg`,
      alt: `Image ${index + 3}`,
      caption: `BY Lucy`,
      price: "",
    })),
    ...Array.from({ length: 3 }, (_, index) => ({
      src: `/images/nail-department/photo_5929321095545076${599 + index}_y.jpg`,
      alt: `Image ${index + 3}`,
      caption: ``,
      price: "",
    })),
    ...Array.from({ length: 2 }, (_, index) => ({
      src: `/images/nail-department/photo_5926892806935264${605 + index}_x.jpg`,
      alt: `Image ${index + 3}`,
      caption: ``,
      price: "",
    })),
    ...Array.from({ length: 2 }, (_, index) => ({
      src: `/images/nail-department/photo_5926892806935264${608 + index}_x.jpg`,
      alt: `Image ${index + 3}`,
      caption: ``,
      price: "",
    })),
  ];
  const employeesData = [
    {
      name: "Lucy",
      phoneNumber: "+264816126470",
      socialMedia: "https://www.instagram.com/lucy_nails___/",
      imageSrc: "/images/nail-department/nail-techs/msg-894900809-575.jpg",
      instagramHandle: "lucy_nails___",
      whatsapp: true,
    },
    {
      name: "Maria Ngweshi",
      phoneNumber: "+264813122481",
      socialMedia: "https://www.instagram.com/ngweshibeautyparlour/",
      imageSrc: "/images/nail-department/nail-techs/msg-894900809-566.jpg",
      instagramHandle: "@ngweshibeautyparlour",
      whatsapp: true,
    },
    {
      name: "Santos",
      phoneNumber: "+264852924965",
      socialMedia: "https://www.instagram.com/santos_di_barber/",
      imageSrc: "/images/barberSection/santos2.jpg",
      instagramHandle: "@santos_di_barber",
      whatsapp: true,
    },
  ];
  const introductoryMessage = [
    {
      headingText: "Meet Our Talented Make Up Artists",
      meetOur: "",
    },
  ];
  return (
    <>
      <ServicesHero
        imageUrl="/images/nail-department/photo_5926892806935264605_x.jpg"
        introText="NAIL DEPARTMENT"
        headerImage=""
      />
      <MakeUpIntro />
      <HorizontalRule />
      <NailServices />
      <Gallery
        images={images}
        introText="Our Captivating Makeup Studio Gallery"
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

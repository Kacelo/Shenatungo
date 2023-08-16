"use client";
import EmployeeCards from "@/components/EmployeeCards";
import PriceList from "@/components/PriceList";
import ServicesHero from "@/components/ServicesHero";
import Gallery from "@/components/Gallery";
import HorizontalRule from "@/components/HorizontalRule";
import SalonIntro from "@/components/salonIntro";
export default function Salon() {
  const hairstylesData = [
    // {
    //     src: "/images/barberSection/style6.webp",
    //     alt: "Image 2",
    //   caption: "FADE",
    //   price: "80",
    // },
    {
      src: "/images/barberSection/style2.webp",
      alt: "Image 2",
      caption: "Minimalistic Fulani Braids with Geometric Crown",
      price: "",
    },
    {
      src: "/images/barberSection/style3.webp",
      alt: "Image 2",
      caption: "Top-Knot Ponytail with Pink Extensions",
      price: "",
    },

    {
      src: "/images/barberSection/style5.webp",
      alt: "Image 2",
      caption: "Classic Fulani Braids with Massive Ivory Bead",
      price: "",
    },
    {
      src: "/images/barberSection/style8.webp",
      alt: "Image 2",
      caption: "Artistic Fulani Braid Crown with Shell Adornments",
      price: "",
    },
    {
      src: "/images/barberSection/style7.webp",
      alt: "Image 2",
      caption: "Ponytail Wrapped in Copper Wire and Beads",
      price: "",
    },

    {
      src: "/images/barberSection/style4.webp",
      alt: "Image 2",
      caption: "Geometric Tribal Fulani Pattern with Curly Wisps",
      price: "",
    },
    {
      src: "/images/barberSection/style1.webp",
      alt: "Image 2",
      caption: "Cleopatra-Style Natural Braids with Beads",
      price: "",
    },
    // {
    //   src: "/images/barberSection/bold.jpg",
    //   alt: "Image 2",
    //   caption: "Bold",
    //   price: "70",
    // },
  ];
  const images = [
    ...Array.from({ length: 3 }, (_, index) => ({
      src: `/images/salon/photo_5924641007121578${718 + index}_y.jpg`,
      alt: `Image ${index + 3}`,
      caption: ``,
      price: "",
    })),
    ...Array.from({ length: 1 }, (_, index) => ({
      src: `/images/salon/photo_5924641007121578${704 + index}_y.jpg`,
      alt: `Image ${index + 3}`,
      caption: ``,
      price: "",
    })),
    ...Array.from({ length: 3 }, (_, index) => ({
      src: `/images/salon/photo_5924641007121578${711 + index}_y.jpg`,
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
      headingText: "Book an appoinment with Selma",
      meetOur: "",
    },
  ];

  return (
    <>
      <ServicesHero
        imageUrl="/images/salon/landingImage.jpg"
        introText="Hair Salon"
        headerImage="/images/salon/logo2.png"
      />
      <SalonIntro />
      <HorizontalRule />
      <Gallery
        images={images}
        HeadingText="Take a look at what we have to offer"
        introText=""
      />{" "}
      <HorizontalRule />
      <EmployeeCards
        employees={employeesData}
        openingText={introductoryMessage}
      />
      <HorizontalRule />
      {/* <Gallery images={images} introText="Glimpse into Our Barbering Artistry" */}
      {/* /> */}
    </>
  );
}

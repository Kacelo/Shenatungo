"use client";
import EmployeeCards from "@/components/EmployeeCards";
import PriceList from "@/components/PriceList";
import ServicesHero from "@/components/ServicesHero";
import Gallery from "@/components/Gallery";
import HorizontalRule from "@/components/HorizontalRule";
export default function Barbershop() {
  const employeesData = [
    {
      name: "Lebby",
      phoneNumber: "+264814504952",
      socialMedia: "https://www.instagram.com/lebbyz_fade_cutz2023/",
      imageSrc: "/images/barberSection/lebby2.jpeg",
      instagramHandle: "@lebbyz_fade_cutz2023",
      whatsapp: true,
    },
    {
      name: "Penda",
      phoneNumber: "+1 987-654-3210",
      socialMedia: "",
      imageSrc: "/images/barberSection/penda2.jpg",
      instagramHandle: "@lebbyz_fade_cutz2023",
      whatsapp: false,
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
      headingText: "Meet Our Expert Barber Team",
      meetOur: "",
    },
  ];
  const hairstylesData = [
    {
      src: "/images/barberSection/taper.jpg",
      alt: "Image 2",
      caption: "TAPER FADE",
      price: "80",
    },
  
    {
      src: "/images/barberSection/fade.jpg",
      alt: "Image 2",
      caption: "FADE",
      price: "80",
    },
    {
      src: "/images/barberSection/brushcut.jpg",
      alt: "Image 2",
      caption: "BRUSH CUT",
      price: "80",
    },
    {
      src: "/images/barberSection/beardOnly.jpg",
      alt: "Image 2",
      caption: "TRIM & BEARD TRIM",
      price: "40",
    },
  
    {
      src: "/images/barberSection/beard.jpg",
      alt: "Image 2",
      caption: "BEARD TRIM",
      price: "30",
    },
    {
      src: "/images/barberSection/dye.jpg",
      alt: "Image 2",
      caption: "HAIR COLORING/HIGHLIGHTS",
      price: "80",
    },
  ];
  const images = [
    // Add more image objects as needed
    ...Array.from({ length: 6 }, (_, index) => ({
      src: `/images/barberSection/photo_5805664601931629${422 + index}_y.jpg`,
      alt: `Image ${index + 3}`,
      caption: ``,
      price: ''

    })),
    ...Array.from({ length: 3 }, (_, index) => ({
      src: `/images/barberSection/photo_6039493638116981${331 + index}_y.jpg`,
      alt: `Image ${index + 3}`,
      caption: ``,
      price: ''

    })),
    ...Array.from({ length: 3 }, (_, index) => ({
      src: `/images/barberSection/photo_6039493638116981${325 + index}_y.jpg`,
      alt: `Image ${index + 3}`,
      caption: ``,
      price: ''
    })),
  ];
  return (
    <>
      <ServicesHero
        imageUrl="/images/services/barber.jpeg"
        introText="Barbershop"
        headerImage="/images/barberSection/clippers.png"
      />
      <PriceList images={hairstylesData} />
      <HorizontalRule />
      <EmployeeCards
        employees={employeesData}
        openingText={introductoryMessage}
      />
      <HorizontalRule />
      <Gallery
        images={images}
        HeadingText="Glimpse into Our Barbering Artistry"
      />
    </>
  );
}

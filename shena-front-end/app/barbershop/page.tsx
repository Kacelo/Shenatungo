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
      phoneNumber: "+1 555-123-4567",
      socialMedia: "",
      imageSrc: "/images/barberSection/santos2.jpg",
      instagramHandle: "@lebby_z_fade_cutz",
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
    // {
    //   src: "/images/barberSection/bold.jpg",
    //   alt: "Image 2",
    //   caption: "Bold",
    //   price: "70",
    // },
  ];
  const images = [
    // {
    //   src: '/images/barberSection/IMG_1788.JPG',
    //   alt: 'Image 2',
    //   caption: 'Fade',
    // },
    // {
    //   src: '/images/barberSection/IMG_1798.JPG',
    //   alt: 'Image 2',
    //   caption: 'Beard Trim',
    // },
    // {
    //   src: '/images/barberSection/IMG_1754.JPG',
    //   alt: 'Image 2',
    //   caption: 'Trimming',
    // },
    // Add more image objects as needed
    ...Array.from({ length: 6 }, (_, index) => ({
      src: `/images/barberSection/photo_5805664601931629${422 + index}_y.jpg`,
      alt: `Image ${index + 3}`,
      caption: ``,
    })),
    ...Array.from({ length: 3 }, (_, index) => ({
      src: `/images/barberSection/photo_6039493638116981${331 + index}_y.jpg`,
      alt: `Image ${index + 3}`,
      caption: ``,
    })),
    ...Array.from({ length: 3 }, (_, index) => ({
      src: `/images/barberSection/photo_6039493638116981${325 + index}_y.jpg`,
      alt: `Image ${index + 3}`,
      caption: ``,
    })),
  ];
  return (
    <>
      <ServicesHero
        imageUrl="/images/services/barber-card.JPG"
        introText="BARBERSHOP"
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
        introText="Glimpse into Our Barbering Artistry"
      />
    </>
  );
}

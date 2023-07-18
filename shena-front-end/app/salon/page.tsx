'use client'
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
          price: "80",
        },
        {
            src: "/images/barberSection/style3.webp",
            alt: "Image 2",
          caption: "Top-Knot Ponytail with Pink Extensions",
          price: "40",
        },
    
        {
            src: "/images/barberSection/style5.webp",
            alt: "Image 2",
          caption: "Classic Fulani Braids with Massive Ivory Bead",
          price: "80",
        },
        {
            src: "/images/barberSection/style8.webp",
            alt: "Image 2",
          caption: "Artistic Fulani Braid Crown with Shell Adornments",
          price: "30",
        },
        {
            src: "/images/barberSection/style7.webp",
            alt: "Image 2",
          caption: "Ponytail Wrapped in Copper Wire and Beads",
          price: "40",
        },
   

        {
            src: "/images/barberSection/style4.webp",
            alt: "Image 2",
          caption: "Geometric Tribal Fulani Pattern with Curly Wisps",
          price: "30",
        },
        {
            src: "/images/barberSection/style1.webp",
            alt: "Image 2",
            caption: "Cleopatra-Style Natural Braids with Beads",
            price: "80",
          },
        // {
        //   src: "/images/barberSection/bold.jpg",
        //   alt: "Image 2",
        //   caption: "Bold",
        //   price: "70",
        // },
      ];

    return (<>
        <ServicesHero imageUrl ="/images/services/salon.jpeg" introText="SALON" headerImage="/images/salon/logo2.png" />
        <SalonIntro />
        <HorizontalRule />

    {/* <EmployeeCards employees={employeesData} openingText={introductoryMessage} /> */}
    {/* <HorizontalRule /> */}
    <PriceList images={hairstylesData} />
    <HorizontalRule />
    {/* <Gallery images={images} introText="Glimpse into Our Barbering Artistry" */}
{/* /> */}
    </>);
}
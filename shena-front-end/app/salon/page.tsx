'use client'
import EmployeeCards from "@/components/EmployeeCards";
import PriceList from "@/components/PriceList";
import ServicesHero from "@/components/ServicesHero";
import Gallery from "@/components/Gallery";
import HorizontalRule from "@/components/HorizontalRule";

export default function Salon() {
    return (<>
        <ServicesHero imageUrl ="/images/services/salon.jpeg" introText="SALON" headerImage="/images/salon/logo2.png" />
    {/* <EmployeeCards employees={employeesData} openingText={introductoryMessage} />
    <HorizontalRule />
    <PriceList hairstyles={hairstylesData} />
    <HorizontalRule />
    <Gallery images={images} introText="Glimpse into Our Barbering Artistry" */}
{/* /> */}
    </>);
}
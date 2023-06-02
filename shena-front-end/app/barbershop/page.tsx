'use client'
import EmployeeCards from "@/components/EmployeeCards";
import PriceList from "@/components/PriceList";
import ServicesHero from "@/components/ServicesHero";
import Gallery from "@/components/Gallery";
import HorizontalRule from "@/components/HorizontalRule";
export default function Barbershop() {
  const employeesData = [
    {
      name: "John Doe",
      phoneNumber: "+1 123-456-7890",
      socialMedia: ["Twitter", "LinkedIn"],
      imageSrc: ''
    },
    {
      name: "Jane Smith",
      phoneNumber: "+1 987-654-3210",
      socialMedia: ["Facebook", "Instagram"],
      imageSrc: ''

    },
    {
      name: "David Johnson",
      phoneNumber: "+1 555-123-4567",
      socialMedia: ["LinkedIn", "Twitter"],
      imageSrc: ''

    },
    {
      name: "Emily Davis",
      phoneNumber: "+1 777-888-9999",
      socialMedia: ["Instagram", "Facebook"],
      imageSrc: ''
    },
  ];
  const introductoryMessage = [
    {
      headingText: "MEET OUR BARBERS",
      meetOur: "",
    }
  ]
  const hairstylesData = [
    {
      id: 1,
      title: 'Fade',
      text: '60',
    },
    {
      id: 2,
      title: 'Chiskop',
      text: '80',
    },
    {
      id: 3,
      title: 'Panga',
      text: '90',
    },
    {
      id: 4,
      title: 'Trim',
      text: '40',
    },
    {
      id: 5,
      title: 'Beard & Trim',
      text: '60',
    },
    {
      id: 6,
      title: 'Dye and cut',
      text: '220',
    },
    // Add more hairstyle objects as needed
  ];
  const images = [
    {
      src: '/images/barberSection/IMG_1788.JPG',
      alt: 'Image 2',
      caption: 'Beautiful scenery',
    },
    {
      src: '/images/barberSection/IMG_1798.JPG',
      alt: 'Image 2',
      caption: 'Stunning architecture',
    },
    {
      src: '/images/barberSection/IMG_1754.JPG',
      alt: 'Image 2',
      caption: 'Stunning architecture',
    },
    // Add more image objects as needed
  ];
    return (<>
        <ServicesHero imageUrl ="/images/services/barber-card.JPG" introText="BARBER SHOP" />
    <EmployeeCards employees={employeesData} openingText={introductoryMessage} />
    <HorizontalRule />
    <PriceList hairstyles={hairstylesData} />
    <HorizontalRule />
    <Gallery images={images} />
    </>);
  }
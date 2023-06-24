'use client'
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
      socialMedia:"https://www.instagram.com/lebby_z_fade_cutz_/",
      imageSrc: '/images/barberSection/lebby.jpeg',
      instagramHandle:'@lebby_z_fade_cutz',
      whatsapp: true
    },
    {
      name: "Penda",
      phoneNumber: "+1 987-654-3210",
      socialMedia: "",
      imageSrc: '/images/barberSection/penda.jpg',
      instagramHandle:'@lebby_z_fade_cutz',
      whatsapp: false

    },
    {
      name: "Santos",
      phoneNumber: "+1 555-123-4567",
      socialMedia: "",
      imageSrc: '/images/barberSection/santos.jpg',
      instagramHandle:'@lebby_z_fade_cutz',
      whatsapp: true

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
      text: '80',
    },
    {
      id: 2,
      title: 'Brush Cut',
      text: '80',
    },
    {
      id: 3,
      title: 'Taper Fade',
      text: '80',
    },
    {
      id: 4,
      title: 'Trim & Beard Trim',
      text: '40',
    },
    {
      id: 5,
      title: 'Beard Trim',
      text: '30',
    },
    {
      id: 6,
      title:'Hair Dye/Coloring or Highlights ',
      text: '80',
    },
    {
      id: 7,
      title: 'Bold',
      text: '70',
    },
    // Add more hairstyle objects as needed
  ];
  const images = [
    {
      src: '/images/barberSection/IMG_1788.JPG',
      alt: 'Image 2',
      caption: 'Fade',
    },
    {
      src: '/images/barberSection/IMG_1798.JPG',
      alt: 'Image 2',
      caption: 'Beard Trim',
    },
    {
      src: '/images/barberSection/IMG_1754.JPG',
      alt: 'Image 2',
      caption: 'Trimming',
    },
    // Add more image objects as needed
  ];
    return (<>
        <ServicesHero imageUrl ="/images/services/barber-card.JPG" introText="BARBERSHOP" />
    <EmployeeCards employees={employeesData} openingText={introductoryMessage} />
    <HorizontalRule />
    <PriceList hairstyles={hairstylesData} />
    <HorizontalRule />
    <Gallery images={images} />
    </>);
  }
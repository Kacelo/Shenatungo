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
      imageSrc: '/images/barberSection/lebby2.jpeg',
      instagramHandle:'@lebby_z_fade_cutz',
      whatsapp: true
    },
    {
      name: "Penda",
      phoneNumber: "+1 987-654-3210",
      socialMedia: "",
      imageSrc: '/images/barberSection/penda2.jpg',
      instagramHandle:'@lebby_z_fade_cutz',
      whatsapp: false

    },
    {
      name: "Santos",
      phoneNumber: "+1 555-123-4567",
      socialMedia: "",
      imageSrc: '/images/barberSection/santos2.jpg',
      instagramHandle:'@lebby_z_fade_cutz',
      whatsapp: true

    },
  ];
  const introductoryMessage = [
    {
      headingText: "Our Expert Barber Team",
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
      caption: `Caption ${index + 3}`,
    })),
    ...Array.from({ length: 3 }, (_, index) => ({
      src: `/images/barberSection/photo_6039493638116981${331 + index}_y.jpg`,
      alt: `Image ${index + 3}`,
      caption: `Caption ${index + 3}`,
    })),
    ...Array.from({ length: 3 }, (_, index) => ({
      src: `/images/barberSection/photo_6039493638116981${325 + index}_y.jpg`,
      alt: `Image ${index + 3}`,
      caption: `Caption ${index + 3}`,
    })),
  ];
    return (<>
        <ServicesHero imageUrl ="/images/services/barber-card.JPG" introText="BARBERSHOP" headerImage="/images/barberSection/clippers.png" />
    <EmployeeCards employees={employeesData} openingText={introductoryMessage} />
    <HorizontalRule />
    <PriceList hairstyles={hairstylesData} />
    <HorizontalRule />
    <Gallery images={images} introText="Glimpse into Our Barbering Artistry"
/>
    </>);
  }
'use client'
import EmployeeCards from "@/components/EmployeeCards";
import PriceList from "@/components/PriceList";
import ServicesHero from "@/components/ServicesHero";
import Gallery from "@/components/Gallery";
import HorizontalRule from "@/components/HorizontalRule";
import { ENavbar } from "@/components/eNavbar/ENavBar";

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider} from '@chakra-ui/react'
import { theme } from '../theme'

// export default function Eshop() {
  
//   // const employeesData = [
//   //   {
//   //     name: "Lebby",
//   //     phoneNumber: "+264814504952",
//   //     socialMedia:"https://www.instagram.com/lebby_z_fade_cutz_/",
//   //     imageSrc: '/images/barberSection/lebby.jpeg',
//   //     instagramHandle:'@lebby_z_fade_cutz',

//   //   },
//   //   {
//   //     name: "Jane Smith",
//   //     phoneNumber: "+1 987-654-3210",
//   //     socialMedia: "",
//   //     imageSrc: '',
//   //     instagramHandle:'@lebby_z_fade_cutz'
//   //   },
//   //   {
//   //     name: "David Johnson",
//   //     phoneNumber: "+1 555-123-4567",
//   //     socialMedia: "",
//   //     imageSrc: '',
//   //     instagramHandle:'@lebby_z_fade_cutz'
//   //   },
//   //   {
//   //     name: "Emily Davis",
//   //     phoneNumber: "+1 777-888-9999",
//   //     socialMedia: "",
//   //     imageSrc: '',
//   //     instagramHandle:'@lebby_z_fade_cutz'
//   //   },
//   // ];
//   // const introductoryMessage = [
//   //   {
//   //     headingText: "MEET OUR BARBERS",
//   //     meetOur: "",
//   //   }
//   // ]
//   // const hairstylesData = [
//   //   {
//   //     id: 1,
//   //     title: 'Fade',
//   //     text: '80',
//   //   },
//   //   {
//   //     id: 2,
//   //     title: 'Brush Cut',
//   //     text: '80',
//   //   },
//   //   {
//   //     id: 3,
//   //     title: 'Taper Fade',
//   //     text: '80',
//   //   },
//   //   {
//   //     id: 4,
//   //     title: 'Trim & Beard Trim',
//   //     text: '40',
//   //   },
//   //   {
//   //     id: 5,
//   //     title: 'Beard Trim',
//   //     text: '30',
//   //   },
//   //   {
//   //     id: 6,
//   //     title:'Hair Dye/Coloring or Highlights ',
//   //     text: '80',
//   //   },
//   //   {
//   //     id: 7,
//   //     title: 'Bold',
//   //     text: '70',
//   //   },
//   //   // Add more hairstyle objects as needed
//   // ];
//   // const images = [
//   //   {
//   //     src: '/images/barberSection/IMG_1788.JPG',
//   //     alt: 'Image 2',
//   //     caption: 'Fade',
//   //   },
//   //   {
//   //     src: '/images/barberSection/IMG_1798.JPG',
//   //     alt: 'Image 2',
//   //     caption: 'Beard Trim',
//   //   },
//   //   {
//   //     src: '/images/barberSection/IMG_1754.JPG',
//   //     alt: 'Image 2',
//   //     caption: 'Trimming',
//   //   },
//   //   // Add more image objects as needed
//   // ];
//     return (<>
//     <ENavbar/>
//         <ServicesHero imageUrl ="/images/services/barber-card.JPG" introText="OUR ONLINE SHOP" />
//     {/* <EmployeeCards employees={employeesData} openingText={introductoryMessage} /> */}
//     <HorizontalRule />
//     {/* <PriceList hairstyles={hairstylesData} /> */}
//     <HorizontalRule />
//     {/* <Gallery images={images} /> */}
//     </>);
//   }
// import 'swiper/swiper.min.css';
import { Banner } from "@/features/home/Banner";
import { TopCategories } from "@/features/home/TopCategories";
import { FeaturedProducts } from "@/features/home/FeaturedProducts";
import CHome from "@/features/shopcart";
import YourComponent from "@/features/shopcart";
import { OurCategory } from "@/features/home/OurCategory";
import { SectionHeading } from "@/components/SectionHeading";
import BeautyComponent from "@/features/shopcart";
// import { ENavbar } from "@/components/eNavbar/ENavBar";
// import AppContextProvider from '@src/context/AppContext';

export default function eShop () {
  return (
    // <html lang="en">
  <>
        {/* <ENavbar/> */}
              <Banner/>
              <OurCategory/>
              {/* <TopCategories  />  */}
              {/* <FeaturedProducts/> */}
              <SectionHeading title=" New Arrivals" />
              <BeautyComponent/>
              {/* <Test/> */}
  </>
          
  );
}

"use client";
import ServicesHero from "@/components/ServicesHero";
import ContactUsCards from "@/components/contactUsCards";
import { Container, Stack } from "@chakra-ui/react";
import { FaGalacticSenate } from "react-icons/fa";

export default function ContactUs() {
  const contactDetails = [
    {
      heading: "Send us a message",
      subHeading: "++264813347480",
      phoneNumber: "+264813347480",
      imageSrc: "/images/contact-us/whatsapp.png",
      whatsapp: true,
      sendMail: false,
    },
    {
      heading: "Talk to us over the phone",
      subHeading: "++264813347480",
      phoneNumber: "+264813347480",
      imageSrc: "/images/contact-us/iphone.png",
      whatsapp: false,
      sendMail: false,
      phone: true,
    },
    {
      heading: "Send us an email",
      subHeading: "	tammukondjo@gmail.com",
      phoneNumber: "",
      emailAddress: "	tammukondjo@gmail.com",
      imageSrc: "",
      whatsapp: false,
      sendMail: true,
    },
    {
      heading: "Find Us Here",
      subHeading: "Shop 6, Opposite College of arts",
      phoneNumber: "",
      emailAddress: "",
      imageSrc: "",
      whatsapp: false,
      sendMail: false,
      showLocation: true,
    },
  ];
  return (
    <>
      <ServicesHero
        imageUrl="/images/barberSection/photo_5805664601931629386_y.jpg"
        introText="Contact Us"
        headerImage=""
      />

      <ContactUsCards contactInfo={contactDetails} />
      {/* <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1251833734923!2d24.272283592090798!3d-17.501536680991308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x195a246fe1915aef%3A0xb706b2f591741154!2sKFC!5e0!3m2!1sen!2sna!4v1642279186004!5m2!1sen!2sna"
          style={{ border: "0", width: "505px", height: "450px" }}
        ></iframe>
      </Stack> */}
    </>
  );
}

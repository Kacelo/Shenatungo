"use client";
import ServicesHero from "@/components/ServicesHero";
import ContactUsCards from "@/components/contactUsCards";
import { FaGalacticSenate } from "react-icons/fa";

export default function ContactUs() {
  const contactDetails = [
    {
      heading: "Send us a message",
      subHeading: "+264814380939",
      phoneNumber: "264814380939",
      imageSrc: "/images/contact-us/whatsapp.png",
      whatsapp: true,
      sendMail: false,
    },
    {
      heading: "Talk to us over the phone",
      subHeading: "+264814380939",
      phoneNumber: "264814380939",
      imageSrc: "/images/contact-us/iphone.png",
      whatsapp: false,
      sendMail: false,
    },
    {
      heading: "Send us an email",
      subHeading: "contactus@shena.com",
      phoneNumber: "",
      emailAddress: "contactus@shena.com",
      imageSrc: "",
      whatsapp: false,
      sendMail: true,
    },
  ];
  return (
    <>
      <ServicesHero
        imageUrl="/images/barberSection/photo_5805664601931629386_y.jpg"
        introText=""
        headerImage=""
      />

      <ContactUsCards contactInfo={contactDetails} />
    </>
  );
}

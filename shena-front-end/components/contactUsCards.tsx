import React from "react";
import {
  Box,
  Stack,
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Container,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcAssistant, FcCollaboration, FcDonate } from "react-icons/fc";
// import { FaEnvelope } from "react-icons/fa";
import { FaBeer, FaEnvelope } from "react-icons/fa";

interface ContactDetails {
  heading: string;
  subHeading: string;
  phoneNumber: string;
  emailAddress?: string;
  imageSrc: string;
  whatsapp: boolean;
  sendMail: boolean;
}
// interface Welcome {
//   headingText: string;
//   meetOur: string;
// }

interface ContactUsProps {
  contactInfo: ContactDetails[];
  //   openingText: Welcome[];
}

const contactUsCards: React.FC<ContactUsProps> = ({ contactInfo }) => {
  return (
    <Box p={4} marginTop={"20"}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading size="3xl">Get In Touch</Heading>
      </Stack>
      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={12} justify="center">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              heading={info.heading}
              subHeading={info.subHeading}
              phoneNumber={info.phoneNumber}
              emailAddress={info.emailAddress}
              imageSrc={info.imageSrc}
              whatsapp={info.whatsapp}
              sendMail={info.sendMail}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

interface CardProps {
  heading: string;
  subHeading: string;
  phoneNumber?: string;
  emailAddress?: string;
  imageSrc: string;
  whatsapp?: boolean;
  sendMail: boolean;
}

const Card: React.FC<CardProps> = ({
  heading,
  subHeading,
  phoneNumber,
  emailAddress,
  imageSrc,
  whatsapp,
  sendMail,
}) => {
  const openWhatsApp = () => {
    const message = "Hello, I would like to book an appointment.";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  const openEmailClient = () => {
    const subject = "Appointment Booking"; // Replace with the desired subject
    const body = "Hello, I would like to book an appointment."; // Replace with the desired email body

    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    // Open the email client with the specified email address, subject, and body
    window.open(mailtoUrl);
  };
  const openPhoneMessenger = () => {
    // Code to open the phone messenger (e.g., SMS, default messaging app, etc.)
    // This is a simplified example using a prompt to demonstrate the functionality
    const message = "Hello, I would like to book an appointment.";

    // Prompt the user to open the phone messenger with the specified number and message
    const confirmation = window.confirm(
      `Do you want to open the phone messenger and send a message to ${phoneNumber}?`
    );

    if (confirmation) {
      // Code to open the phone messenger with the specified number and message
      window.open(`sms:${phoneNumber}&body=${encodeURIComponent(message)}`);
    }
  };
  const telephoneNumber = +26461221463;
  const openPhoneDialer = () => {
    const url = `tel:${encodeURIComponent(telephoneNumber)}`;
    window.location.href = url;
  };
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      // borderRadius="md"
      overflow="hidden"
      p={2}
      style={{
        borderRadius: "14px !important",
        boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      }}
    >
      <Stack align={"center"} spacing={2}>
        <Flex
          w={236}
          h={236}
          align={"center"}
          justify={"center"}
          color={"white"}
          bg={useColorModeValue("white", "gray.700")}
          style={{ width: "-webkit-fill-available !important" }}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              style={{
                width: "100px",
                objectFit: "cover",
                borderRadius: "7px !important",
              }}
              alt=""
              height={100}
              width={45}
            />
          ) : (
            <FaEnvelope
              style={{
                width: "100px",
                height: "100px !important",
                margin: "auto",
                color: "black",
              }}
            />
          )}
          {/* Place your employee image or icon here */}
        </Flex>
        <Box mt={2} textAlign={"center"}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {subHeading}
          </Text>
          {/* <div
            onClick={openInsta}
            style={{ cursor: "pointer", display: "flex" }}
          >
            {socialMedia ? (
              <>
                {" "}
                <Image
                  src={"/images/instagram.png"}
                  alt=""
                  height={23}
                  width={23}
                />
                <Text fontSize={"sm"} mb={1} ml={1}>
                  {instagramHandle}
                </Text>
              </>
            ) : (
              <div style={{ margin: "25px 0 auto" }}></div>
            )}
          </div> */}
        </Box>
        {whatsapp && (
          <Button
            backgroundColor={"#D1B000"}
            color={"white"}
            size={"sm"}
            _hover={{ bg: "#EDF2F7", color: "#D1B000" }}
            onClick={openWhatsApp}
            rightIcon={
              <Image src={"/images/whatsapp.png"} alt="" height={5} width={5} />
            }
          >
            Click To Open
          </Button>
        )}
        {sendMail && (
          <Button
            backgroundColor={"#D1B000"}
            color={"white"}
            size={"sm"}
            _hover={{ bg: "#EDF2F7", color: "#D1B000" }}
            onClick={openEmailClient}
          >
            Email Now
          </Button>
        )}
        {!sendMail && !whatsapp && (
          <Button
            backgroundColor={"#D1B000"}
            color={"white"}
            size={"sm"}
            _hover={{ bg: "#EDF2F7", color: "#D1B000" }}
            onClick={openPhoneDialer}
          >
            Call Now{" "}
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default contactUsCards;

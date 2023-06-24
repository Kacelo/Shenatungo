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

interface Employee {
  name: string;
  phoneNumber: string;
  socialMedia: string;
  imageSrc: string;
  instagramHandle: string;
  whatsapp: boolean;

}
interface Welcome {
  headingText: string;
  meetOur: string;
}

interface ServicesProps {
  employees: Employee[];
  openingText: Welcome[];
}

const EmployeeCards: React.FC<ServicesProps> = ({ employees, openingText }) => {
  return (
    <Box p={4} marginTop={"20"}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          {openingText.map((text) => {
            return text.headingText;
          })}
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          {openingText.map((text) => {
            return text.meetOur;
          })}
        </Text>
      </Stack>
      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={12} justify="center">
          {employees.map((employee, index) => (
            <Card
              key={index}
              heading={employee.name}
              phoneNumber={employee.phoneNumber}
              socialMedia={employee.socialMedia}
              imageSrc={employee.imageSrc}
              instagramHandle={employee.instagramHandle}
              whatsapp={employee.whatsapp}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

interface CardProps {
  heading: string;
  phoneNumber: string;
  socialMedia: string;
  imageSrc: string;
  instagramHandle: string;
  whatsapp: boolean;

}

const Card: React.FC<CardProps> = ({
  heading,
  phoneNumber,
  socialMedia,
  imageSrc,
  instagramHandle,
  whatsapp,
}) => {
  const openWhatsApp = () => {
    const message = "Hello, I would like to book an appointment.";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  const openInsta = () => {
    const url = socialMedia;
    window.open(url, "_blank");
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
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="sm"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
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
              style={{ width: "-webkit-fill-available !important" }}
              alt=""
              height={236}
              width={"-webkit-fill-available"}
            />
          ) : (
            ""
          )}
          {/* Place your employee image or icon here */}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            Phone: {phoneNumber}
          </Text>
          <div
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
              ""
            )}
          </div>
        </Box>
        {whatsapp === true ? (
          <Button
            backgroundColor={"#D1B000"}
            color={"white"}
            size={"sm"}
            onClick={openWhatsApp}
            rightIcon={
              <Image src={"/images/whatsapp.png"} alt="" height={5} width={5} />
            }
          >
            Book Appointment
          </Button>
        ) : (
          <Button
            backgroundColor={"#D1B000"}
            color={"white"}
            size={"sm"}
            onClick={openPhoneMessenger}
          >
            Book Appointment via SMS
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default EmployeeCards;

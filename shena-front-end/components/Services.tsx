import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";
import Image from "next/image";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
  imageSrc: string;
}

const Card = ({ heading, description, icon, href, imageSrc }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="sm"
      overflow="hidden"
      p={2}
      style={{
        borderRadius: "14px !important",
        boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      }}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          style={{
            width: "-webkit-fill-available !important",
            height: "-webkit-fill-available !important",
            borderRadius: "14px !important",
          }}
          w={236}
          h={236}
          align={"center"}
          justify={"center"}
          color={"white"}
          // rounded={'full'}
          bg={useColorModeValue("white", "gray.700")}
          mb={2}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt=""
              height={236}
              width={236}
              style={{
                width: "-webkit-fill-available !important",
                height: "-webkit-fill-available !important",
                borderRadius: "7px !important",
              }}
            />
          ) : (
            icon
          )}{" "}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Box
          mt={2}
          textAlign={"center"}
          style={{ margin: "2em auto 0em", top: "0" }}
        >
          <Button
            as={"a"}
            // display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"#D1B000"}
            href={href}
            _hover={{
              bg: "yellow.400",
            }}
          >
            Explore More
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default function Services() {
  return (
    <Box p={4} marginTop={"20"}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Our Services
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          {/* Welcome to our vibrant world of beauty and cosmetics! At our exceptional website, we offer a delightful array of services and products designed to elevate your personal style and enhance your natural charm. Step into our enchanting realm and discover a harmonious fusion of artistry, expertise, and top-notch customer care. */}
        </Text>
      </Stack>

      <Container maxW={"7xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={12} justify="center">
          <Card
            heading={"Barbers"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Step into our barbershop and experience the artistry of our skilled professionals."
            }
            // From classic haircuts to modern styles, our barbers are dedicated to delivering impeccable grooming services that leave you looking sharp and feeling confident.
            href={"/barbershop"}
            imageSrc="/images/services/barber.jpeg"
          />
          <Card
            heading={"Hairstylists"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Unlock the full potential of your hair with our team of talented hairstylists."
            }
            //  Whether you are seeking a bold transformation or a subtle update, our stylists will work their magic to create a look that suits your unique personality and enhances your natural beauty.
            href={"/salon"}
            imageSrc="/images/salon/landing2.jpg"
          />
                  <Card
            heading={"Make Up Studio"}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              "Discover a world of beauty at your fingertips with our carefully curated selection of beauty products."
            }
            href={"/make-up-studio"}
            imageSrc="/images/make-up-studio/cardImage.jpg"
          />
          <Card
            heading={"Nail Techs"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "Indulge in the art of nail care with our exceptional nail technicians."
            }
            //  From intricate designs to flawless manicures and pedicures, our skilled experts will pamper your hands and feet, leaving you with nails that are as stunning as they are well-maintained.
            href={"#"}
            imageSrc="/images/services/nails.jpeg"
          />
  
        </Flex>
      </Container>
    </Box>
  );
}

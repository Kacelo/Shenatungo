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
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          style={{ width: "-webkit-fill-available !important", height: "-webkit-fill-available !important"  }}
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
              style={{ width: "-webkit-fill-available !important", height: "-webkit-fill-available !important" }}
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
        <Button variant={"link"} color={"#D1B000"} size={"sm"}>
          Learn more
        </Button>
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

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={12} justify="center">
          <Card
            heading={"Barbers"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Step into our barbershop and experience the artistry of our skilled professionals. From classic haircuts to modern styles, our barbers are dedicated to delivering impeccable grooming services that leave you looking sharp and feeling confident."
            }
            href={"#"}
            imageSrc="/images/services/barber-card.JPG"
          />
          <Card
            heading={"Hairstylists"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Unlock the full potential of your hair with our team of talented hairstylists. Whether you are seeking a bold transformation or a subtle update, our stylists will work their magic to create a look that suits your unique personality and enhances your natural beauty."
            }
            href={"#"}
            imageSrc=""
          />
          <Card
            heading={"Nail Techs"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "Indulge in the art of nail care with our exceptional nail technicians. From intricate designs to flawless manicures and pedicures, our skilled experts will pamper your hands and feet, leaving you with nails that are as stunning as they are well-maintained."
            }
            href={"#"}
            imageSrc="/images/services/nail-tech-card.JPG"
          />
          {/* <Card
              heading={'Beauty Products'}
              icon={<Icon as={FcManager} w={10} h={10} />}
              description={
                'Discover a world of beauty at your fingertips with our carefully curated selection of beauty products. From luxurious skincare essentials to makeup must-haves and haircare gems, our collection features top-quality brands that will elevate your beauty routine and enhance your natural glow.'
              }
              href={'#'}
            /> */}
        </Flex>
      </Container>
    </Box>
  );
}

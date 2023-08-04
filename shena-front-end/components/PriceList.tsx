import React from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Button,
  Flex,
  Image,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Gallery from "./Gallery";

interface Hairstyle {
  images: { src: string; alt: string; caption: string; price: string }[];
}

interface PriceListProps {
  hairstyles: Hairstyle[];
}

const PriceList: React.FC<Hairstyle> = ({ images }) => {
  return (
    <Container maxW={"6xl"} py={2} marginTop={"5"}>
      <Gallery
        images={images}
        HeadingText="Explore Our Priced Services"
      />
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Button
          backgroundColor={"#D1B000"}
          color={"white"}
          _hover={{ bg: "whiteAlpha.100", color: "#D1B000" }}
          style={{ margin: "0 auto" }}
        >
          Download Price List
        </Button>
      </Stack>
    </Container>
  );
};

export default PriceList;

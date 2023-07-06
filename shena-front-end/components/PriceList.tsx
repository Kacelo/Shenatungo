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
      {/* <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        {/* <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Price List
        </Heading> */}
        {/* <Text color={"gray.600"} fontSize={"xl"}>
        </Text>
      </Stack> 
      */}
      {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} backgroundColor={'white'} >
    <Container maxW={"9xl"} mt={10}>
       <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} spacing={10} >
          {hairstyles.map((hairstyle) => (
            <HStack key={hairstyle.id} align={"top"}>
              <Box color={"#D1B000"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600} fontSize={"xl"}>
                  {hairstyle.title}
                </Text>
                <Text color={"gray.600"} fontSize={"xl"}>
                  Price: N$ {hairstyle.text}
                </Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
        <br></br>
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
      <Flex>
        <Image
          rounded={'md'}
          alt={'feature image'}
          src={
            '/images/barberSection/photo_5805664601931629253_y.jpg'}
          objectFit={'cover'}
        />
      </Flex>
    </SimpleGrid> */}
      <Gallery images={images} introText="Explore Our Priced Services" />
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

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PopularProductCards } from "./popularProducts";
import { ServicesCards } from "./ProductCard";

export const NailServices = () => {
  return (
    <Container maxW={"8xl"} mt={20}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading size="2xl" mb={10}>
          Services Offered
        </Heading>
      </Stack>
      <Grid
        // h="450px"
        templateRows={useBreakpointValue({
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
        })}
        templateColumns={useBreakpointValue({
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        })}
        // gap={3}
        textAlign={"center"}
      >
        <GridItem bg="white" borderRadius={14} margin={"auto"}>
          <ServicesCards
            imageUrl="/images/nail-department/photo_5929321095545076599_y.jpg"
            imageAlt="dfdf"
            productName="Manicures(Arcrylic and Gel)"
            productDescription=""
          />
        </GridItem>
        <GridItem bg="white" borderRadius={14} margin={"auto"}>
          <ServicesCards
            imageUrl="https://www.prettysbeauty.com/uploads/7/6/2/5/76250517/img-8774.jpg"
            imageAlt="dfdf"
            productName="Pedicures(Arcrylic and Gel)"
            productDescription=""
          />
        </GridItem>
        <GridItem bg="white" borderRadius={14} margin={"auto"}>
          <ServicesCards
            imageUrl="https://m.media-amazon.com/images/I/81hoL6l7FqL._SL1500_.jpg"
            imageAlt="dfdf"
            productName="Training"
            productDescription=""
          />
        </GridItem>
      </Grid>{" "}
      {/* <Stack
        spacing={4}
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
        marginTop={"2em"}
      >
        <Button
          backgroundColor={"#D1B000"}
          color={"white"}
          _hover={{ bg: "whiteAlpha.100", color: "#D1B000" }}
          style={{ margin: "0 auto" }}
          borderRadius={"full"}
        >
          Download Price List
        </Button>
      </Stack> */}
    </Container>
  );
};
export const NailGuide = () => {
  return (
    <Container maxW={"8xl"} mt={20}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading size="2xl" mb={5}>
          Popular Nail Shape Guide
        </Heading>
        <Text color={"gray.500"} fontSize={"lg"}>
         Let us help you pick the shape that best suits your fingers.
        </Text>
      </Stack>
      <Stack>
      <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={useBreakpointValue({base:"/images/nail-department/4.png", md:"/images/nail-department/1.png"})}
            objectFit={"cover"}
            style={{ borderRadius: "14px !important" }}
          />
        </Flex>
      </Stack>
    </Container>
  );
};

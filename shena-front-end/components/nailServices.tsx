import {
  Box,
  Button,
  Container,
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
        <Heading size="2xl">Services Offered</Heading>
      </Stack>
      <Grid
        // h="450px"
        templateRows={useBreakpointValue({
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
        })}
        templateColumns={useBreakpointValue({
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
        })}
        // gap={3}
        textAlign={"center"}
      >
        <GridItem bg="white" borderRadius={14} margin={"auto"}>
          <ServicesCards
            imageUrl="/images/nail-department/photo_5929321095545076599_y.jpg"
            imageAlt="dfdf"
            productName="Manicures"
            productDescription="Arcrylic and Gel"
          />
        </GridItem>
        <GridItem bg="white" borderRadius={14} margin={"auto"}>
          <ServicesCards
            imageUrl="https://www.edgars.co.za/media/catalog/product/cache/1b5bd1c3f1a1f8dadfc68dc5bb5057ae/7/7/773602689477_translucent_3.3.jpg"
            imageAlt="dfdf"
            productName="Manicures"
            productDescription="Arcrylic and Gel"
          />
        </GridItem>
        <GridItem bg="white" borderRadius={14} margin={"auto"}>
          <ServicesCards
            imageUrl="https://www.edgars.co.za/media/catalog/product/cache/1b5bd1c3f1a1f8dadfc68dc5bb5057ae/7/7/773602689477_translucent_3.3.jpg"
            imageAlt="dfdf"
            productName="Nail Training"
            productDescription=""
          />
        </GridItem>
      </Grid>{" "}
    </Container>
  );
};

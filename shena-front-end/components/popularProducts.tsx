import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
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

interface PopularProductsCardsProps {
  imageUrl: string;
  imageAlt: string;
  productName: string;
  productDescription: string;
}

export const PopularProductCards: React.FC<PopularProductsCardsProps> = ({
  imageUrl,
  imageAlt,
  productName,
  productDescription,
}) => {
  return (
    <Card
      w="xs"
      pos="relative"
      m="0.5rem"
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
      borderRadius={"14px"}
    >
      <CardBody>
        <Image src={imageUrl} alt={imageAlt} borderRadius="7px" />
        <Stack mt="6" spacing="3">
          <Flex justify="space-between" align="center">
            <Heading size="md">{productName}</Heading>
          </Flex>
          <Text>{productDescription}</Text>
          {/* <Rating/> */}
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup>
          <Button variant="solid" colorScheme="yellow" borderRadius={"full"}>
            Visit Shop
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
export const PopularProducts = () => {
  return (
    <Container maxW={"8xl"} mt={20}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading size="2xl" mb={10}>
          Popular Products
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
        gap={4}
      >
        <GridItem colSpan={1} bg="white" borderRadius={14}>
          <PopularProductCards
            imageUrl="https://www.edgars.co.za/media/catalog/product/cache/1b5bd1c3f1a1f8dadfc68dc5bb5057ae/7/7/773602689477_translucent_3.3.jpg"
            imageAlt="product1"
            productName="MAC"
            productDescription="Studio Fix Pro Set + Blur Weightless Loose Powder"
          />
        </GridItem>
        <GridItem colSpan={1} bg="white" borderRadius={14}>
          <PopularProductCards
            imageUrl="https://cdn.shopify.com/s/files/1/0273/5541/4580/products/TR-SoSilver-Cond-1L_large.png?v=1639505599"
            imageAlt="product1"
            productName="Matrix Hair Care"
            productDescription=" Conditioner for smoothness. Mega Sleek System, with Shea
              Butter."
          />
        </GridItem>
        <GridItem colSpan={1} bg="white" borderRadius={14}>
          <PopularProductCards
            imageUrl="https://www.edgars.co.za/media/catalog/product/cache/1b5bd1c3f1a1f8dadfc68dc5bb5057ae/8/4/840026665667_1.jpg"
            imageAlt="product1"
            productName=" Fenty Beauty"
            productDescription=" Fenty Icon Refill Lipstick Case"
          />
        </GridItem>
      </Grid>{" "}
    </Container>
  );
};

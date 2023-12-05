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
      borderRadius={"18px"}
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
          <Button
            variant="solid"
            bg="#D1B000"
            borderRadius={"full"}
            color={"white"}
            as={"a"}
            href={"/eShop"}
            _hover={{ bg: "#EDF2F7", color: "#D1B000" }}

          >
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
          xl: "repeat(4, 1fr)",
        })}
        gap={4}
      >
        <GridItem colSpan={1} bg="white" borderRadius={14}>
          <PopularProductCards
            imageUrl="images/make-up-studio/shop-products/photo_5960611581563879164_y.jpg"
            imageAlt="product1"
            productName="NYANYU BY SELMA NITEMBU"
            productDescription="BLUSH"
          />
        </GridItem>
        <GridItem colSpan={1} bg="white" borderRadius={14}>
          <PopularProductCards
            imageUrl="images/make-up-studio/shop-products/photo_5960611581563879165_y.jpg"
            imageAlt="product1"
            productName="NYANYU BY SELMA NITEMBU"
            productDescription="CONCEALER"
          />
        </GridItem>
        <GridItem colSpan={1} bg="white" borderRadius={14}>
          <PopularProductCards
            imageUrl="images/make-up-studio/shop-products/photo_5960611581563879166_y.jpg"
            imageAlt="product1"
            productName="NYANYU BY SELMA NITEMBU"
            productDescription="WATERPROOF MATTE FOUNDATION"
          />
        </GridItem>
        <GridItem colSpan={1} bg="white" borderRadius={14}>
          <PopularProductCards
            imageUrl="images/make-up-studio/shop-products/photo_5960611581563879167_y.jpg"
            imageAlt="product1"
            productName="NYANYU BY SELMA NITEMBU"
            productDescription="HIGHLIGHT"
          />
        </GridItem>
        <GridItem colSpan={1} bg="white" borderRadius={14}>
          <PopularProductCards
            imageUrl="images/make-up-studio/shop-products/photo_5960611581563879168_y.jpg"
            imageAlt="product1"
            productName="NYANYU BY SELMA NITEMBU"
            productDescription="LOOSE POWDER"
          />
        </GridItem>
      </Grid>{" "}
    </Container>
  );
};

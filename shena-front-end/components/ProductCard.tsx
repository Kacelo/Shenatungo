"use client";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
  Flex,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export const ProductCard = () => {
  return (
    <Card w="xs" pos="relative" m="0.5rem">
      <CardBody>
        <Image
          src="https://cdn.shopify.com/s/files/1/0273/5541/4580/products/TR-SoSilver-Cond-1L_large.png?v=1639505599"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Flex justify="space-between" align="center">
            <Heading size="md">Matrix Hair Care</Heading>
            <Flex color="brand.primaryDark" fontWeight="bold">
              <Text fontSize="sm">N$</Text>
              <Text fontSize="lg">100</Text>
            </Flex>
          </Flex>
          <Text>
            Conditioner for smoothness. Mega Sleek System, with Shea Butter.
          </Text>
          {/* <Rating/> */}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

interface PopularProductsCardsProps {
  imageUrl: string;
  imageAlt: string;
  productName: string;
  productDescription: string;
}

export const ServicesCards: React.FC<PopularProductsCardsProps> = ({
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
      <Box bg={useColorModeValue('white', 'gray.800')}>
      <Image src={imageUrl} alt={imageAlt} borderRadius="7px" height={300} width={300}/>
          </Box>
        <Stack mt="6" spacing="3">
          <Flex justify="space-between" align="center">
            <Heading size="md">{productName}</Heading>
          </Flex>
          <Text>{productDescription}</Text>
          {/* <Rating/> */}
        </Stack>
      </CardBody>
      {/* <CardFooter>
        <ButtonGroup>
          <Button variant="solid" colorScheme="yellow" borderRadius={"full"}>
            Boo
          </Button>
        </ButtonGroup>
      </CardFooter> */}
    </Card>
  );
};



// export default ProductCard

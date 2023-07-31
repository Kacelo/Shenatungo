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

export const PopularProducts = () => {
  return (
    <Container maxW={"8xl"} mt={20}>
       <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading size="2xl">Popular Products</Heading>
      </Stack>
      {/* <Grid
        // h="900px"
        templateRows={useBreakpointValue({
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
        })}
        templateColumns={useBreakpointValue({
          base: "repeat(1, 1fr)",
          md: "repeat(4, 1fr)",
        })}
        gap={4}
        mt={5}
      > */}
      {/* <GridItem colSpan={2} bg="white" borderRadius={14}>
          <Box position="relative">
            <Image
              src="https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2022/06/5-natural-hair-product-by-black-owned-brand.jpg?resize=500%2C500&ssl=1"
              alt="dfdf"
              width="100%"
              borderRadius={"14px"}
            />

            <VStack
              align={"start"}
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              px={2}
              py={1}
              fontWeight="bold"
              bg="blackAlpha.300"
              color="white"
              borderRadius={"0 0 14px 14px"}
            >
              {" "}
              <Heading fontWeight={600} fontSize={"xl"}>
                View our full collection of products
              </Heading>{" "}
              <Button
                backgroundColor={"#D1B000"}
                color={"white"}
                size={"sm"}
                _hover={{ bg: "#EDF2F7", color: "#D1B000" }}
              >
                Visit Shop
              </Button>{" "}
            </VStack>
          </Box>{" "}
        </GridItem> */}
      {/* <GridItem colSpan={2} bg="white"> */}
      <Grid
        // h="450px"
        templateRows={useBreakpointValue({
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
        })}
        templateColumns={useBreakpointValue({
          base: "repeat(1, 1fr)",
          md: "repeat(8, 1fr)",
        })}
        gap={4}
      >
        <GridItem colSpan={2} bg="white" borderRadius={14}>
          <Box position="relative">
            <Image
              src="https://www.edgars.co.za/media/catalog/product/cache/1b5bd1c3f1a1f8dadfc68dc5bb5057ae/7/7/773602689477_translucent_3.3.jpg"
              alt="dfdf"
              width="100%"
              borderRadius={"14px"}
            />

            <VStack
              align={"start"}
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              px={2}
              py={1}
              fontWeight="bold"
              bg="blackAlpha.200"
              color="white"
              borderRadius={"0 0 14px 14px"}
            >
              {" "}
              <Heading fontWeight={600} fontSize={"xl"}>
                MAC
              </Heading>{" "}
              <Text fontWeight={100} fontSize={"sm"}>
                Studio Fix Pro Set + Blur Weightless Loose Powder
              </Text>
              <Button
                backgroundColor={"#D1B000"}
                color={"white"}
                size={"sm"}
                _hover={{ bg: "#EDF2F7", color: "#D1B000" }}
              >
                View More
              </Button>{" "}
            </VStack>
          </Box>{" "}
        </GridItem>
        <GridItem colSpan={2} bg="white" borderRadius={14}>
          <Box position="relative">
            <Image
              src="https://www.edgars.co.za/media/catalog/product/7/7/773602648672.1.jpg"
              alt="dfdf"
              width="100%"
              borderRadius={"14px"}
            />

            <VStack
              align={"start"}
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              px={2}
              py={1}
              fontWeight="bold"
              bg="blackAlpha.300"
              color="white"
              borderRadius={"0 0 14px 14px"}
            >
              {" "}
              <Heading fontWeight={600} fontSize={"xl"}>
                MAC
              </Heading>{" "}
              <Text fontWeight={100} fontSize={"sm"}>
                Connect In Colour Palette Embedded In Burgundy{" "}
              </Text>
              <Button
                backgroundColor={"#D1B000"}
                color={"white"}
                size={"sm"}
                _hover={{ bg: "#EDF2F7", color: "#D1B000" }}
              >
                View More
              </Button>{" "}
            </VStack>
          </Box>{" "}
        </GridItem>
        <GridItem colSpan={2} bg="white" borderRadius={14}>
          <Box position="relative">
            <Image
              src="https://www.edgars.co.za/media/catalog/product/cache/1b5bd1c3f1a1f8dadfc68dc5bb5057ae/8/4/840026665667_1.jpg"
              alt="dfdf"
              width="100%"
              borderRadius={"14px"}
            />

            <VStack
              align={"start"}
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              px={2}
              py={1}
              fontWeight="bold"
              bg="blackAlpha.300"
              color="white"
              borderRadius={"0 0 14px 14px"}
            >
              {" "}
              <Heading fontWeight={600} fontSize={"xl"}>
                Fenty Beauty{" "}
              </Heading>{" "}
              <Text fontWeight={100} fontSize={"sm"}>
                Fenty Icon Refill Lipstick Case{" "}
              </Text>
              <Button
                backgroundColor={"#D1B000"}
                color={"white"}
                size={"sm"}
                _hover={{ bg: "#EDF2F7", color: "#D1B000" }}
              >
                View More
              </Button>{" "}
            </VStack>
          </Box>{" "}
        </GridItem>
        <GridItem colSpan={2} bg="white" borderRadius={14}>
          <Box position="relative">
            <Image
              src="https://www.edgars.co.za/media/catalog/product/8/4/840026661102_1.jpg"
              alt="dfdf"
              width="100%"
              borderRadius={"14px"}
            />

            <VStack
              align={"start"}
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              px={2}
              py={1}
              fontWeight="bold"
              bg="blackAlpha.300"
              color="white"
              borderRadius={"0 0 14px 14px"}
            >
              {" "}
              <Heading fontWeight={600} fontSize={"xl"}>
                Fenty Beauty{" "}
              </Heading>{" "}
              <Text fontWeight={100} fontSize={"sm"}>
              Semi-Matte Lipstick Matte Black{" "}
              </Text>
              <Button
                backgroundColor={"#D1B000"}
                color={"white"}
                size={"sm"}
                _hover={{ bg: "#EDF2F7", color: "#D1B000" }}
              >
                View More
              </Button>{" "}
            </VStack>
          </Box>{" "}
        </GridItem>
        {/* <GridItem colSpan={2} bg="white" borderRadius={14}>
          <Box position="relative">
            <Image
              src="https://www.carolsdaughter.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-cd-master-catalog/default/dw58f5f6b6/ProductImages/Wash-Day/Wash-Day-Little-Mermaid/Little_Mermaid_PDP_Little_Mermaid_WDD_COND_061_Main_1000x1000_R4.jpg?sw=395&sh=395&sm=cut&sfrm=jpg&q=70"
              alt="dfdf"
              width="100%"
              borderRadius={"14px"}
            />

            <VStack
              align={"start"}
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              px={2}
              py={1}
              fontWeight="bold"
              bg="blackAlpha.300"
              color="white"
              borderRadius={"0 0 14px 14px"}
            >
              {" "}
              <Heading fontWeight={600} fontSize={"xl"}>
                Hair Conditioner
              </Heading>{" "}
              <Button
                backgroundColor={"#D1B000"}
                color={"white"}
                size={"sm"}
                _hover={{ bg: "#EDF2F7", color: "#D1B000" }}
              >
                View More
              </Button>{" "}
            </VStack>
          </Box>{" "}
        </GridItem> */}
      </Grid>{" "}
      {/* </GridItem> */}
      {/* <GridItem colSpan={2} bg='papayawhip' >
            Main
          </GridItem>
          <GridItem colSpan={4} bg='tomato' >
            Footer
          </GridItem> */}
      {/* </Grid> */}
    </Container>
  );
};

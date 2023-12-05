import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export const VisitShop = () => {
  return (
    <Container maxW={"6xl"} mt={20}>
      <Heading fontWeight={600} fontSize={"5xl"}>
        Maintain Your Look
      </Heading>{" "}
      <Grid
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
      >
        <GridItem
          colSpan={2}
          bg="white"
          borderRadius={14}
          backgroundImage={
            "url('/images/landingPage/maintain-your-look/Neutral Minimalist Grid Color Mood Board Instagram Post.png')"
          }
          bgSize={"contain"}
          minHeight={400}
        >
          <Box position="relative" display={"contents"}>
            <VStack
              align={"start"}
              position="inherit"
              bottom={0}
              left={0}
              right={0}
              px={3}
              py={2}
              fontWeight="bold"
              bg="blackAlpha.300"
              color="white"
              borderRadius={"18px 18px"}
              width={"100%"}
              height={"100%"}
              alignContent={"center"}
            >
              {" "}
              <Stack
                paddingTop={"auto"}
                marginTop={"auto"}
                textAlign={"initial"}
              >
                <Heading fontWeight={600} fontSize={"xl"}>
                  NYANYU BY SELMA NITEMBU
                </Heading>{" "}
              </Stack>
              <Button
                backgroundColor={"#D1B000"}
                color={"white"}
                size={"md"}
                style={{ minWidth: "150px" }}
                _hover={{ bg: "#EDF2F7", color: "#D1B000" }}
                borderRadius={"full"}
                as={"a"}
                href={"/eShop"}
              >
                View More
              </Button>{" "}
            </VStack>
          </Box>{" "}
        </GridItem>
        <GridItem colSpan={2} bg="white">
          <Grid
            // h="450px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(4, 1fr)"
            gap={4}
          >
            <GridItem
              colSpan={2}
              bg="white"
              borderRadius={14}
              backgroundImage={"url('/images/Hair Products.png')"}
              bgSize={"contain"}
              minHeight={250}
            >
              <Box position="relative" display={"contents"}>
                <VStack
                  align={"start"}
                  position="inherit"
                  bottom={0}
                  left={0}
                  right={0}
                  px={3}
                  py={2}
                  fontWeight="bold"
                  bg="blackAlpha.300"
                  color="white"
                  borderRadius={"14px 14px"}
                  width={"100%"}
                  height={"100%"}
                  alignContent={"center"}
                >
                  {" "}
                  <Stack
                    paddingTop={"auto"}
                    marginTop={"auto"}
                    textAlign={"initial"}
                  >
                    <Heading fontWeight={600} fontSize={"xl"}>
                      Hair Products
                    </Heading>{" "}
                  </Stack>
                  <Button
                    backgroundColor={"#D1B000"}
                    color={"white"}
                    size={"md"}
                    style={{ minWidth: "150px" }}
                    _hover={{ bg: "#EDF2F7", color: "#D1B000" }}
                    borderRadius={"full"}
                    as={"a"}
                    href={"/Hair-products"}
                  >
                    View More
                  </Button>{" "}
                </VStack>
              </Box>{" "}
            </GridItem>
            <GridItem
              colSpan={2}
              bg="white"
              borderRadius={14}
              backgroundImage={"url('/images/Nail Products.jpg')"}
              bgSize={"contain"}
            >
              <Box position="relative" display={"contents"}>
                <VStack
                  align={"start"}
                  position="inherit"
                  bottom={0}
                  left={0}
                  right={0}
                  px={3}
                  py={2}
                  fontWeight="bold"
                  bg="blackAlpha.300"
                  color="white"
                  borderRadius={"14px 14px"}
                  width={"100%"}
                  height={"100%"}
                  alignContent={"center"}
                >
                  {" "}
                  <Stack
                    paddingTop={"auto"}
                    marginTop={"auto"}
                    textAlign={"initial"}
                  >
                    <Heading fontWeight={600} fontSize={"xl"}>
                      Nail Products
                    </Heading>{" "}
                  </Stack>
                  <Button
                    backgroundColor={"#D1B000"}
                    color={"white"}
                    size={"md"}
                    style={{ minWidth: "150px" }}
                    _hover={{ bg: "#EDF2F7", color: "#D1B000" }}
                    borderRadius={"full"}
                    as={"a"}
                    href={"/Nail-products"}
                  >
                    View More
                  </Button>{" "}
                </VStack>
              </Box>{" "}
            </GridItem>
            <GridItem
              colSpan={2}
              bg="white"
              borderRadius={14}
              backgroundImage={
                "url('/images/make-up-studio/shop-products/Beauty Products.png')"
              }
              bgSize={"contain"}
            >
              <Box position="relative" display={"contents"}>
                <VStack
                  align={"start"}
                  position="inherit"
                  bottom={0}
                  left={0}
                  right={0}
                  px={3}
                  py={2}
                  fontWeight="bold"
                  bg="blackAlpha.300"
                  color="white"
                  borderRadius={"14px 14px"}
                  width={"100%"}
                  height={"100%"}
                  alignContent={"center"}
                >
                  {" "}
                  <Stack
                    paddingTop={"auto"}
                    marginTop={"auto"}
                    textAlign={"initial"}
                  >
                    <Heading fontWeight={600} fontSize={"xl"}>
                      Beauty Products{" "}
                    </Heading>{" "}
                  </Stack>
                  <Button
                    backgroundColor={"#D1B000"}
                    color={"white"}
                    size={"md"}
                    style={{ minWidth: "150px" }}
                    _hover={{ bg: "#EDF2F7", color: "#D1B000" }}
                    borderRadius={"full"}
                    as={"a"}
                    href={"/Beauty-products/"}
                  >
                    View More
                  </Button>{" "}
                </VStack>
              </Box>{" "}
            </GridItem>
            <GridItem
              colSpan={2}
              bg="white"
              borderRadius={14}
              backgroundImage={"url('/images/Grooming Products.jpg')"}
              bgSize={"contain"}
            >
              <Box position="relative" display={"contents"}>
                <VStack
                  align={"start"}
                  position="inherit"
                  bottom={0}
                  left={0}
                  right={0}
                  px={3}
                  py={2}
                  fontWeight="bold"
                  bg="blackAlpha.300"
                  color="white"
                  borderRadius={"14px 14px"}
                  width={"100%"}
                  height={"100%"}
                  alignContent={"center"}
                >
                  {" "}
                  <Stack
                    paddingTop={"auto"}
                    marginTop={"auto"}
                    textAlign={"initial"}
                  >
                    <Heading fontWeight={600} fontSize={"xl"}>
                      Grooming Products{" "}
                    </Heading>{" "}
                  </Stack>
                  <Button
                    backgroundColor={"#D1B000"}
                    color={"white"}
                    size={"md"}
                    style={{ minWidth: "150px" }}
                    _hover={{ bg: "#EDF2F7", color: "#D1B000" }}
                    borderRadius={"full"}
                    as={"a"}
                    href={"/grooming-products"}
                  >
                    View More
                  </Button>{" "}
                </VStack>
              </Box>{" "}
            </GridItem>
          </Grid>{" "}
        </GridItem>
        {/* <GridItem colSpan={2} bg='papayawhip' >
          Main
        </GridItem>
        <GridItem colSpan={4} bg='tomato' >
          Footer
        </GridItem> */}
      </Grid>
    </Container>
  );
};

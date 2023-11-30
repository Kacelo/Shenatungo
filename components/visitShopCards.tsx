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
        <GridItem colSpan={2} bg="white" borderRadius={14}>
          <Box position="relative">
            <Image
              src="/images/landingPage/maintain-your-look/Neutral Minimalist Grid Color Mood Board Instagram Post.png"
              alt="dfdf"
              width="100%"
              borderRadius={"18px"}
            />

<VStack
                  align={"start"}
                  position="absolute"
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
            <GridItem colSpan={2} bg="white" borderRadius={14}>
              <Box position="relative">
                <Image
                  src="https://img2.tradewheel.com/uploads/images/products/9/9/cheap-x-pression-synthetic-hair-braids-jumbo-x-pression-braids-heat-resistant-nigeria-hot-sale-crochet-braids1-0332269001591075345.jpg.webp"
                  alt="dfdf"
                  width="100%"
                  borderRadius={"18px"}
                  />
          <VStack
                  align={"start"}
                  position="absolute"
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
                      Hair Conditioner
                    </Heading>{" "}
                  </Stack>
                  <Button
                    backgroundColor={"#D1B000"}
                    color={"white"}
                    size={"md"}
                    style={{ minWidth: "150px" }}
                    _hover={{ bg: "#EDF2F7", color: "#D1B000" }}
                    borderRadius={"full"}

                  >
                    View More
                  </Button>{" "}
                </VStack>
              </Box>{" "}
            </GridItem>
            <GridItem colSpan={2} bg="white" borderRadius={14}>
              <Box position="relative">
                <Image
                  src="https://legends-barber.com/wp-content/uploads/2022/10/Beard-Care-1024x1024-1.jpg"
                  alt="dfdf"
                  width="100%"
                  borderRadius={"18px"}
                  />
          <VStack
                  align={"start"}
                  position="absolute"
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
                      Hair Conditioner
                    </Heading>{" "}
                  </Stack>
                  <Button
                    backgroundColor={"#D1B000"}
                    color={"white"}
                    size={"md"}
                    style={{ minWidth: "150px" }}
                    _hover={{ bg: "#EDF2F7", color: "#D1B000" }}
                    borderRadius={"full"}

                  >
                    View More
                  </Button>{" "}
                </VStack>              </Box>{" "}
            </GridItem>
            <GridItem colSpan={2} bg="white" borderRadius={14}>
              <Box position="relative">
                <Image
                  src="https://www.carolsdaughter.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-cd-master-catalog/default/dw6c6794d5/ProductImages/Goddess-Strength/Carols-Daughter-Goddess-Strength-Conditioner-820645006621-1.jpg?sw=395&sh=395&sm=cut&sfrm=jpg&q=70"
                  alt="dfdf"
                  width="100%"
                  borderRadius={"18px"}
                  />
                <VStack
                  align={"start"}
                  position="absolute"
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
                      Hair Conditioner
                    </Heading>{" "}
                  </Stack>
                  <Button
                    backgroundColor={"#D1B000"}
                    color={"white"}
                    size={"md"}
                    style={{ minWidth: "150px" }}
                    _hover={{ bg: "#EDF2F7", color: "#D1B000" }}
                    borderRadius={"full"}

                  >
                    View More
                  </Button>{" "}
                </VStack>
              </Box>{" "}
            </GridItem>
            <GridItem colSpan={2} bg="white" borderRadius={14}>
              <Box position="relative">
                <Image
                  src="https://www.carolsdaughter.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-cd-master-catalog/default/dw58f5f6b6/ProductImages/Wash-Day/Wash-Day-Little-Mermaid/Little_Mermaid_PDP_Little_Mermaid_WDD_COND_061_Main_1000x1000_R4.jpg?sw=395&sh=395&sm=cut&sfrm=jpg&q=70"
                  alt="dfdf"
                  width="100%"
                  borderRadius={"18px"}
                  />

                <VStack
                  align={"start"}
                  position="absolute"
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
                      Hair Conditioner
                    </Heading>{" "}
                  </Stack>
                  <Button
                    backgroundColor={"#D1B000"}
                    color={"white"}
                    size={"md"}
                    style={{ minWidth: "150px" }}
                    _hover={{ bg: "#EDF2F7", color: "#D1B000" }}
                    borderRadius={"full"}

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

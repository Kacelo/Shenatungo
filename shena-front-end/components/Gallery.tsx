import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  Container,
  VStack,
} from "@chakra-ui/react";
import { size } from "lodash";

interface GalleryProps {
  images: { src: string; alt: string; caption: string; price: string }[];
  introText: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, introText }) => {
  const columnLayout = useBreakpointValue({
    base: "1fr",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
  });

  return (
    <Box p={4} marginTop={"20"} textAlign={"center"}>
      <Heading
        fontSize={useBreakpointValue({ base: "2xl", md: "4xl" })}
        fontWeight={"bold"}
        padding={5}
      >
        {introText}{" "}
      </Heading>
      <Container maxW={"5xl"}>
        <Grid templateColumns={columnLayout} gap={3} > 
          {images.map((image, index) => (
            <GridItem key={index} margin={"auto"}>
              <Box position="relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width="100%"
                  borderRadius={"14px"}
                />

                {image.caption.length > 1 ? (
                  // <Text
                  //   position="absolute"
                  //   bottom={0}
                  //   left={0}
                  //   right={0}
                  //   px={2}
                  //   py={1}
                  //   bg="blackAlpha.700"
                  //   color="white"
                  //   fontSize="sm"
                  //   fontWeight="bold"
                  //   textAlign="center"
                  // >
                  //   {image.caption}
                  // </Text>
                  <VStack
                    align={"start"}
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    px={2}
                    py={1}
                    fontWeight="bold"
                    bg="blackAlpha.500"
                    color="white"
                    borderRadius={"0 0 14px 14px"}
                  >
                    {" "}
                    <Heading fontWeight={600} fontSize={"xl"}>
                      {image.caption}{" "}
                    </Heading>{" "}
                    <Heading fontSize={"3xl"}>N$ {image.price} </Heading>{" "}
                  </VStack>
                ) : (
                  ""
                )}
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery;

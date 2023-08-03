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
  HeadingText: string;
  introText? : string;
}

const Gallery: React.FC<GalleryProps> = ({ images, HeadingText, introText }) => {
  const columnLayout = useBreakpointValue({
    base: "1fr",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
  });

  return (
    <Box p={4} marginTop={"20"} textAlign={"center"}>
      <Heading
        size={useBreakpointValue({ base: "xl", md: "2xl" })}
        fontWeight={"bold"}
        padding={5}
      >
        {HeadingText}{" "}
      </Heading>
      <Text color={"gray.500"} fontSize={"lg"} mb={10}>
        {" "}
       {introText}
      </Text>
      <Container maxW={"5xl"}>
        <Grid templateColumns={columnLayout} gap={3}>
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

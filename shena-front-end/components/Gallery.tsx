import React from 'react';
import { Box, Grid, GridItem, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { size } from 'lodash';

interface GalleryProps {
  images: { src: string; alt: string; caption: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const columnLayout = useBreakpointValue({ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' });

  return (
    <Box p={4} marginTop={'20'} textAlign={'center'}>
<Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} padding={5}>
GALLERY          </Heading>  
    <Grid templateColumns={columnLayout} gap={3}>
    {images.map((image, index) => (
        <GridItem key={index}>
          <Box position="relative">
            <Image src={image.src} alt={image.alt} width="100%" />
            <Text
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              px={2}
              py={1}
              bg="blackAlpha.700"
              color="white"
              fontSize="sm"
              fontWeight="bold"
              textAlign="center"
            >
              {image.caption}
            </Text>
          </Box>
        </GridItem>
      ))}
    </Grid>
    </Box>
  );
};

export default Gallery;

'use client';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
// import { BannerSlider } from './BannerSlider';

// bg = 'center / cover no-repeat url(/banner-img1.jpg)';

export const Banner = () => {
  return (
    <Box minH="600px">
      <Flex
        justify="center"
        align="center"
        gap="2"
        flexDir={{ base: 'column', lg: 'row' }}
        w={{ base: '100%', lg: '90%' }}
        mx="auto"
        p="2rem"
      >
        <Box w={{ base: '100%', lg: '50%' }}>
          <Heading
            size={{ base: 'xl', lg: '3xl' }}
            lineHeight="4rem"
            color="brand.primary"
          >
            Beauty <br /> is our duty.
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} py="1rem" maxW="600px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            autem voluptatem iure illo optio obcaecati accusantium fugiat
            dolores tenetur
          </Text>
          <Link href="/products">
            <Button
              borderRadius="50px"
              minW="10rem"
              bgColor="brand.primary"
              color="white"
              _hover={{ bgColor: 'brand.primaryDark' }}
            >
              Shop Now
            </Button>
          </Link>
        </Box>
        <Box w={{ base: '100%', lg: '50%' }}>
          <Box
            my="2rem"
            w={{ base: '300px', lg: '600px' }}
            h={{ base: '300px', lg: '590px' }}
            bg="center / cover no-repeat url(images/products.png)" //we can resize to 500
          />
          {/* <BannerSlider /> */}
        </Box>
      </Flex>
    </Box>
  );
};

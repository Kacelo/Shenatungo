'use client';
import {
  Box,
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react';
import { SectionHeading } from '../../components/SectionHeading';
import { ICategory } from '../../app/model';
import Image from 'next/image';
import Link from 'next/link';
// import { Box, Grid, GridItem, Button, Link } from '@chakra-ui/react';

// interface TopCategoriesProps {
//   categories: ICategory[];
// }

export const TopCategories = () => {
  return (
    <Box w={{ base: '100%', lg: '90%' }} mx="auto" py="3rem" px="2rem">
      <SectionHeading title="Our Top Categories" />

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap="4"
      >
        <GridItem>
          <Box
            w='100%'
            h='100%'
            p="10px"
            bgImage="url('https://cdn.shopify.com/s/files/1/0273/5541/4580/products/TR-SoSilver-Cond-1L_large.png?v=1639505599')"
            bgSize="cover"
            bgPosition="center"
            borderRadius="md"
          />
        </GridItem>
        {/* Repeat for the other three images with GridItem and Box */}

      </Grid>

      <Link href="/categories">
        <Button
          bgColor="white"
          variant="outline"
          borderColor="brand.primary"
          color="brand.primary"
          rounded="full"
          my="1rem"
        >
          Browse All Categories
        </Button>
      </Link>
    </Box>
    // <Box w={{ base: '100%', lg: '90%' }} mx="auto" py="3rem" px="2rem">
    //   <SectionHeading title=" Our Top Categories" />

    //   <Grid
    //     templateColumns={{
    //       base: 'repeat(1, 1fr)',
    //       md: 'repeat(2, 1fr)',
    //       xl: 'repeat(4, 1fr)',
    //     }}
    //     gap="4"
    //   >
    //      <GridItem>
    //     <Box
    //       w='100%'
    //       h='100%'
    //       p="10px"
    //       bgImage="url('https://cdn.shopify.com/s/files/1/0273/5541/4580/products/TR-SoSilver-Cond-1L_large.png?v=1639505599')"
    //       bgSize="cover"
    //       bgPosition="center"
    //       borderRadius="md"
    //     />
    //   </GridItem>
    //   <GridItem>
    //     <Box
    //       w='100%'
    //       h='100%'
    //       p="10px"
    //       bgImage="url('https://cdn.shopify.com/s/files/1/0273/5541/4580/products/TR-SoSilver-Cond-1L_large.png?v=1639505599')"
    //       bgSize="cover"
    //       bgPosition="center"
    //       borderRadius="md"
    //     />
    //   </GridItem>
    //   <GridItem>
    //     <Box
    //       w='100%'
    //       h='100%'
    //       p="10px"
    //       bgImage="url('https://cdn.shopify.com/s/files/1/0273/5541/4580/products/TR-SoSilver-Cond-1L_large.png?v=1639505599')"
    //       bgSize="cover"
    //       bgPosition="center"
    //       borderRadius="md"
    //     />
    //   </GridItem>
    //   <GridItem>
    //     <Box
    //       w='100%'
    //       h='100%'
    //       p="10px"
    //       bgImage="url('https://cdn.shopify.com/s/files/1/0273/5541/4580/products/TR-SoSilver-Cond-1L_large.png?v=1639505599')"
    //       bgSize="cover"
    //       bgPosition="center"
    //       borderRadius="md"
    //       _hover={{ cursor: 'pointer', bgColor: 'gray.100' }}
    //     />
    //   </GridItem>
        
    //   </Grid>

    //   <Link href="/categories">
    //     <Button
    //       bgColor="white"
    //       variant="outline"
    //       borderColor="brand.primary"
    //       color="brand.primary"
    //       rounded="full"
    //       my="1rem"
    //     >
    //       Browse All Categories
    //     </Button>
    //   </Link>
    // </Box>
  );
};

interface TopCategoryCardProps {
  category: ICategory;
}

// const TopCategoryCard = ({ category }: TopCategoryCardProps) => (
//   <Link href={`/categories/${category.id}`}>
//     <Card
//       direction="row"
//       align="center"
//       overflow="hidden"
//       variant="outline"
//       w="100%"
//       p="10px"
//       h="100%"
//       _hover={{ cursor: 'pointer', bgColor: 'gray.100' }}
//     >

//       <CardBody>
//         <Heading size={{ base: 'sm', lg: 'md' }}>{category.name}</Heading>
//       </CardBody>
//     </Card>
//   </Link>
// );

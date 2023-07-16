'use client'
import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Image, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import { AddToCartButton } from './AddToCartButton'


export const ProductCard = () => {
  return (
    <Card w='xs' pos="relative" m="0.5rem">
  <CardBody>
    <Image
      src='https://cdn.shopify.com/s/files/1/0273/5541/4580/products/TR-SoSilver-Cond-1L_large.png?v=1639505599'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
        <Flex justify="space-between" align="center">
        <Heading size='md'>Matrix Hair Care</Heading>
        <Flex color="brand.primaryDark" fontWeight="bold">
            <Text fontSize="sm">N$</Text>
            <Text fontSize="lg">100</Text>
        </Flex>
        </Flex>
      <Text>
      Conditioner for smoothness. Mega Sleek System, with Shea Butter.
      </Text>
      <Divider />
      {/* <Rating/> */}
      <AddToCartButton/>
    </Stack>
  </CardBody>
</Card>
  )
}

// export default ProductCard
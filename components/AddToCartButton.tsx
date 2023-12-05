// 'use client';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';


export const AddToCartButton = () => {
  return (
    <Link href="/">
        <Button
          variant="outline"
          borderColor="brand.primary"
          color="brand.primary"
          borderRadius="50px"
          size="sm"
          w="150px"
        >
          Add to cart
     </Button>
    </Link>
    
  );
};

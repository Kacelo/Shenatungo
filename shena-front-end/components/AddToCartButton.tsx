import { Button } from '@chakra-ui/react'
import React from 'react'

export const AddToCartButton = () => {
  return (
    <Button
      variant="outline"
      borderColor="brand.primary"
      color="brand.primary"
      borderRadius="50px"
      size="sm"
      w="150px"
      //   onClick={() => addItem('cart', product, count)}
    >
      Buy Now
    </Button>
  );
}

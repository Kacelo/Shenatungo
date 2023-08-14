import { Flex } from '@chakra-ui/react'
import React from 'react'
import ReactStars from 'react-stars'
import StarRating from 'react-star-rating-component';
import { useState } from 'react';

export const Rating = () => {
    const [rating, setRating] = useState(0);
   const handleStarClick = (nextValue: React.SetStateAction<number>, prevValue: any, name: any) => {
      setRating(nextValue);
  return (
    <Flex>
        {/* <ReactStars/> */}
        {/* <StarRating/> */}
    </Flex>
  )
}
}
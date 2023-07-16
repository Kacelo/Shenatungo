'use client'
import React, { useState } from 'react';
// import Rating from 'react-star-rating-component';

import ReactStars from 'react-stars';
import { colors } from '../app/theme';
import { IRating } from '../app/model';
import { Flex, Text } from '@chakra-ui/react';

interface RatingProps {
  rating: IRating;
}
export const Rating = ({ rating }: RatingProps) => {
  return (
    <Flex align="center">
      <Rating
        count={5}
        value={rating?.rate}
        half={true}
        size={18}
        color2={colors.brand.primary}
        edit={false}
      />
      <Text fontSize="xs" mx="1">
        ({rating?.count})
      </Text>
    </Flex>
  );
};
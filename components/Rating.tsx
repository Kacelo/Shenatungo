import { useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Box, Icon } from '@chakra-ui/react';

interface StarRatingProps {
  totalStars?: number;
  initialRating?: number;
}

const StarRating = ({ totalStars = 5, initialRating = 0 }: StarRatingProps) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (star: number) => {
    setRating(star);
  };

  return (
    <Box>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <Icon
            key={index}
            as={rating >= starValue ? FaStar : hoverRating >= starValue ? FaStarHalfAlt : FaStar}
            color={rating >= starValue || hoverRating >= starValue ? 'yellow.400' : 'gray.300'}
            boxSize={{ base: 3, sm: 5, md: 4 }} // Adjust sizes for different screen sizes
            cursor="pointer"
            onClick={() => handleStarClick(starValue)}
            onMouseEnter={() => setHoverRating(starValue)}
            onMouseLeave={() => setHoverRating(0)}
          />
        );
      })}
    </Box>
  );
};

export default StarRating;

import { Heading } from '@chakra-ui/react';

interface SectionHeadingProps {
  title: string;
}

export const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <Heading
      size="md"
      my="1.5rem"
      textAlign="center" // Aligns the text to the center
      color="#cca300" // Changes the text color to gold
      w="100%" // Makes the text responsive by taking full width
    >
      {title}
    </Heading>
  );
};


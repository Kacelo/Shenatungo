import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Button,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

interface Hairstyle {
  id: number;
  title: string;
  text: string;
}

interface PriceListProps {
  hairstyles: Hairstyle[];
}

const PriceList: React.FC<PriceListProps> = ({ hairstyles }) => {
  return (
    <Box p={4} mt={10}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>PRICE LIST</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          {/* Add your description here */}
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {hairstyles.map((hairstyle) => (
            <HStack key={hairstyle.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{hairstyle.title}</Text>
                <Text color={'gray.600'}>Price: N$ {hairstyle.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
        <br></br>
        <Button
                bg={'yellow.400'}
                // rounded={'full'}
                color={'yellow.800'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                  Download Price List
              </Button>
      </Container>
    </Box>
  );
};

export default PriceList;
import React from "react";
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
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

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
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>PRICE LIST</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          {/* Add your description here */}
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {hairstyles.map((hairstyle) => (
            <HStack key={hairstyle.id} align={"top"}>
              <Box color={"#D1B000"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{hairstyle.title}</Text>
                <Text color={"gray.600"}>Price: N$ {hairstyle.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
        <br></br>
        <div style={{textAlign: "center"}}>
        <Button
          bg={"#D1B000"}
          // rounded={'full'}
          color={"white"}
          _hover={{ bg: "whiteAlpha.100" }}
        >
          Download Price List
        </Button>
        </div>
   
      </Container>
    </Box>
  );
};

export default PriceList;

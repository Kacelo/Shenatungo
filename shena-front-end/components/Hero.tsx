import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function WithBackgroundImage() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(/images/services/salon.jpeg)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '6xl' })}>
             Beauty is our duty
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'#D1B000'}
                // rounded={'full'}
                color={'white.700'}
                _hover={{ bg: 'yellow.400' }}>
                  
                  Book Now
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                // rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                Show me more
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }
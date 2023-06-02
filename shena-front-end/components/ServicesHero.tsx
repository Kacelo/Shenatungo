import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  interface HeroProps {
    imageUrl: string;
    introText: string;
  }
  
  const ServicesHero: React.FC<HeroProps> = ({ imageUrl, introText }) =>  {

    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          `url(${imageUrl})`
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
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
            {introText}
            </Text>
          </Stack>
        </VStack>
      </Flex>
    );
  }
  export default ServicesHero;
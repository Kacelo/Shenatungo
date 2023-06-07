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
  import { smythe } from './fonts';
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
            className={smythe.className}
              color={'#D1B000'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '9xl' })}>
            {introText}
            </Text>
          </Stack>
        </VStack>
      </Flex>
    );
  }
  export default ServicesHero;
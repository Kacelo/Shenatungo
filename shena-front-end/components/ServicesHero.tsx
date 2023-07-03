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
import Image from 'next/image';
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
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6} direction={['column', 'row']}>
            <Text
            className={smythe.className}
              color={'#D1B000'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '6xl', md: '9xl' })}>
            {introText}
            </Text>
            <div style={{margin: "0 auto"}}>
            <Image src="/images/barberSection/clippers.png" alt="Image" width={useBreakpointValue({ base: 100, md: 200 })} height={150} style={{opacity: "90%"}}/>

            </div>

          </Stack>
        </VStack>
      </Flex>
    );
  }
  export default ServicesHero;
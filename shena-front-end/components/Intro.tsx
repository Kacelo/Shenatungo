import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function Intro() {
    return (
      <Container maxW={'5xl'} py={12} marginTop={'20'}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'yellow.900'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('yellow.100', 'yellow.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Our Story
            </Text>
            <Heading>Beauty and Cosmetic Professionals</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Welcome to our vibrant world of beauty and cosmetics! At our exceptional website, we offer a delightful array of services and products designed to elevate your personal style and enhance your natural charm. Step into our enchanting realm and discover a harmonious fusion of artistry, expertise, and top-notch customer care.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              {/* <Feature
                // icon={
                // //   <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                // }
                // iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Barbers'}
              />
              <Feature
                // icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                // iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Hairstylists'}
              />
              <Feature
                // icon={
                //   <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                // }
                // iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Nail Technicians'}
              /> */}
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                '/images/barberSection/photo_5805664601931629385_y.jpg'}
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }
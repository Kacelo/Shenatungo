import React from 'react';
import {
  Box,
  Stack,
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Container,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FcAssistant, FcCollaboration, FcDonate } from 'react-icons/fc';

interface Employee {
  name: string;
  phoneNumber: string;
  socialMedia: string[];
  imageSrc: string;
}
interface Welcome {
    headingText: string;
    meetOur: string;
  }

interface ServicesProps {
  employees: Employee[];
  openingText: Welcome[];
}

const EmployeeCards: React.FC<ServicesProps> = ({ employees, openingText }) => {
  return (
    <Box p={4} marginTop={'20'}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
        {openingText.map((text)=>{
            return text.headingText
        })}
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
        {openingText.map((text)=>{
            return text.meetOur
        })}        
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={12} justify="center">
          {employees.map((employee, index) => (
            <Card
              key={index}
              heading={employee.name}
              phoneNumber={employee.phoneNumber}
              socialMedia={employee.socialMedia}
              imageSrc={employee.imageSrc}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

interface CardProps {
  heading: string;
  phoneNumber: string;
  socialMedia: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ heading, phoneNumber, socialMedia, imageSrc }) => {
    const openWhatsApp = () => {
        const message = 'Hello, I would like to book an appointment.';
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      };
      const openInsta = () =>{
        const url = socialMedia;
        window.open(url, '_blank');
      }
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="sm"
      overflow="hidden"
      p={5}
    >
      <Stack align={'start'} spacing={2}>
        <Flex
          w={236}
          h={236}
          align={'center'}
          justify={'center'}
          color={'white'}
          bg={useColorModeValue('white', 'gray.700')}
        >
            {imageSrc ? <Image src={imageSrc}  alt=''height={236}
              width={'-webkit-fill-available'}/> : ''} 
          {/* Place your employee image or icon here */}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            Phone: {phoneNumber}
          </Text>
          <div onClick={openInsta} style={{cursor: "pointer" }}>
             {socialMedia ? <Image src={'/images/instagram.png'}  alt=''height={23}
              width={23}/> : ''}
          </div>
        </Box>
        <Button  backgroundColor={'#ECC94B'} color={'white'} size={'sm'} onClick={openWhatsApp}>
          Book Appointment
        </Button>
      </Stack>
    </Box>
  );
};

export default EmployeeCards;

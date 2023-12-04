import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from 'next/link';

const OurCategory = () => {
  const data = [
    {
      imageUrl: '/images/make-up-studio/shop-products/Beauty Products.png',
      link: '/speed-delivery',
      text: "Beauty Products",
    },
    {
      imageUrl: '/images/Hair Products.png',
      link: '/secure-payment',
      text: "Hair Products",
    },
    {
      imageUrl: '/images/Nail Products.jpg',
      link: '/customer-service',
      text: "Nail Products",
    },
    {
      imageUrl: '/images/Grooming Products.jpg',
      link: '/quality-products',
      text: "Grooming Products",
    },
  ];

  return (
    <Box maxW="90%" mx="auto" my="5rem" px="1rem">
      <Text
        color="brand.grey300"
        fontWeight="600"
        fontSize={["2rem", "2rem", "2.5rem", "2.5rem"]}
        textAlign="center"
        mb="2rem"
      >
        Shop Our Top Categories
      </Text>

      <Flex
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="center"
        mx="auto"
      >
        {data.map((item, idx) => (
          <Link href={item.link} key={idx}>
            <div style={{ textDecoration: 'none' }}>
              <Flex
                color="brand.gold100"
                flexDir="column"
                alignItems="center"
                textAlign="center"
                cursor="pointer"
                mb="2rem"
                _hover={{ textDecoration: 'none' }}
              >
                <Image src={item.imageUrl} alt={item.text} boxSize={["80px", "100px"]} /> {/* Adjust the image size as needed */}
                <Text
                  color="brand.grey400"
                  fontSize={["1rem", "1.2rem", "1.5rem"]}
                  mt="1rem"
                >
                  {item.text}
                </Text>
              </Flex>
            </div>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export { OurCategory };

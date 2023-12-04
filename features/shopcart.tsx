import StarRating from '@/components/Rating';
import { Flex, Card, CardBody, Image, Stack, Heading, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

interface ProductProps {
  imageUrl: string;
  productName: string;
  price: number;
  description: string;
  initialRating: number;
}

const ProductCard: React.FC<ProductProps> = ({
  imageUrl,
  productName,
  price,
  description,
  initialRating,
}) => {
  return (
    
    <Card
      w={[
        "100%",
        "calc(50% - 1rem)",
        "calc(33.33% - 1rem)",
        "calc(25% - 1rem)",
      ]}
      m="0.5rem"
    >
      <CardBody>
        <Image
          src={imageUrl}
          alt={productName}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Flex justify="space-between" align="center">
            <Heading size="md">{productName}</Heading>
            <Flex color="brand.primaryDark" fontWeight="bold">
              <Text fontSize="sm">N$</Text>
              <Text fontSize="lg">{price}</Text>
            </Flex>
          </Flex>
          <Text>{description}</Text>
          <StarRating totalStars={5} initialRating={initialRating} />
          <Link href="/">
            <Button
              variant="outline"
              borderColor="brand.primary"
              color="brand.primary"
              borderRadius="50px"
              size="sm"
              w="150px"
            >
              Buy Product
            </Button>
          </Link>
        </Stack>
      </CardBody>
    </Card>
  );
};

const YourComponent = () => {
  const products = [
    {
      imageUrl: '/images/make-up-studio/shop-products/photo_5960611581563879168_y.jpg',
      productName: 'Loose Powder',
      price: 280,
      description: 'Smooth, natural coverage for a radiant, shine-free look.',
      initialRating: 4.5,
    },
    // Add other product details here
    {
        imageUrl: '/images/make-up-studio/shop-products/photo_5960611581563879167_y.jpg',
        productName: 'Highlight',
        price: 250,
        description: 'Glowing radiance for an illuminating, natural highlight.',
        initialRating: 4.5,
      },
      // Add other product details here
      {
        imageUrl: '/images/make-up-studio/shop-products/photo_5960611581563879164_y.jpg',
        productName: 'Blush',
        price: 250,
        description: 'Rosy cheeks for a vibrant, healthy-looking glow.',
        initialRating: 4.5,
      },
      // Add other product details here
      {
        imageUrl: '/images/make-up-studio/shop-products/photo_5960611581563879165_y.jpg',
        productName: 'Concealer',
        price: 320,
        description: 'Conceals imperfections, brightens, and evens skin tone flawlessly.',
        initialRating: 4.5,
      },
      // Add other product details here
      {
        imageUrl: '/images/make-up-studio/shop-products/photo_5960611581563879166_y.jpg',
        productName: 'Foundation',
        price: 380,
        description: 'Seamless coverage for a flawless, natural complexion all day',
        initialRating: 4.5,
      },
      // Add other product details here
  ];

  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="flex-start" p={4}>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </Flex>
  );
};

export default YourComponent;

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
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function MakeUpIntro() {
  return (
    <Container maxW={"5xl"} py={12} marginTop={"20"}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          {/* <Text
              textTransform={"uppercase"}
              color={"yellow.900"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("yellow.100", "yellow.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Our Story
            </Text> */}
          <Heading>Welcome to a world of endless possibilities</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Step into our enchanting makeup studio, where artistry meets
            imagination, and beauty becomes an exquisite masterpiece.With an
            unwavering passion for creativity and a keen eye for detail, our
            team curates looks that are as diverse as the individuals they
            grace. Join us on a journey of self-discovery and let the power of
            makeup elevate your inner radiance to new heights. Your canvas
            awaits, and your true beauty awaits to be revealed. Welcome to a
            world where dreams come to life, and beauty knows no boundaries.
            Welcome to our Makeup Studio.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
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
            rounded={"md"}
            alt={"feature image"}
            src={"/images/make-up-studio/photo_5924641007121578700_y.jpg"}
            objectFit={"cover"}
            style={{ borderRadius: "14px !important" }}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}

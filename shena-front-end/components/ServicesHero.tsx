import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
interface HeroProps {
  imageUrl: string;
  introText: string;
  headerImage: string;
}
import { smythe } from "./fonts";
import Image from "next/image";
const ServicesHero: React.FC<HeroProps> = ({
  imageUrl,
  introText,
  headerImage,
}) => {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={`url(${imageUrl})`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack
          maxW={"4xl"}
          align={"flex-start"}
          spacing={6}
          direction={useBreakpointValue({
            base: "column",
            md: "column",
            lg: "column",
          })}
        >
          <Text
            // className={smythe.className}
            color={"#D1B000"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl", lg: "8xl" })}
          >
            {introText}
          </Text>
          <div style={{ margin: "0 auto" }}>
            {/* <Image
              src={headerImage}
              alt="Image"
              width={useBreakpointValue({ base: 100, md: 200 })}
              height={150}
              style={{ width: "auto", height: "auto" }}
            /> */}
          </div>
        </Stack>
      </VStack>
    </Flex>
  );
};
export default ServicesHero;

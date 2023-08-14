import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BookingModal } from "./bookingModal";
const href = "#Services";
export default function WithBackgroundImage() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={"url(/images/services/salon.jpeg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "6xl" })}
          >
            Beauty is our duty
          </Text>

          <Stack direction={"row"}>
            <BookingModal />

            <Button
              as={"a"}
              bg={"whiteAlpha.300"}
              // rounded={'full'}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
              size={"md"}
              style={{ minWidth: "150px" }}
              borderRadius={"full"}
              href={href}
            >
              View Our Services
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Stack,
  Flex,
  Heading,
  Text,
  Image,
  ButtonGroup,
} from "@chakra-ui/react";

import { BookingCard } from "./ProductCard";
export function BookingModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <Button >Open Modal</Button> */}

      <Button
        bg={"#D1B000"}
        // rounded={'full'}
        color={"white"}
        _hover={{ bg: "yellow.400" }}
        size={"md"}
        style={{ minWidth: "150px" }}
        borderRadius={"full"}
        onClick={onOpen}
      >
        Book Now
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} />
             */}

            {/* <BookingCard /> */}
            <Image
              src="/images/barberSection/photo_5805664601931629398_y.jpg"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Flex justify="space-between" align="center">
                <Heading size="md">Selma Netumbu</Heading>
                
              </Flex>
              <Text color={"gray.500"} fontWeight={100}>
                Select one of the options below to talk to our receptionist
              </Text>
              {/* <Rating/> */}
            </Stack>
          </ModalBody>

          <ModalFooter margin={"auto"}>
            <ButtonGroup spacing="3">
              <Button
                size={"md"}
                mr={3}
                style={{ minWidth: "150px" }}
                borderRadius={"full"}
                fontWeight={600}
                color={"white"}
                bg={"#D1B000"}
                onClick={onClose}
              >
                Send Message
              </Button>
              <Button
                size={"md"}
                style={{ minWidth: "150px" }}
                borderRadius={"full"}
                fontWeight={600}
                color={"white"}
                bg={"#D1B000"}
              >
                Call Now
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

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
const telephoneNumber = +26461221463;
const openPhoneDialer = () => {
  const url = `tel:${encodeURIComponent(telephoneNumber)}`;
  window.location.href = url;
};
const openPhoneMessenger = () => {
  // Code to open the phone messenger (e.g., SMS, default messaging app, etc.)
  // This is a simplified example using a prompt to demonstrate the functionality
  const message = "Hello, I would like to book an appointment.";

  // Prompt the user to open the phone messenger with the specified number and message
  const confirmation = window.confirm(
    `Do you want to open the phone messenger and send a message to ${telephoneNumber}?`
  );

  if (confirmation) {
    // Code to open the phone messenger with the specified number and message
    window.open(`sms:${telephoneNumber}&body=${encodeURIComponent(message)}`);
  }
};
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
              src="/images/IMG_3100.JPG"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Flex justify="space-between" align="center">
                <Heading size="md">Selma Nitembu.</Heading>
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
                onClick={openPhoneMessenger}
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
                onClick={openPhoneDialer}
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

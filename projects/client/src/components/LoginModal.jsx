import React from "react";
import {
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { useRef } from "react";

export const LoginModal = () => {
  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure();

  return (
    <Box>
      <Button
        display={{ base: "none", md: "inline-flex" }}
        as={"a"}
        fontSize={"sm"}
        fontWeight={600}
        // variant={"link"}
        href={"#"}
        bg="#440F5D"
        color={"pink.300"}
        onClick={onOpenLogin}
      >
        Sign In
      </Button>
      <Modal isOpen={isOpenLogin} onClose={onCloseLogin}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In to your Account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={5}>
            <FormControl>
              <FormLabel mb={4}>Email</FormLabel>
              <Input placeholder="Enter your email" />
              <FormLabel mt={5}>Password</FormLabel>
              <Input placeholder="paswword" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button mr={5}>Login</Button>
            <Button onClick={onCloseLogin}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

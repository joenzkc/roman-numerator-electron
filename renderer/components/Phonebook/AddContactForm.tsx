import React from "react";
import { Contact } from "./PhonebookContainer";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface AddContactFormProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}
const AddContactForm: React.FC<AddContactFormProps> = ({
  isOpen,
  setIsOpen,
  setContacts,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Contact</ModalHeader>
        <ModalBody>
          <FormControl>
            <FormLabel>Name:</FormLabel>
            <Input placeholder="John Doe" id="name" type="text"></Input>
            <FormLabel>Number:</FormLabel>
            <Input placeholder="88888888" id="number" type="number"></Input>
            <FormLabel>Address:</FormLabel>
            <Input
              placeholder="Singapore, Singapore"
              id="address"
              type="text"
            ></Input>
            <Button type="submit"></Button>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddContactForm;

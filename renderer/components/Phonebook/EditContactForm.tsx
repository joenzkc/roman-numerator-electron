import React from "react";
import { Contact } from "./PhonebookContainer";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { useToast } from "@chakra-ui/toast";

interface EditContactForm {
  index: number;
  contacts: Contact[];
  contactsIndex: number;
  fullContacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const EditContactForm: React.FC<EditContactForm> = ({
  index,
  fullContacts,
  contactsIndex,
  contacts,
  setContacts,
  isOpen,
  setIsOpen,
}) => {
  const [name, setName] = React.useState(contacts[index].name);
  const [number, setNumber] = React.useState(contacts[index].number);
  const [address, setAddress] = React.useState(contacts[index].address);
  const [error, setError] = React.useState({
    name: "",
    number: "",
    address: "",
  });
  const toast = useToast({});
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name === contacts[index].name &&
      number === contacts[index].number &&
      address === contacts[index].address
    ) {
      setIsOpen(false);
      return;
    }
    let errorPresent = false;
    if (name === "") {
      setError({ ...error, name: "Name cannot be empty!" });
      errorPresent = true;
    } else {
      setError((prev) => ({ ...prev, name: "" }));
    }
    if (number === "") {
      setError((prev) => ({ ...prev, number: "Number cannot be empty!" }));
      errorPresent = true;
    } else {
      setError((prev) => ({ ...prev, number: "" }));
    }
    if (address === "") {
      errorPresent = true;
      setError((prev) => ({ ...prev, address: "Address cannot be empty!" }));
    } else {
      setError((prev) => ({ ...prev, address: "" }));
    }

    if (errorPresent) {
      return;
    }
    fullContacts[contactsIndex] = {
      name,
      number,
      address,
    };

    toast({
      title: "Contact edited.",
      description: "Contact has been edited successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    setContacts([...fullContacts].sort((a, b) => a.name.localeCompare(b.name)));
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>Edit Contact</ModalHeader>
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Name:</FormLabel>
              <Input
                placeholder="John Doe"
                value={name}
                id="name"
                type="text"
                required
                isInvalid={error.name !== ""}
                onChange={(e) => setName(e.target.value)}
              ></Input>
              {error.name !== "" && (
                <FormLabel color={"red"}>{error.name}</FormLabel>
              )}
              <FormLabel>Number:</FormLabel>
              <Input
                placeholder="88888888"
                id="number"
                type="number"
                required
                value={number}
                isInvalid={error.number !== ""}
                onChange={(e) => setNumber(e.target.value)}
              ></Input>
              {error.number !== "" && (
                <FormLabel color={"red"}>{error.number}</FormLabel>
              )}
              <FormLabel>Address:</FormLabel>
              <Input
                placeholder="Singapore, Singapore"
                id="address"
                type="text"
                value={address}
                required
                isInvalid={error.address !== ""}
                onChange={(e) => setAddress(e.target.value)}
              ></Input>
              {error.address !== "" && (
                <FormLabel color={"red"}>{error.address}</FormLabel>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme={"green"}
              onClick={handleSubmit}
              className="mt-4"
            >
              Edit Contact
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default EditContactForm;

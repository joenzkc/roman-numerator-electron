import React from "react";
import { Contact } from "./PhonebookContainer";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import { set } from "lodash";

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
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [error, setError] = React.useState({
    name: "",
    number: "",
    address: "",
  });
  const toast = useToast({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // const name = (event.target as HTMLFormElement).name.value;
    // const number = (event.target as HTMLFormElement).number.value;
    // const address = (event.target as HTMLFormElement).address.value;
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

    const newContact = {
      name,
      number,
      address,
    };

    toast({
      title: "Contact Added.",
      description: "Contact has been added successfully!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    setContacts((prev) =>
      [...prev, newContact].sort((a, b) => a.name.localeCompare(b.name))
    );
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Contact</ModalHeader>
        <ModalBody>
          <FormControl isRequired>
            <FormLabel>Name:</FormLabel>
            <Input
              placeholder="John Doe"
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
          <Button colorScheme={"green"} onClick={handleSubmit} className="mt-4">
            Add Contact
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddContactForm;

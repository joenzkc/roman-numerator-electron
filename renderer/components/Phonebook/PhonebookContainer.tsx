import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import AddContactForm from "./AddContactForm";

export interface Contact {
  name: string;
  number: string;
  address: string;
}

const PhonebookContainer = () => {
  const [contacts, setContacts] = React.useState<Contact[]>([]);
  const [showAddContact, setShowAddContact] = React.useState<boolean>(false);

  const onClickAdd = () => {
    setShowAddContact(true);
  };
  return (
    <Flex direction={"column"} overscroll={"auto"} maxH={"100vh"} w={600}>
      <Flex className="p-4 w-full justify-between items-center">
        <Heading fontSize={24}>Phonebook</Heading>
        <Flex className="space-x-3">
          <Button
            leftIcon={<AddIcon />}
            onClick={onClickAdd}
            colorScheme={"green"}
          >
            Add
          </Button>
          <Button leftIcon={<SearchIcon />} colorScheme={"facebook"}>
            Search
          </Button>
        </Flex>
        <AddContactForm
          isOpen={showAddContact}
          setIsOpen={setShowAddContact}
          setContacts={setContacts}
        />
      </Flex>
    </Flex>
  );
};

export default PhonebookContainer;

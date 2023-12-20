import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AddContactForm from "./AddContactForm";
import ContactsList from "./ContactsList";

export interface Contact {
  name: string;
  number: string;
  address: string;
}

export interface PhonebookContainerProps {
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}

const PhonebookContainer = ({ contacts, setContacts }) => {
  const [showAddContact, setShowAddContact] = React.useState<boolean>(false);

  const onClickAdd = () => {
    setShowAddContact(true);
  };

  useEffect(() => {
    contacts.sort((a, b) => a.name.localeCompare(b.name));
    console.log(contacts);
  }, [contacts]);
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
      <ContactsList contacts={contacts} setContacts={setContacts} />
    </Flex>
  );
};

export default PhonebookContainer;

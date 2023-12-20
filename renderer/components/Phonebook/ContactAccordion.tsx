import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { EditIcon } from "@chakra-ui/icons";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import EditContactForm from "./EditContactForm";

const ContactAccordion = ({
  fullContacts,
  contacts,
  setContacts,
  setShowEditContact,
  showEditContact,
}) => {
  const onClickEdit = () => {
    setShowEditContact(true);
  };

  return (
    <Accordion allowToggle>
      {contacts.map(({ contact, index }, i) => (
        <AccordionItem
          rounded={2}
          key={index}
          borderTop={i === 0 ? "none" : undefined}
          borderBottom={i === contacts.length - 1 ? "none" : undefined}
        >
          <AccordionButton className="flex space-x-4">
            <Avatar name={contact.name} />
            <Box as="span" flex="1" textAlign="left" className="font-bold">
              {contact.name}
            </Box>
          </AccordionButton>
          <AccordionPanel>
            <Flex justify={"space-between"}>
              <Stack className="pl-2 font-sans">
                <Text>Mobile: {contact.number}</Text>
                <Text>Address: {contact.address}</Text>
              </Stack>
              <Button
                leftIcon={<EditIcon />}
                onClick={onClickEdit}
                rounded="full"
              >
                Edit Contact
              </Button>
            </Flex>
          </AccordionPanel>
          <EditContactForm
            contacts={contacts.map((c) => c.contact)}
            index={i}
            fullContacts={fullContacts}
            contactsIndex={index}
            setContacts={setContacts}
            setIsOpen={setShowEditContact}
            isOpen={showEditContact}
          />
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ContactAccordion;

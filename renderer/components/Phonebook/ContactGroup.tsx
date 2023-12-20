import React from "react";
import { Contact } from "./PhonebookContainer";
import { Box, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { EditIcon } from "@chakra-ui/icons";
import EditContactForm from "./EditContactForm";
import ContactAccordion from "./ContactAccordion";

interface ContactGroupProps {
  fullContacts: Contact[];
  contacts: {
    contact: Contact;
    index: number;
  }[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
  letter: string;
}

const ContactGroup: React.FC<ContactGroupProps> = ({
  fullContacts,
  contacts,
  setContacts,
  letter,
}) => {
  const [showEditContact, setShowEditContact] = React.useState<boolean>(false);

  const onClickEdit = () => {
    setShowEditContact(true);
  };

  return (
    <Stack className="m-2 p-2">
      <Text>{letter}</Text>
      <Card rounded={20}>
        <CardBody padding={2}>
          <ContactAccordion
            fullContacts={fullContacts}
            contacts={contacts}
            setContacts={setContacts}
            setShowEditContact={setShowEditContact}
            showEditContact={showEditContact}
          />
          {/* <Accordion allowToggle>
            {contacts.map(({ contact, index }, i) => (
              <AccordionItem
                rounded={2}
                key={index}
                borderTop={i === 0 ? "none" : undefined}
                borderBottom={i === contacts.length - 1 ? "none" : undefined}
              >
                <AccordionButton className="flex space-x-4">
                  <Avatar name={contact.name} />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="font-bold"
                  >
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
                  contacts={contacts.map((contact) => contact.contact)}
                  index={i}
                  setContacts={setContacts}
                  setIsOpen={setShowEditContact}
                  isOpen={showEditContact}
                />
              </AccordionItem>
            ))}
          </Accordion> */}
        </CardBody>
      </Card>
    </Stack>
  );
};

export default ContactGroup;

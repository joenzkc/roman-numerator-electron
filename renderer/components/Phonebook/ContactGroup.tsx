import React from "react";
import { Contact } from "./PhonebookContainer";
import { Box, Divider, Heading, Stack, Text } from "@chakra-ui/layout";
import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Avatar } from "@chakra-ui/avatar";

interface ContactGroupProps {
  contacts: {
    contact: Contact;
    index: number;
  }[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
  letter: string;
}

const ContactGroup: React.FC<ContactGroupProps> = ({
  contacts,
  setContacts,
  letter,
}) => {
  return (
    <Stack className="m-2 p-2">
      <Text>{letter}</Text>
      <Card rounded={20}>
        <CardBody padding={2}>
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
                  <Stack className="pl-2 font-sans">
                    <Text>Mobile: {contact.number}</Text>
                    <Text>Address: {contact.address}</Text>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default ContactGroup;

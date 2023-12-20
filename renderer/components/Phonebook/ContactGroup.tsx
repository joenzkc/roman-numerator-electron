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
        </CardBody>
      </Card>
    </Stack>
  );
};

export default ContactGroup;

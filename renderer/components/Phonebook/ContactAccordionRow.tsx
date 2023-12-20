import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  AccordionButton,
  Text,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Flex,
  Stack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import DeleteContactDialog from "./DeleteContactDialog";
import EditContactForm from "./EditContactForm";
import { Contact } from "./PhonebookContainer";

interface ContactAccordionRowProps {
  contactIndex: {
    contact: Contact;
    index: number;
  };
  groupedContacts: { contact: Contact; index: number }[];
  fullContacts: Contact[];
  mapIndex: number;
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}

const ContactAccordionRow: React.FC<ContactAccordionRowProps> = ({
  setContacts,
  mapIndex,
  contactIndex,
  groupedContacts,
  fullContacts,
}) => {
  const { contact, index } = contactIndex;
  const [showDeleteAlert, setShowDeleteAlert] = React.useState<boolean>(false);
  const [showEditContact, setShowEditContact] = React.useState<boolean>(false);

  const onClickEdit = () => {
    setShowEditContact(true);
  };
  return (
    <AccordionItem
      rounded={2}
      key={index}
      borderTop={mapIndex === 0 ? "none" : undefined}
      borderBottom={
        mapIndex === groupedContacts.length - 1 ? "none" : undefined
      }
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
          <Flex className="space-x-2">
            <Button
              leftIcon={<EditIcon />}
              onClick={onClickEdit}
              rounded="full"
            >
              Edit Contact
            </Button>
            <Button
              rounded="full"
              colorScheme={"red"}
              leftIcon={<DeleteIcon />}
              onClick={() => setShowDeleteAlert(true)}
            >
              Delete
            </Button>
          </Flex>
        </Flex>
      </AccordionPanel>
      <DeleteContactDialog
        fullContacts={fullContacts}
        setContacts={setContacts}
        setIsOpen={setShowDeleteAlert}
        isOpen={showDeleteAlert}
        contactsIndex={index}
      />
      <EditContactForm
        contacts={groupedContacts.map((c) => c.contact)}
        index={mapIndex}
        fullContacts={fullContacts}
        contactsIndex={index}
        setContacts={setContacts}
        setIsOpen={setShowEditContact}
        isOpen={showEditContact}
      />
    </AccordionItem>
  );
};

export default ContactAccordionRow;

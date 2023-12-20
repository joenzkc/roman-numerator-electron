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
import { Input } from "@chakra-ui/input";
import Fuse, { FuseSearchOptions, IFuseOptions } from "fuse.js";
import ContactAccordion from "./ContactAccordion";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Avatar } from "@chakra-ui/avatar";
import { Text, Box, Flex, Stack } from "@chakra-ui/layout";
import { Card, CardBody } from "@chakra-ui/card";
import { Button } from "@chakra-ui/button";

interface SearchModalProps {
  contacts: Contact[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}

const SearchModal: React.FC<SearchModalProps> = ({
  contacts,
  isOpen,
  setIsOpen,
  setContacts,
}) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [result, setResult] = React.useState<Contact[]>([]);
  const [showEditForm, setShowEditForm] = React.useState<boolean>(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const options: IFuseOptions<Contact> = {
      includeScore: true,
      minMatchCharLength: 1,
      threshold: 0.3,
      keys: ["name", "number", "address"],
    };

    const fuse = new Fuse(contacts, options);

    const result = fuse.search(e.target.value);
    setResult(result.map((r) => r.item));
  };

  const handleClose = () => {
    setResult([]);
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Search</ModalHeader>
        <ModalBody>
          <Input
            placeholder="Search for a number, name or address"
            onChange={handleSearch}
          />
          {result.length > 0 && (
            <Card>
              <CardBody>
                <Accordion allowToggle className="w-full">
                  {result.map((contact, index) => (
                    <AccordionItem
                      rounded={2}
                      key={index}
                      borderTop={index === 0 ? "none" : undefined}
                      borderBottom={
                        index === result.length - 1 ? "none" : undefined
                      }
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
                        <AccordionPanel>
                          <Flex>
                            <Stack className="pl-2 font-sans">
                              <Text>Mobile: {contact.number}</Text>
                              <Text>Address: {contact.address}</Text>
                            </Stack>
                          </Flex>
                        </AccordionPanel>
                      </AccordionButton>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardBody>
            </Card>
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme={"red"} onClick={handleClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;

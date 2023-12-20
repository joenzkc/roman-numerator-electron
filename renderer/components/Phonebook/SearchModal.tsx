import React from "react";
import { Contact } from "./PhonebookContainer";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Input } from "@chakra-ui/input";
import Fuse, { FuseSearchOptions, IFuseOptions } from "fuse.js";

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

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Search</ModalHeader>
        <ModalBody>
          <Input placeholder="Search" onChange={handleSearch} />
          {result.map((contact) => (
            <div key={contact.name}>{contact.name}</div>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;

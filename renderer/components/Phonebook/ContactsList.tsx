import React from "react";
import { Contact } from "./PhonebookContainer";
import ContactGroup from "./ContactGroup";

interface ContactsListProps {
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}

const ContactsList: React.FC<ContactsListProps> = ({
  contacts,
  setContacts,
}) => {
  // group contacts by starting alphabet
  const groupedContacts = contacts.reduce((grouped, contact, index) => {
    const firstLetter = contact.name[0];
    if (!grouped[firstLetter]) {
      grouped[firstLetter] = [];
    }
    grouped[firstLetter].push({ contact, index });
    return grouped;
  }, {});

  console.log(groupedContacts);
  return (
    <div>
      {Object.keys(groupedContacts).map((letter) => (
        <ContactGroup
          key={letter}
          letter={letter}
          contacts={groupedContacts[letter]}
          setContacts={setContacts}
        />
      ))}
    </div>
  );
};

export default ContactsList;

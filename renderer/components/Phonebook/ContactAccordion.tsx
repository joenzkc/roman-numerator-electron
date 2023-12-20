import { Accordion } from "@chakra-ui/accordion";
import React from "react";
import ContactAccordionRow from "./ContactAccordionRow";

const ContactAccordion = ({ fullContacts, contacts, setContacts }) => {
  return (
    <Accordion allowToggle>
      {contacts.map(({ contact, index }, i) => (
        <ContactAccordionRow
          setContacts={setContacts}
          mapIndex={i}
          contactIndex={{ contact, index }}
          groupedContacts={contacts}
          fullContacts={fullContacts}
        />
      ))}
    </Accordion>
  );
};

export default ContactAccordion;

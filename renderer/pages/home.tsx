import React, { useEffect } from "react";
import Head from "next/head";
import RomanToNumeralConverterContainer from "../components/RomanToNumeral/RomanToNumeralConverterContainer";
import HomeContainer from "../components/HomeContainer";
import PhonebookContainer from "../components/Phonebook/PhonebookContainer";
import { DummyContacts } from "../utils/DummyContacts";

export default function HomePage() {
  const [app, setApp] = React.useState("romanToNumeral");

  const [contacts, setContacts] = React.useState(DummyContacts);

  useEffect(() => {
    contacts.sort((a, b) => a.name.localeCompare(b.name));
    console.log(contacts);
  }, [contacts]);

  return (
    <React.Fragment>
      <Head>
        <title>Roman to Numeral Converter</title>
      </Head>
      <HomeContainer setApp={setApp}>
        {app === "romanToNumeral" && <RomanToNumeralConverterContainer />}
        {app === "phoneBook" && (
          <PhonebookContainer contacts={contacts} setContacts={setContacts} />
        )}
      </HomeContainer>
    </React.Fragment>
  );
}

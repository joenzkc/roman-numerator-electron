import React from "react";
import Head from "next/head";
import RomanToNumeralConverterContainer from "../components/RomanToNumeral/RomanToNumeralConverterContainer";
import HomeContainer from "../components/HomeContainer";
import PhonebookContainer from "../components/Phonebook/PhonebookContainer";

export default function HomePage() {
  const [app, setApp] = React.useState("romanToNumeral");

  return (
    <React.Fragment>
      <Head>
        <title>Roman to Numeral Converter</title>
      </Head>
      <HomeContainer setApp={setApp}>
        {app === "romanToNumeral" && <RomanToNumeralConverterContainer />}
        {app === "phoneBook" && <PhonebookContainer />}
      </HomeContainer>
    </React.Fragment>
  );
}

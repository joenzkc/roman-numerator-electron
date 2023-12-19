import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Converter from "../components/RomanToNumeral/Converter";
import AppSelector from "../components/AppSelector";
import RomanToNumeralConverterContainer from "../components/RomanToNumeral/RomanToNumeralConverterContainer";
import HomeContainer from "../components/RomanToNumeral/HomeContainer";

export default function HomePage() {
  const [app, setApp] = React.useState("romanToNumeral");

  return (
    <React.Fragment>
      <Head>
        <title>Roman to Numeral Converter</title>
      </Head>
      <HomeContainer setApp={setApp}>
        {app === "romanToNumeral" && <RomanToNumeralConverterContainer />}
      </HomeContainer>
    </React.Fragment>
  );
}

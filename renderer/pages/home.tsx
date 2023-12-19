import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import HomeContainer from "../components/HomeContainer";
import Header from "../components/Header";
import Converter from "../components/Converter";

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Roman to Numeral Converter</title>
      </Head>
      <HomeContainer>
        <Header />
        <Converter />
      </HomeContainer>
    </React.Fragment>
  );
}

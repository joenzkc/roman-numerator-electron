import { Center, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import Converter from "./Converter";
import Tooltip from "./Tooltip";

const RomanToNumeralConverterContainer = () => {
  return (
    <Flex w="full" h="full" alignContent={"center"} justifyContent={"center"}>
      <Center>
        <Stack>
          <Header />
          <Converter />
          <Tooltip />
        </Stack>
      </Center>
    </Flex>
  );
};

export default RomanToNumeralConverterContainer;

import { Flex, Input } from "@chakra-ui/react";
import React from "react";
import { checkValidRomanNumeral } from "../utils/Utils";

const Converter = () => {
  const [romanValue, setRomanValue] = React.useState("");
  const [numericValue, setNumericValue] = React.useState("");
  const [romanError, setRomanError] = React.useState(false);
  const [numericError, setNumericError] = React.useState(false);

  const handleChangeRoman = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setRomanValue(event.target.value);
    if (checkValidRomanNumeral(event.target.value)) {
      setRomanError(false);
    } else {
      setRomanError(true);
    }
  };

  const handleChangeNumeric = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setNumericValue(event.target.value);
    // check if valid number
    if (!isNaN(Number(event.target.value))) {
      setNumericError(false);
    } else {
      setNumericError(true);
    }
  };

  return (
    <Flex className=" space-x-2 p-2">
      <Input
        placeholder="Roman"
        errorBorderColor="red.300"
        onChange={(e) => handleChangeRoman(e)}
        value={romanValue}
        focusBorderColor={romanError ? "red.300" : "blue.300"}
        isInvalid={romanError}
      ></Input>
      <Input
        placeholder="Number"
        errorBorderColor="red.300"
        value={numericValue}
        onChange={handleChangeNumeric}
        focusBorderColor={numericError ? "red.300" : "blue.300"}
        isInvalid={numericError}
      ></Input>
    </Flex>
  );
};

export default Converter;

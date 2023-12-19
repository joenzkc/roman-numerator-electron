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

  return (
    <Flex>
      <Input
        placeholder="Roman"
        errorBorderColor="red.300"
        onChange={(e) => handleChangeRoman(e)}
        focusBorderColor={romanError ? "red.300" : "blue.300"}
        isInvalid={romanError}
      ></Input>
      <Input placeholder="Numerics"></Input>
    </Flex>
  );
};

export default Converter;

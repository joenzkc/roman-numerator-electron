import { Button, Flex, Input, Stack } from "@chakra-ui/react";
import React from "react";
import { checkValidRomanNumeral } from "../utils/Utils";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const Converter = () => {
  const [romanValue, setRomanValue] = React.useState("");
  const [numericValue, setNumericValue] = React.useState("");
  const [romanError, setRomanError] = React.useState(false);
  const [numericError, setNumericError] = React.useState(false);
  // if roman to numeric, converting from roman to numeric
  // else, converting from numeric to roman
  const [romanToNumeric, setRomanToNumeric] = React.useState(true);

  const handleChangeRoman = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setRomanValue(event.target.value);
    if (checkValidRomanNumeral(event.target.value)) {
      setRomanError(false);
    } else {
      setRomanError(true);
    }
  };

  const onClickArrow = () => {
    // toggle the romanToNumeric
    if (numericError || romanError) {
      setRomanValue("");
      setNumericValue("");
      setNumericError(false);
      setRomanError(false);
    }

    setRomanToNumeric(!romanToNumeric);
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
    <Stack h={40}>
      <Flex className=" space-x-2 p-2">
        <Input
          placeholder="Roman"
          errorBorderColor="red.300"
          onChange={(e) => handleChangeRoman(e)}
          value={romanValue}
          focusBorderColor={romanError ? "red.300" : "blue.300"}
          isInvalid={romanError}
          isDisabled={!romanToNumeric}
        ></Input>
        <Button onClick={onClickArrow}>
          {romanToNumeric ? <ArrowRightIcon /> : <ArrowLeftIcon />}
        </Button>
        <Input
          placeholder="Number"
          errorBorderColor="red.300"
          value={numericValue}
          onChange={handleChangeNumeric}
          focusBorderColor={numericError ? "red.300" : "blue.300"}
          isInvalid={numericError}
          isDisabled={romanToNumeric}
        ></Input>
      </Flex>
      {romanError && <Flex color="red.300">Invalid Roman Numeral</Flex>}
      {numericError && <Flex color="red.300">Invalid Number</Flex>}
    </Stack>
  );
};

export default Converter;

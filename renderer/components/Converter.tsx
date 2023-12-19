import {
  Button,
  Flex,
  Highlight,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import {
  checkValidRomanNumeral,
  convertNumberToRomanNumeral,
  convertRomanNumeralToNumber,
} from "../utils/Utils";
import { ArrowLeftIcon, ArrowRightIcon, CopyIcon } from "@chakra-ui/icons";

const Converter = () => {
  const [romanValue, setRomanValue] = React.useState("");
  const [numericValue, setNumericValue] = React.useState("");
  const [romanError, setRomanError] = React.useState(false);
  const [numericError, setNumericError] = React.useState(false);
  // if roman to numeric, converting from roman to numeric
  // else, converting from numeric to roman
  const [romanToNumeric, setRomanToNumeric] = React.useState(true);
  const toast = useToast();

  const handleChangeRoman = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRomanValue(event.target.value);
    if (checkValidRomanNumeral(event.target.value)) {
      setRomanError(false);
      const number = convertRomanNumeralToNumber(event.target.value);
      if (number == 0) {
        setNumericValue("");
      } else {
        setNumericValue(number.toString());
      }
    } else {
      setNumericValue("");
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
    setNumericValue(event.target.value);
    // check if valid number
    if (
      event.target.value == "" ||
      (!isNaN(Number(event.target.value)) &&
        Number(event.target.value) > 0 &&
        Number(event.target.value) < 4000)
    ) {
      setNumericError(false);
      setRomanValue(
        convertNumberToRomanNumeral(parseInt(event.target.value)).toString()
      );
    } else {
      setRomanValue("");
      setNumericError(true);
    }
  };

  const onClickCopy = () => {
    // copy to clipboard
    if (romanToNumeric) {
      navigator.clipboard.writeText(numericValue);
    } else {
      navigator.clipboard.writeText(romanValue);
    }

    toast({
      title: `Copied ${
        romanToNumeric ? "numeric value" : "roman value"
      } to clipboard!`,
      duration: 1500,
      status: "success",
    });
  };

  return (
    <Stack className="p-2" h={40} maxW={500}>
      <Flex className=" space-x-2 py-2">
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
      {romanToNumeric && numericValue && (
        <Flex color="blue.300" className=" justify-between items-center">
          <Text>
            Numeric Value:{" "}
            <Highlight
              query={numericValue}
              styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
            >
              {numericValue}
            </Highlight>{" "}
          </Text>
          <Button className="bg-white" onClick={onClickCopy}>
            <CopyIcon />
          </Button>
        </Flex>
      )}
      {!romanToNumeric && romanValue && (
        <Flex color="blue.300" className=" justify-between items-center">
          <Text>
            Roman Numeral:{" "}
            <Highlight
              query={romanValue}
              styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
            >
              {romanValue}
            </Highlight>
          </Text>
          <Button className="bg-white" onClick={onClickCopy}>
            <CopyIcon />
          </Button>
        </Flex>
      )}
      {romanError && <Flex color="red.300">Invalid Roman Numeral</Flex>}
      {numericError && <Flex color="red.300">Invalid Number</Flex>}
    </Stack>
  );
};

export default Converter;

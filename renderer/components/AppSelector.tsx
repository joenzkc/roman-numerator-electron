import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

interface AppSelectorProps {
  setApp: React.Dispatch<React.SetStateAction<string>>;
}

const AppSelector: React.FC<AppSelectorProps> = ({ setApp }) => {
  const onClick = (app: string) => {
    setApp(app);
  };

  return (
    <Box w={"100%"} bg={"lightblue"}>
      <Button onClick={() => setApp("romanToNumeral")} bg={"transparent"}>
        Roman Numeral Converter
      </Button>
      <Button onClick={() => setApp("phoneBook")} bg={"transparent"}>
        Phonebook
      </Button>
    </Box>
    // <Menu>
    //   <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    //     Change App
    //   </MenuButton>
    //   <MenuList>
    //     <MenuItem>Home</MenuItem>
    //     <MenuItem>Roman Numeral Converter</MenuItem>
    //   </MenuList>
    // </Menu>
  );
};

export default AppSelector;

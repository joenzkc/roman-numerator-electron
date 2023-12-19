import { Center, Container, Flex, Stack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import AppSelector from "../AppSelector";

interface ContainerProps {
  setApp: React.Dispatch<React.SetStateAction<string>>;
  children: ReactNode;
}
const HomeContainer: React.FC<ContainerProps> = ({ children, setApp }) => {
  return (
    <Flex direction={"column"} w="100vw" h="100vh">
      <AppSelector setApp={setApp} />
      <Flex flex={1} alignContent={"center"} justifyContent={"center"}>
        {children}
      </Flex>
    </Flex>
  );
};

export default HomeContainer;

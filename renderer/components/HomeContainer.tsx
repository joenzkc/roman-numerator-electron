import { Center, Container, Flex, Stack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}
const HomeContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Flex w="100vw" h="100vh" alignContent={"center"} justifyContent={"center"}>
      <Center>
        <Stack>{children}</Stack>
      </Center>
    </Flex>
  );
};

export default HomeContainer;

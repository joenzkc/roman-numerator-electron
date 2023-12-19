import {
  Button,
  Highlight,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Tooltip = () => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <>
      <Button onClick={() => setShowTooltip(!showTooltip)}>
        What are Roman Numerals?
      </Button>
      <Modal isOpen={showTooltip} onClose={() => setShowTooltip(false)}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>What are Roman Numerals?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                Roman numerals are a numeral system that uses letters from the
                Latin alphabet to represent numeric values. The basic symbols
                include I, V, X, L, C, D, and M, which correspond to 1, 5, 10,
                50, 100, 500, and 1000, respectively. Roman numerals follow
                specific rules for combining and subtracting symbols to
                represent different numbers. However, the system has
                limitations, such as the absence of a symbol for zero and
                complexity for large numbers. Roman numerals are now primarily
                used in limited contexts, such as formal designations, clock
                faces, and decorative applications.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => setShowTooltip(false)}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default Tooltip;

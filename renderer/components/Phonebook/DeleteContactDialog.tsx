import { Button } from "@chakra-ui/button";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import React from "react";

const DeleteContactDialog = ({
  fullContacts,
  contactsIndex,
  isOpen,
  setIsOpen,
  setContacts,
}) => {
  const name = fullContacts[contactsIndex]
    ? fullContacts[contactsIndex].name
    : "";
  const cancelRef = React.useRef();
  const onClickDelete = () => {
    const newContacts = fullContacts.filter(
      (_, index) => index !== contactsIndex
    );
    setContacts(newContacts);
    setIsOpen(false);
  };

  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>Delete Contact</AlertDialogHeader>
          <AlertDialogBody>
            Are you sure you want to delete {name}?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button rounded="full" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              rounded="full"
              colorScheme="red"
              onClick={onClickDelete}
              ml={3}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default DeleteContactDialog;

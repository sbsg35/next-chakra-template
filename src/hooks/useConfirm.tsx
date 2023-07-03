import { ReactNode, useRef, useState } from "react";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

interface ConfirmProps {
  title: string;
  message: ReactNode;
}

export const useConfirm = ({ title, message }: ConfirmProps) => {
  const { onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  const [promise, setPromise] = useState<any>(null);

  const confirm = () =>
    new Promise((resolve, reject) => {
      setPromise({ resolve });
    });

  const handleClose = () => {
    setPromise(null);
    onClose();
  };

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const ConfirmationDialog = () => {
    return (
      <AlertDialog isOpen={promise !== null} leastDestructiveRef={cancelRef} onClose={handleCancel}>
        <AlertDialogOverlay onClick={handleCancel}>
          <AlertDialogContent>
            <AlertDialogCloseButton onClick={handleCancel} />
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {title}
            </AlertDialogHeader>

            <AlertDialogBody>
              <Text>{message}</Text>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={handleCancel} variant="ghost">
                Cancel
              </Button>
              <Button onClick={handleConfirm} ml={3} variant="outline">
                Confirm
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  };

  return { ConfirmationDialog, confirm };
};

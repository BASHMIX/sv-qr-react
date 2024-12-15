import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

import "./App.css";
import { isValidUrl } from "@src/isValidUrl";

function App() {
  const [url, setUrl] = useState<string | null>(null);

  return (
    <>
      <VStack spacing={8} align={"center"} justify={"center"} p={8}>
        <Text fontSize={"20px"} fontWeight={"bold"}>
          QR Code Scanner
        </Text>
        <Box
          width={"100%"}
          maxWidth={"500px"}
          border={"4px solid"}
          borderRadius={"lg"}
          borderColor={!!url ? "green.500" : "gray.300"}
        >
          <QrReader
            onResult={(result, error) => {
              if (result) {
                const text = result.getText().trim();
                if (isValidUrl(text)) {
                  setUrl(text);
                }
              }
              if (error) {
                console.error(error);
              }
            }}
            constraints={{ facingMode: "environment", aspectRatio: 1 }}
          />
        </Box>
      </VStack>
      <Modal isCentered={true} size={"md"} isOpen={!!url} onClose={() => setUrl(null)}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent borderTopRadius={"lg"}>
          <ModalHeader>Valet Jo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {url && <iframe title={"bashmix"} src={url} width={"100%"} height={"600px"} allow="*"></iframe>}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;

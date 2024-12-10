import { Box, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

import "./App.css";
import { isValidUrl } from "@src/isValidUrl";

function App() {
  const [url, setUrl] = useState<string | null>(null);

  return (
    <VStack>
      <Text fontSize={"20px"} fontWeight={"bold"}>
        QR Code Scanner
      </Text>
      <Box
        width={"500px"}
        height={"500px"}
        border={"4px solid"}
        borderRadius={"lg"}
        borderColor={!!url ? "green.500" : "gray.300"}
        onClick={() => {
          if (url) {
            window.open(
              url,
              "sv-qr-react",
              "width=400,height=600,toolbar=no,menubar=no,scrollbars=no,resizable=no",
            );
            setUrl(null);
          }
        }}
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
          constraints={{ facingMode: "environment" }}
        />
      </Box>
    </VStack>
  );
}

export default App;

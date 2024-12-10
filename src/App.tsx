import { Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";

import "./App.css";
import { isValidUrl } from "@src/isValidUrl";

function App() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    if (data && isValidUrl(data)) {
      window.open(
        data,
        "sv-qr-react",
        "width=400,height=600,toolbar=no,menubar=no,scrollbars=no,resizable=no",
      );
    }
  }, [data]);

  return (
    <VStack>
      <Text fontSize={"20px"} fontWeight={"bold"}>
        QR Code Scanner
      </Text>
      <QrReader
        onResult={(result, error) => {
          if (result) {
            setData(result.getText());
          }

          if (error) {
            console.error(error);
          }
        }}
        containerStyle={{ width: "500px", height: "500px" }}
        constraints={{ facingMode: "environment" }}
      />
    </VStack>
  );
}

export default App;

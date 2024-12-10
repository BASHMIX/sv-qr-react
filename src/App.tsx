import { VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

import "./App.css";

function App() {
  const [data, setData] = useState<string | null>(null);
  return (
    <VStack>
      <h1>QR Code Scanner</h1>
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
      <p>Scanned Data: {data}</p>
    </VStack>
  );
}

export default App;

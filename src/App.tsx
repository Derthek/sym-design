import React from "react";
import Text from "text";

function App() {
  return (
    <main>
      <div>
        <Text fontSize="big">This is big text</Text>
        <Text fontSize="medium">This is medium text</Text>
        <Text fontSize="standard">This is standard text</Text>
        <Text fontSize="small">This is small text</Text>
      </div>
      <div>
        <Text fontWeight="bold"> This has weight bold</Text>
        <Text fontWeight="medium"> This has weight medium</Text>
        <Text fontWeight="standard"> This has weight standard</Text>
        <Text fontWeight="light"> This has weight light</Text>
      </div>
    </main>
  );
}

export default App;

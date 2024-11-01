import React from "react";
import ReactDOM from "react-dom";
import { WiredButton, WiredCard, WiredInput } from "wired-elements-react";

import "./styles.css";
import { Text } from "@chakra-ui/react";

function App() {
  let textInput = React.createRef();

  function handleClick() {
    window.alert(`Hello ${textInput.current.value}!`);
  }

  return (
    <main>
			<WiredCard elevation={5}>
				<Text>heyyyy</Text>
        <h1>wired-elements demo hiii</h1>
        <section>
          <WiredInput placeholder="your name" ref={textInput} />
          <WiredButton elevation={2} onClick={handleClick}>
            Submit
          </WiredButton>
        </section>
      </WiredCard>
    </main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

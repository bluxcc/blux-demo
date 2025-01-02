import { BluxProvider } from "blux";
import ConnectButton from "./ConnectButton";

import "../../blux/dist/index.esm.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BluxProvider
        config={{
          networkPassphrase: "Test SDF Network ; September 2015",
          appName: "my example app",
        }}
      >
        <ConnectButton />
      </BluxProvider>
    </div>
  );
}

export default App;

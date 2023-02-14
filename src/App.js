import logo from "./logo.svg";
import "./App.css";

import Socket from "./Socket";
import { useState } from "react";

function App() {
  const [isSocketShown, setIsSocketShown] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className={isSocketShown ? "App-logo-active" : "App-logo"}
          alt="logo"
          onClick={() => setIsSocketShown(!isSocketShown)}
        />

        {isSocketShown ? <Socket /> : <p>Socket is closed 🫠</p>}
      </header>
    </div>
  );
}

export default App;

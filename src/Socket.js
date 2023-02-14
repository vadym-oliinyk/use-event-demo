import { useState } from "react";
import { useWebSocket } from "./useWebSocket";

function Socket() {
  const [counter, setCounter] = useState(0);

  useWebSocket({
    url: "ws://localhost:8001",
    onClose: (send) => {
      send("LEAVE");
      // send(`LEAVE ${counter}`);
    },
  });

  return (
    <div className="Socket">
      <p>Socket is open 🥳</p>
      <button onClick={() => setCounter(counter + 1)}>
        You clicked {counter} times
      </button>
    </div>
  );
}

export default Socket;

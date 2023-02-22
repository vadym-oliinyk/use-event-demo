import { useState } from "react";
import { useWebSocket } from "./useWebSocket";
import { useEvent } from "./useEvent";

function Socket() {
  const [counter, setCounter] = useState(0);

  const onClose = useEvent((send) => {
    send(`LEAVE ${counter}`);
  });

  useWebSocket({
    url: "ws://localhost:8001",
    onClose,
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

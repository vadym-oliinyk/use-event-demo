import { useCallback, useState } from "react";
import { useWebSocket } from "./useWebSocket";

function Socket() {
  const [counter, setCounter] = useState(0);

  const onClose = useCallback(
    (send) => {
      send(`LEAVE ${counter}`);
    },
    [counter]
  );

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

import { useWebSocket } from "./useWebSocket";

function Socket() {
  useWebSocket({
    url: "ws://localhost:8001",
  });

  return <p>Socket is open 🥳</p>;
}

export default Socket;

import { useEffect, useState } from "react";

export function useWebSocket({ url }) {
  const [socket, setSocket] = useState();

  function handleClose() {
    socket?.close();
  }

  useEffect(() => {
    setSocket(new WebSocket(url));

    return handleClose;
  }, [url]);

  return socket;
}

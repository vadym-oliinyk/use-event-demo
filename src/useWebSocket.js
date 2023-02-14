import { useCallback, useEffect, useState } from "react";

export function useWebSocket({ url }) {
  const [socket, setSocket] = useState();

  const handleClose = useCallback(() => {
    socket?.close();
  }, [socket]);

  useEffect(() => {
    setSocket(new WebSocket(url));
  }, [url]);

  useEffect(() => {
    return handleClose;
  }, [handleClose]);

  return socket;
}

import { useCallback, useEffect, useState } from "react";

export function useWebSocket({ url, onClose }) {
  const [socket, setSocket] = useState();

  const handleClose = useCallback(() => {
    if (!socket) return;
    onClose((message) => socket.send(message));
    socket.close();
  }, [socket]);

  useEffect(() => {
    setSocket(new WebSocket(url));
  }, [url]);

  useEffect(() => {
    return handleClose;
  }, [handleClose]);

  return socket;
}

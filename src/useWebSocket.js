import { useCallback, useEffect, useRef, useState } from "react";

export function useWebSocket({ url, onClose }) {
  const [socket, setSocket] = useState();

  const onCloseRef = useRef(onClose);

  const handleClose = useCallback(() => {
    if (!socket) return;
    onCloseRef.current((message) => socket.send(message));
    socket.close();
  }, [socket]);

  useEffect(() => {
    setSocket(new WebSocket(url));
  }, [url]);

  useEffect(() => {
    return handleClose;
  }, [handleClose]);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  return socket;
}

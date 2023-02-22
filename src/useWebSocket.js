import { useEffect, useState } from "react";

import { useEvent } from "./useEvent";

export function useWebSocket({ url, onClose }) {
  const [socket, setSocket] = useState();

  const handleClose = useEvent(() => {
    if (!socket) return;
    onClose((message) => socket.send(message));
    socket.close();
  });

  useEffect(() => {
    setSocket(new WebSocket(url));
  }, [url]);

  useEffect(() => {
    return handleClose;
  }, [handleClose]);

  return socket;
}

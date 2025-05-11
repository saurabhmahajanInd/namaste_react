import React, { useEffect, useState } from "react";

const useOnlineOfflineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    addEventListener("online", () => {
      setOnlineStatus(true);
    });

    addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineOfflineStatus;

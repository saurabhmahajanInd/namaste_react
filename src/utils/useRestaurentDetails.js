import React, { useEffect, useState } from "react";

const useRestaurentDetails = () => {
  const [restaurentData, setRestaurentData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/saurabhmahajanInd/mockdata/refs/heads/main/menu.json?" +
        new Date()
    );
    const result = await data.json();
    debugger;
    setRestaurentData(result.data);
  };

  return restaurentData;
};

export default useRestaurentDetails;

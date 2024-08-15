import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserData } from "./userData";

export const DataList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/users");
      setLoading(false);
      setData(response?.data);
    };
    getData();
  }, []);
  return <UserData data={data} loading={loading} />;
};

import { useEffect, useState } from "react";
import { url } from "../constants/url";

export const apiProducts = () => {
  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(url);
        const res = await response.json();
        setDataProducts(res);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return dataProducts; 
};

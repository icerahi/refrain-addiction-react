import { useEffect } from "react";
import { useState } from "react";

const useFetch = () => {
  const [services, SetServices] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => {
        SetServices(data)
        setIsLoading(false)
      })
      .catch((err)=>{})
     
  }, []);
  return {
    services,
    isLoading,
    setIsLoading,
  };
};

export default useFetch;

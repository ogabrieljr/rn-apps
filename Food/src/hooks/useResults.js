import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const ApiRequest = term => {
    yelp
      .get("/search", {
        params: {
          term,
          location: "rio",
          limit: 50,
        },
      })
      .then(res => setResults(res.data.businesses))
      .catch(err => setErrorMsg("Try again later"));
  };

  useEffect(() => {
    ApiRequest("pasta");
  }, []);

  return [results, errorMsg, ApiRequest];
};

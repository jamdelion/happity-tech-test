import React, { useEffect, useState } from "react";
import classData from "../classes.json";
import "./App.css";

const App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(classData.data);
  }, []);

  return (
    <div className="App">
      <h1>Classes in your area</h1>
      <p>{data?.[0].clientName}</p>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import sampleData from "../sampleData.json";
import "./App.css";

const App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(sampleData.data);
  }, []);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>{data?.[0].clientName}</p>
    </div>
  );
};

export default App;

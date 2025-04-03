import React, { useEffect, useState } from "react";
import classData from "../classes.json";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(classData.data);
  }, []);

  return (
    <div className="App">
      <h1>Classes in your area</h1>
      <div>
        {/* classes container */}
        {data.map(({ class_name }) => (
          <div>
            <h2 key={class_name}>{class_name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

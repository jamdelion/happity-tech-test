import React, { useEffect, useState } from "react";
import classData from "../classes.json";
import "./App.css";
import { ClassListing } from "./components/ClassListing";

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
        {data.map((classListing) => (
          <ClassListing
            key={classListing.class_name}
            classListing={classListing}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

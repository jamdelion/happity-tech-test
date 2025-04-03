import React, { useEffect, useState } from "react";
import classData from "../classes.json";
import { CategoryFilter } from "./components/CategoryFilter";
import { ClassListing } from "./components/ClassListing";

const App = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("All");

  const filterByCategory = (classListing) => {
    if (category === "All") return true;
    return classListing.category === category;
  };

  useEffect(() => {
    setData(classData.data);
  }, []);

  return (
    <div className="App">
      <h1>Classes in your area</h1>
      <CategoryFilter category={category} setCategory={setCategory} />
      <div>
        {/* classes container */}
        {data.filter(filterByCategory).map((classListing) => (
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

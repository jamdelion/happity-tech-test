import React from "react";

export const CategoryFilter = ({ category, setCategory }) => {
  const classCategories = [
    "All",
    "Sensory & Movement",
    "Music & Play",
    "Arts & Crafts",
    "Music & Movement",
    "Communication & Language",
    "Learning & Creativity",
  ];

  return (
    <div style={{ paddingTop: "1rem" }}>
      <label>
        Filter by category:{" "}
        <select
          value={category}
          name="selectedCategory"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          {classCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

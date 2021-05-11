import React, { useState } from "react";
import "./App.css";
import babyNamesData from "./babyNamesData.json";

function App() {
  //id: 0;  name: "Zahra";  sex: "f";
  const [searchName, setSearchName] = useState("");

  function sortNames(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  }

  function handleSearch(e) {
    e.preventDefault();
    setSearchName(e.target.value);
  }
  return (
    <div className="App">
      <input
        placeholder="Search name"
        type="text"
        value={searchName}
        onChange={handleSearch}
      />
      <div className="nameContainer">
        {babyNamesData
          .filter((obj) => {
            const re = new RegExp(searchName, "i");
            return re.test(obj.name);
          })
          ?.sort(sortNames)
          .map((obj) => {
            return (
              <span
                key={obj.id}
                className={obj.sex === "m" ? "boyStyle" : "girlStyle"}
              >
                {obj.name}
              </span>
            );
          })}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import babyNamesData from "./babyNamesData.json";
import ButtonRadio from "./component/ButtonRadio";


function App() {
  const [searchName, setSearchName] = useState("");
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [sex, setSex] = useState("all");

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
    setSex("all");
    setSearchName(e.target.value);
  }
  function handleOptionSex(e) {
    setSearchName("");
    setSex(e.currentTarget.value);
  }
  function handleAddFav(e) {
    const idOf = parseInt(e.target.getAttribute("id"));
    const newArr = favoriteIds.concat(idOf);
    setFavoriteIds(newArr);
  }
  function handleRemoveFav(e) {
    const idOf = parseInt(e.target.getAttribute("id"));
    const index = favoriteIds.indexOf(idOf);
    let newArr = [...favoriteIds];
    if (index > -1) {
      newArr.splice(index, 1);
    }
    setFavoriteIds(newArr);
  }
  return (
    <div className="App">
      <input
        placeholder="Search name"
        type="text"
        value={searchName}
        onChange={handleSearch}
      />
      <ButtonRadio setOption={handleOptionSex} option={sex} />
      <div className="nameContainer">
        <span className="tag">Favorites:</span>
        {babyNamesData
          .filter((obj) => {
            return favoriteIds.includes(obj.id);
          })
          ?.sort(sortNames)
          .map((obj) => {
            return (
              <span
                key={obj.id}
                id={obj.id}
                className={obj.sex === "m" ? "boyStyle" : "girlStyle"}
                onClick={handleRemoveFav}
              >
                {obj.name}
              </span>
            );
          })}
      </div>
      <hr className="solid" />
      <div className="nameContainer">
        {babyNamesData
          .filter((obj) => {
            const re = new RegExp(searchName, "i");
            const selectedSex =
              sex === "all" ? true : sex === obj.sex ? true : false;
            return (
              re.test(obj.name) && !favoriteIds.includes(obj.id) && selectedSex
            );
          })
          ?.sort(sortNames)
          .map((obj) => {
            return (
              <span
                key={obj.id}
                id={obj.id}
                className={obj.sex === "m" ? "boyStyle" : "girlStyle"}
                onClick={handleAddFav}
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

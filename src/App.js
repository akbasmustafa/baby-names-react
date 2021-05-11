import "./App.css";
import babyNamesData from "./babyNamesData.json";

function App() {
  //id: 0;  name: "Zahra";  sex: "f";

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
  return (
    <div className="App">
      {babyNamesData.sort(sortNames).map((obj) => {
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
  );
}

export default App;

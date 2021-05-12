import React from "react";
import { FaVenus, FaMars, FaVenusMars } from "react-icons/fa";

function ButtonRadio({ option, setOption }) {
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        name="gender"
        value="all"
        id="all"
        className="btn-check"
        onChange={setOption}
        checked={option === "all"}
      />
      <label className="btn btn-outline-primary" htmlFor="all">
        <FaVenusMars />
      </label>
      <input
        type="radio"
        name="gender"
        value="f"
        id="female"
        className="btn-check"
        onChange={setOption}
        checked={option === "female"}
      />
      <label className="btn btn-outline-primary" htmlFor="female">
        <FaVenus />
      </label>
      <input
        type="radio"
        name="gender"
        value="m"
        id="male"
        className="btn-check"
        onChange={setOption}
        checked={option === "male"}
      />
      <label className="btn btn-outline-primary" htmlFor="male">
        <FaMars />
      </label>
    </div>
  );
}

export default ButtonRadio;

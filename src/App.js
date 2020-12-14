import React, { useState } from "react";
import "./styles.css";
import locationsDB from "./places.js";

export default function App() {
  const locations = Object.keys(locationsDB);

  var [place, setPlace] = useState("North_India");

  function placeClickHandler(loc) {
    setPlace(loc);
  }

  return (
    <div className="App">
      <nav class="navigation">
        <div class="nav-brand">Food Recommendation</div>
      </nav>

      {locations.map(function (loc) {
        return (
          <button
            className="btns"
            onClick={() => placeClickHandler(loc)}
            key={loc}
          >
            {loc}
          </button>
        );
      })}

      <ul>
        {locationsDB[place].map((food) => (
          <div className="output-div" key={food.name}>
            <section className="outputFood">
              <div className="img-left">
                <img className="img" src={food.pic} />
              </div>
              <div className="text-right">
                <div className="food-text">{food.name}</div>
                <div className="desc-text">
                  <strong>Description: </strong>
                  {food.info}
                </div>
              </div>
            </section>
          </div>
        ))}
      </ul>

      <footer>
        <p> Bhanu Teja | 2020</p>
      </footer>
    </div>
  );
}

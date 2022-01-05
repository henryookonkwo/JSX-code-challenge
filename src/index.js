//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const img1 = "https://picsum.photos/200";
const img2 = "https://picsum.photos/200";

const randomNum = Math.floor(Math.random() * 200);
const img3 = "https://picsum.photos/id/" + randomNum + "/200";

//It should display a h1 heading.
ReactDOM.render(
  <div>
    <h1 className="heading">Beautiful pictures</h1>
    <div>
      <img alt="random-grayscale" src={img1 + "?grayscale"} /> <br />
      <img alt="random" src={img2} /> <br />
      <img alt="random" src={img3} />
    </div>
  </div>,
  document.getElementById("root")
);
//It should display an unordered list (bullet points).

//It should contain 3 list elements.

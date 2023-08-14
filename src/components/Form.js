import React from "react";
import "../App.css";
import cat from "../images/cat.jpeg"

function Form() {
  return (
    <div className="main">
      <div className="form-container">
        <div className="form--input-container">
          <input type="text" className="form--input" placeholder="top text"></input>
          <input type="text" className="form--input" placeholder="bottom text"></input>
        </div>
        <button type="submit" className="btn">
          Get a new meme image 🖼
        </button>
      <div className="img">
      <img src={cat} alt="meme" />
    </div>
    </div>

    </div>
  );
}

export default Form;

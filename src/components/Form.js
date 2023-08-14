import React from "react";
import "../App.css";

function Form() {
  return (
    <div className="main">
      <div className="form-container">
        <div className="form--input-container">
          <input type="text" className="form--input" placeholder="Shut up"></input>
          <input type="text" className="form--input" placeholder="take my"></input>
        </div>
        <button type="submit" className="btn">
          Get a new meme image 🖼
        </button>
      </div>
      <img src="" alt="meme" />
    </div>
  );
}

export default Form;

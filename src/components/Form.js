import React from "react";
import "../App.css";
import cat from "../images/cat.jpeg"
import Data from "../meme_generator_data";

function Form(props) {
function getImage(){
  // console.log(Data.data.memes[parseInt(Math.random()*100)].url);
  const memeArrays=Data.data.memes;
  const randomNumber=Math.floor(Math.random()* memeArrays.length);
  console.log(memeArrays[randomNumber].url);
}

  return (
    <div className="main">
      <div className="form-container">
          <div className="form--input-container">
              <input type="text" className="form--input" placeholder="top text"></input>
              <input type="text" className="form--input" placeholder="bottom text"></input>
          </div>
          <button type="submit" className="btn" onClick={getImage}>
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

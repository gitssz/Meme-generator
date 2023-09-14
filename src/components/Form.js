import React, {useState} from "react";
import "../App.css";
// import cat from "../images/cat.jpeg";
import Data from "../meme_generator_data";

function Form(props) {

  const memeData={
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"
  }
  
  const [meme,setMeme] =useState(memeData);

  const [allMeme,setAllMeme] = useState(Data);

  function getImage() {
    const memeArrays = allMeme.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArrays.length);
    const imgUrl = memeArrays[randomNumber].url;
    setMeme(
      (prevImage)=>({
        ...prevImage,
        randomImage:imgUrl
      })
    );
  }

function handleChange(event){
  const {name,value}= event.target;
    setMeme(prevData =>({
      ...prevData,
      [name]:value
    }))
}


  return (
    <div className="main">
      <div className="form-container">
        <div className="form--input-container">
          <input
            type="text"
            className="form--input"
            placeholder="top text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          ></input>

          <input
            type="text"
            className="form--input"
            placeholder="bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          ></input>
        
        </div>

        <button type="submit" className="btn" onClick={getImage}>
          Get a new meme image 🖼
        </button>
        
        <div className="meme">
          <img src={meme.randomImage} alt="meme" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>

      </div>
    </div>
  );
}

export default Form;
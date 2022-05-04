// IMPORT useState
import React, { useState } from "react";
import "./styles.css";
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
import imagesArr from "./imageData.js";

// USE useState TO CREATE  [bigImage, setBigImage]
export default function App() {
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
  const [bigImage, setBigImage] = useState(imagesArr[0].img);
  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  function handleClick(imgUrl) {
    // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
    setBigImage(imgUrl);
  }
  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
  let images = imagesArr.map((ele, idx) => (
    <img
      src={ele.img}
      alt={ele.city}
      onClick={() => handleClick(ele.img)}
      key={idx}
      className="thumb"
    />
  ));
  console.log(images);
  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        {/* RENDER THE IMAGES ARRAY  */}
      </div>
      {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
      <img src={bigImage} id="bigimage" alt="bigImage" />
    </div>
  );
}

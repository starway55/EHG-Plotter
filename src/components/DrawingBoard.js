import React, { useState } from "react";
import { generateColorMatrix } from '../services/imageService';
import Navbar from './nav';
import Image from './Image';
import './DrawingBoard.css';

const DrawingBoard = () => {

  const defaultColors = new Array(256 * 128).fill({});
  const defaultNoImage = true;
  const [colors, setColors] = useState(defaultColors);
  const [noImage, setNoImage] = useState(defaultNoImage); 
  // if no image, display a border for where the image is

  const steps = 32;

  const handleSubmit = () => {

    const colorMatrix = generateColorMatrix(steps);
    setColors(colorMatrix);
    setNoImage(false)
  };

  const reset = () => {

    setColors(defaultColors);
    setNoImage(defaultNoImage);
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container main-container">

        <div className="row">
          <div className="col-12">
            <h1>
              Welcome to the plotter
            </h1>
            <h2>
              This plotter generates an images with non-repetitive colors in each pixel
            </h2>
            <div className="instructionText section">
              Don't look too closely into it, it may hurt your eyes :)
            </div>
          </div>
        </div>

        <div className="row image-row">
          <div className="col-md-12">
            <div className="svgColumn">
              <div className={noImage ? "image-border" : "image-no-border"}>
                <Image colors={colors}></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="button-section">
              <button type="button" className="btn btn-primary button-inline" onClick={e => handleSubmit()}>Generate</button>
              <button type="button" className="btn btn-secondary button-inline" onClick={e => reset()}>Reset</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DrawingBoard;

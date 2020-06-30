import * as React from "react";

const Image = ( props ) => {

  return(

    <svg width="256" height="128">
      {props.colors.map((color, index) => {

        const rect = <rect key={index} style={color}></rect>
        return rect;
      })}
    </svg>

  )
}

export default Image;
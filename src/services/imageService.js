export const generateColorMatrix = (steps) => {

  const eachStep = 256 / steps;
  const styles = []
  const allColors = [];
  const width = 256;

  for( let i = 0; i < steps * steps * steps; i++ ){

    allColors.push(i);
  } // initiate an array of 256*128 length, as a placeholder for all images

  let x = 0; // pixel x position
  let y = 0; // pixel y position
  while( allColors.length > 0 ){

    const seed = Math.floor(Math.random() * allColors.length); // choose a random color from remaining colors
    const color = allColors[seed]; // fetch the random color
    allColors.splice(seed, 1); // remove the chosen color from all colors

    const red = color % 32;
    const remainder1 = Math.floor(color / 32);
    const green = remainder1 % 32;
    const remainder2 = Math.floor(remainder1 / 32);
    const blue = remainder2 % 32;

    const style = {
      x: x+"",
      y: y+"",
      width: "1",
      height: "1",
      "strokeWidth": "0",
      "fill": `rgb(${(red+1) * eachStep}, ${(green+1) * eachStep}, ${(blue+1) * eachStep})`
      // color arrays are 0 to 31, but we want colors from 8 to 256, so color must +1
    }
    styles.push(style);

    x++;
    if(x >= width){
      x = 0;
      y++;
    }
  }

  return styles;
}
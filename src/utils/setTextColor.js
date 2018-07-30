/* converts the RGB color space into YIQ and returns color text (black or white)
https://24ways.org/2010/calculating-color-contrast 
https://www.w3.org/TR/AERT/#color-contrast */

const setTextColor = bgColorHEX => {
  if (bgColorHEX.indexOf('#') === 0) {
    bgColorHEX = bgColorHEX.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (bgColorHEX.length === 3) {
    bgColorHEX = bgColorHEX[0] + bgColorHEX[0] + bgColorHEX[1] + bgColorHEX[1] + bgColorHEX[2] + bgColorHEX[2];
  }
  if (bgColorHEX.length !== 6) {
    throw new Error('Invalid HEX color.');
  }
  const r = parseInt(bgColorHEX.substr(0, 2), 16);
  const g = parseInt(bgColorHEX.substr(2, 2), 16);
  const b = parseInt(bgColorHEX.substr(4, 2), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000; //perceived brightness
  return (yiq >= 125) ? '#000000' : '#FFFFFF';
}

export default setTextColor
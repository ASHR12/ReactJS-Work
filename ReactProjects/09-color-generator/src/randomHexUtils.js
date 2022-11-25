const hexArray = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const randomHexColor = () => {
  let hexColor = "#";
  let genHexCode = [];
  for (let i = 0; i <= 5; i++) {
    const indexVal = Math.floor(Math.random() * hexArray.length);
    genHexCode.push(hexArray[indexVal]);
  }
  hexColor = hexColor.concat(genHexCode.join(""));
  return hexColor;
};

export default randomHexColor;

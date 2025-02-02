const COLOURS = [
    "#FFF0F5",
    "#F0FFF0",
    "#F0F8FF",
    "#FFFACD",
    "#E0FFFF",
    "#F5FFFA",
    "#FFF5EE",
    "#FFE4C4",
    "#FFFFE0",
    "#FFDAB9",
    "#FAFAD2",
  ];

const getRandomColor = (excludeColor?: string) => {
  const coloursArray = COLOURS.filter((color) => color !== excludeColor);
  const randomColor =
    coloursArray[Math.floor(Math.random() * coloursArray.length)];
  return randomColor;
};

export default getRandomColor;

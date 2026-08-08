// 1. Array containing valid Hexadecimal characters
const hex: readonly string[] = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "A", "B", "C", "D", "E", "F"
];

// 2. Select DOM elements
const btn = document.getElementById("btn") as HTMLButtonElement;
const color = document.querySelector(".color") as HTMLSpanElement;

// 3. Helper function to generate a random index for the hex array
function getRandomNumber(): number {
  return Math.floor(Math.random() * hex.length);
}

// 4. Event Listener to generate 6-character hex string
btn.addEventListener("click", (): void => {
  let hexColor: string = "#";

  // Loop 6 times to construct a valid #RRGGBB code
  for (let i: number = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
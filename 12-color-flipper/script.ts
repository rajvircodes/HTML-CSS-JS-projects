const colors: readonly string[] = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn") as HTMLButtonElement;
const color = document.querySelector(".color") as HTMLSpanElement;

function getRandomNumber():number {
  return Math.floor(Math.random() * colors.length);
}


btn.addEventListener("click", ():void =>{
  const randomNumber:number = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});


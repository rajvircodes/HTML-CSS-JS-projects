const btnEl = document.querySelector(".btn") as HTMLButtonElement;

btnEl.addEventListener( "mouseover", (event: MouseEvent):void=> {
  const x:number = event.pageX - btnEl.offsetLeft;
  const y:number = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});


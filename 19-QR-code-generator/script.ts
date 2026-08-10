// 1. Element Type Assertions
const imgBox = document.getElementById("imgBox") as HTMLDivElement;
const qrImage = document.getElementById("qrImage") as HTMLImageElement;
const qrText = document.getElementById("qrText") as HTMLInputElement;
const qrButton = document.getElementById("qrButton") as HTMLButtonElement;

// 2. Main Logic Function
function generateQR(): void {
  if (qrText.value.trim().length > 0) {
    // HTMLImageElement safely unlocks the .src property
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText.value)}`;
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout((): void => {
      qrText.classList.remove("error");
    }, 1000);
  }
}

// 3. Clean Event Listener
qrButton.addEventListener("click", generateQR);
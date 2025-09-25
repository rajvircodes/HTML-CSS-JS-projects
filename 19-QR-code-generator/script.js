let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.querySelector('input[type="text"]');
let qrButton = document.getElementById("qrButton");

function generateQR() {
    if(qrText.value.length > 0 ){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}

qrButton.addEventListener('click', generateQR);
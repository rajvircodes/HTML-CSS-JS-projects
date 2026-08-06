"use strict";
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const btnList = document.getElementById('buttons');
sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener("click", () => {
        stopSongs();
        const audio = document.getElementById(sound);
        audio?.play();
    });
    btnList.appendChild(btn);
});
function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        if (song) {
            song.pause();
            song.currentTime = 0;
        }
    });
}

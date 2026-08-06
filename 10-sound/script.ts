const sounds: readonly string[] = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const btnList = document.getElementById('buttons') as HTMLDivElement

sounds.forEach((sound:string):void => {
    const btn = document.createElement('button')as HTMLButtonElement;
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener("click", ():void => {
        stopSongs();    

       const audio =  document.getElementById(sound) as HTMLAudioElement;
       audio?.play()
    });
    btnList.appendChild(btn)
});

function stopSongs():void{
    sounds.forEach((sound:string):void => {
        const song = document.getElementById(sound) as HTMLAudioElement;
            if(song){
                song.pause();
                song.currentTime = 0;
            }
    });
}
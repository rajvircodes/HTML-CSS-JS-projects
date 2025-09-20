const mainEl = document.querySelector(".main");
const curssorEl = document.querySelector(".curssor");


mainEl.addEventListener("mousemove", function(dets){
    curssorEl.style.left = dets.x +"px";  
    curssorEl.style.top = dets.y +"px";  
    
})
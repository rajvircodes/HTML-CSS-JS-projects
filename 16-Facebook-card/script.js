const statusEl = document.querySelector("#status");
const addbtn = document.querySelector("#add_friend_btn");
const cont = document.querySelector(".container")
// You can add 
// const rmbtn = document.querySelector("#rm_friend_btn"); 



// addbtn.addEventListener("click",function(){
//     // console.log("clicked");
//     statusEl.innerHTML = "Friends";
//     statusEl.style.color = "green";
// });
// rmbtn.addEventListener("click",function(){
//     // console.log("clicked");
//     statusEl.innerHTML = "stranger";
//     statusEl.style.color = "red";
// });




let flag = 0;
addbtn.addEventListener("click", function(){
    if(flag === 0){
        statusEl.innerHTML = "Friends";
        statusEl.style.color = "green";
        addbtn.textContent = "Remove friend";
       
        setTimeout(  function(){
            cont.style.backgroundColor = "rgb(33, 179, 25)";
            cont.style.transition = "all 0.3s";
        },500);
        setTimeout( function(){
            cont.style.backgroundColor = "";
        },1000);
 
       
        flag = 1;
    }else {
        flag = 0;
        statusEl.innerHTML = "Stranger";
        statusEl.style.color = "red";
        addbtn.textContent = "Add Friend";
    }
})
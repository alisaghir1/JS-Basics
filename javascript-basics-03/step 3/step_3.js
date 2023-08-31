const div=document.querySelector("#text");
const colors=document.querySelectorAll(".color");

colors.forEach(color=>{
    color.addEventListener("click",()=>{
        if(color.classList.contains("green")){
            div.style.color="green";
        }else if (color.classList.contains("red")){
            div.style.color="red";
        }else{
            div.style.color="blue";

        }
    })
})
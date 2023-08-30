const button=document.querySelector("button");
const input=document.querySelectorAll("input");
let ans;

button.addEventListener("click",()=>{
    ans=confirm("Do you want to clear all fields? if yes press ok");
    if(ans===true){
        input.forEach(input=>{input.value=""});
    }
})
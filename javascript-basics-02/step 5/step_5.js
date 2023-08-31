const imgs=document.querySelectorAll("img");
let kill;
for(let img in imgs){

    imgs[img].addEventListener("mouseover",()=>{
        imgs[img].setAttribute("src",`images/image${+img+1}_2.jpg`);
    })
}
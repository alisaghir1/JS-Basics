const imgs=document.querySelectorAll("img");
let num;
for(let img in imgs){

    imgs[img].addEventListener("mouseover",()=>{
        imgs[img].setAttribute("src",`images/image${+img+1}_2.jpg`);
    })
    imgs[img].addEventListener("mouseout",()=>{
        imgs[img].setAttribute("src",`images/image${+img+1}.jpg`);
    })
}
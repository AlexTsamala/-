const header = document.getElementById("header");
let yCoordinate ;
let clicked = 0;

function getCoordinate (target){
    yCoordinate = target.y;
    header.style.marginTop = yCoordinate+'px'
    
}



header.addEventListener("mousedown", (event)=>{
    if(event.target===header){
        window.addEventListener("mousemove",getCoordinate);
        header.classList.add("addPointer");
    }
})

header.addEventListener("mouseup", (event)=>{
    window.removeEventListener("mousemove",getCoordinate)
    header.classList.remove("addPointer");
})



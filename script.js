const header = document.getElementById("header");
let yCoordinate ;
let clicked = 0;

function getCoordinate (target){
    yCoordinate = target.y;
    header.style.marginTop = yCoordinate+'px'
    
}



header.addEventListener("mousedown", (event)=>{
    if(event.target===header){
        window.addEventListener("mousemove",getCoordinate)
    }
})

header.addEventListener("mouseup", (event)=>{
    window.removeEventListener("mousemove",getCoordinate)
})



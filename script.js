const header = document.getElementById("header");
const scrollSection = document.getElementById("scrollSection")
let yCoordinate ;
let clicked = 0;

function getCoordinate (target){
    yCoordinate = target.y;
    scrollSection.style.marginTop = yCoordinate+'px'
}



scrollSection.addEventListener("mousedown", (event)=>{
    
        window.addEventListener("mousemove",getCoordinate);
        
    
})

scrollSection.addEventListener("mouseup", (event)=>{
    window.removeEventListener("mousemove",getCoordinate)
    
})



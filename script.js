const header = document.getElementById("header");
const scrollSection = document.getElementById("scrollSection")
const body = document.getElementById("body")
const textSection = document.getElementById("textSection")
const screenSize = document.getElementById("main-window").scrollHeight

 

function getCoordinate (target){
    let yCoordinate = target.y;
    if(yCoordinate<=screenSize-header.offsetHeight-5&&yCoordinate>=0){
        scrollSection.style.marginTop = yCoordinate+'px';
        let paragraphWidth =screenSize-30-yCoordinate-header.offsetHeight;
        textSection.style.height = (paragraphWidth)+"px";
        console.log(yCoordinate<=screenSize-header.offsetHeight-5&&yCoordinate>=0)
    }
    
   
}

scrollSection.addEventListener("mousedown", (event)=>{
    window.addEventListener("mousemove",getCoordinate);
})

scrollSection.addEventListener("mouseup", (event)=>{
    window.removeEventListener("mousemove",getCoordinate)
})


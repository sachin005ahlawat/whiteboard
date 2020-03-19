const socket = io.connect("http://localhost:3000");
const board = document.querySelector(".board");
board.height = window.innerHeight;
board.width = window.innerWidth;
// canvasRenderingContext2d=> tool
const ctx = board.getContext("2d");
// ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
// ctx.fillStyle = "red";
// // initialX,initialY,finalX,finalY
// ctx.fillRect(0, 0, window.innerWidth / 2, window.innerHeight / 2);
// ctx.strokeStyle = "green";
// ctx.lineWidth = 10;
// ctx.strokeRect(0, 0, window.innerWidth / 2, window.innerHeight / 2);
ctx.strokeStyle="blue";
ctx.imageSmoothingEnabled=true
// ctx.lineWidth=2;

// // 0,0
// ctx.beginPath();
// ctx.moveTo(50,150);
// ctx.lineTo(100,150);
// ctx.moveTo(160,200);
// ctx.lineTo(200,200);
// ctx.closePath();
// ctx.stroke();
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    board.width = window.innerWidth;
    board.height = window.innerHeight;
    
    // Redraw everything after resizing the window
    redraw(); 
}







function handleColorChange(color){
    ctx.strokeStyle=color;
}

const input=document.querySelector("#pen-size");
 input.addEventListener("change",function(){
     ctx.lineWidth=input.value;
 })
 const rub=document.querySelector("#ers-size");
 rub.addEventListener("change",function(){
     ctx.lineWidth=rub.value;
 })
 let Activetool="pencil";
 const penciloptions=document.querySelector(".pencil");
 const eraseroptions=document.querySelector(".eraser");

function handleTool(tool){
    if(tool=="pencil"){
        if(Activetool=="pencil"){
            //Show options
            penciloptions.classList.add("show");
        }
        else{
            Activetool="pencil";
            ctx.globalCompositeOperation="source-over";
            //remove other options
            eraseroptions.classList.remove("show");
            ctx.strokeStyle="blue";
        }
    }
   else if(tool=="eraser"){
    if(Activetool=="eraser"){
        //Show options
        eraseroptions.classList.add("show");
    }
    else{
        ctx.globalCompositeOperation="destination-out";
        Activetool="eraser";
        //remove other options
        penciloptions.classList.remove("show");
        // ctx.strokeStyle="white";
    }
   }
   else if(tool=="notes"){
       createSticky();
   }

}
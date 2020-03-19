let isMouseDown = false;
var undoStack=[];
var redoStack=[];
board.addEventListener("mousedown", function (e) {
    // const client=require("socket.io-client");
    // const socket=client.connect("http://localhost:3000");
    ctx.beginPath();
    let x=e.clientX;
    let y=e.clientY-board.getBoundingClientRect().y;
    ctx.moveTo(x,y);
    let point={
        x:x,
        y:y,
        color:ctx.strokeStyle,
        width:ctx.lineWidth,
        type:"start"
    }
    undoStack.push(point);
    isMouseDown = true;
    socket.emit("mymousedown",point);
})

board.addEventListener("mousemove", function (e) {
    if (isMouseDown == true) {
        // console.log(ctx);
        let x=e.clientX;
        let y=e.clientY-board.getBoundingClientRect().y;
        ctx.lineTo(x,y);
        ctx.stroke();
        let point={
            x:x,
            y:y,
            color:ctx.strokeStyle,
            width:ctx.lineWidth,
            type:"end"
        }
        undoStack.push(point);
        socket.emit("mumousemove",point);
    }

})
board.addEventListener("mouseup", function (e) {
    isMouseDown = false;
    // ctx.closePath();
    socket.emit("mymouseup");
})

const undo=document.getElementById("undo");
let interval=null;
undo.addEventListener("mousedown",function(e){
    let myfn=function(){
       redoStack.push(undoStack.pop());
        redraw();
    }
    interval=setInterval(function(){
        myfn();
    },50);
})
undo.addEventListener("mouseup",function(){
    // internal=null
    clearInterval(interval);
})
const redo=document.getElementById("redo");
redo.addEventListener("mousedown",function(e){
    let myfn=function(){
        undoStack.push(redoStack.pop());
         redraw();
     }
     interval=setInterval(function(){
         myfn();
     },50);
})
redo.addEventListener("mouseup",function(){
    // internal=null
    clearInterval(interval);
})

function redraw(){
    ctx.clearRect(0,0,board.height,board.width);
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    for(var i=0;i<undoStack.length;i++){
        if(undoStack[i].type=="start"){
            ctx.lineWidth=undoStack[i].width;
            ctx.strokeStyle=undoStack[i].color;
            ctx.beginPath();
            ctx.moveTo(undoStack[i].x,undoStack[i].y);
            
        }
        else if(undoStack[i].type=="end"){
            ctx.lineWidth=undoStack[i].width;
            ctx.strokeStyle=undoStack[i].color;
            ctx.lineTo(undoStack[i].x,undoStack[i].y);
            ctx.stroke();
        }
    }
}

const zoomIn=document.getElementById("zoomin");
const zoomOut=document.getElementById("zoomout")

zoomIn.addEventListener("click",function(e){
    ctx.scale(1.2,1.2); // if something is drawn on x,y coordinate now they will be doubled along x and y-axis
    ctx.translate(-70,-30);
    redraw();
})

zoomOut.addEventListener("click",function(e){
    ctx.scale(0.95,0.95);
    ctx.translate(30,10);
    redraw();
})



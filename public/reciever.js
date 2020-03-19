// let isemittedMouse=false;
socket.on("mymousedown",function(point){
    // isemittedMouse=true;
    ctx.beginPath();
     x=point.x;
     y=point.y-board.getBoundingClientRect().y;
    ctx.moveTo(x,y);
    // let point={
    //     x:x,
    //     y:y,
    //     color:color,
    //     width:width,
    //     type:"start"
    // }
    // undoStack.push(point);
    // isMouseDown = true;
})
socket.on("mymousemove",function(point){
    // if (isemittedMouse == true) {
        // console.log(ctx);
        let x=point.x;
        let y=point.y-board.getBoundingClientRect().y;
        ctx.lineTo(x,y);
        ctx.stroke();
        // let point={
        //     x:x,
        //     y:y,
        //     color:color,
        //     width:width,
        //     type:"end"
        // }
        // undoStack.push(point);
    // }
})
// socket.on("mymouseup",function(point){
//     isemittedMouse = false;
// })
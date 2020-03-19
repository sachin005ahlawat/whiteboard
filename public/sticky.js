let parent;
let stickyvar;
function createSticky(){
    const body = document.querySelector("body");

const StickyPad = document.createElement("div");
const navbar = document.createElement("div");
const writingPad = document.createElement("div");
const minmax=document.createElement("div");
const cross=document.createElement("div");
const textArea=document.createElement("textarea");

StickyPad.setAttribute("class", "sticky-pad")
navbar.setAttribute("class", "navbar")
writingPad.setAttribute("class", "writingPad")
minmax.setAttribute("class","colors");
cross.setAttribute("class","colors");
minmax.classList.add("minmax");
cross.classList.add("cross");
textArea.setAttribute("class","textarea");

StickyPad.appendChild(navbar);
StickyPad.appendChild(writingPad);
navbar.appendChild(minmax);
navbar.appendChild(cross);
writingPad.appendChild(textArea);
body.appendChild(StickyPad);

cross.addEventListener("click",function(e){
    StickyPad.remove();
})
let flag=true;
minmax.addEventListener("click",function(){
    if(flag){
        writingPad.classList.add("hidden");
    }
    else{
        writingPad.classList.remove("hidden");
    }
    flag=!flag;
})

    parent=navbar;
    stickyvar=StickyPad;
    addListners();
}

function addListners(){
    let isDown=false;
    let initialX;
    let initialY;
    parent.addEventListener("mousedown",function(e){
        isDown=true;
        initial=e.clientX;
        initialY=e.clientY;

    });
    parent.addEventListener("mousemove",function(e){
        if(!isDown)
            return;
        let finalX=e.clientX;
        let finalY=e.clientY;
        let diffX=finalX-initialX;
        let diffY=finalY-initialY;

        const {x,y}=stickyvar.getBoundingClientRect();
        stickyvar.style.top=y+diffY+"px";
        stickyvar.style.left=x+diffX+"px";

        initialX=finalX;
        initialY=finalY;
    });
    parent.addEventListener("mouseleave",function(e){
        isDown=false;
    })
}
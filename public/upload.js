// image
const imagePicker=document.getElementById("photo");
//input
const imageupload=document.querySelector(".image-upload");

imagePicker.addEventListener("click",function(e){
    imageupload.click();
})
imageupload.addEventListener("change",function(e){
    const img=document.createElement("img");
    const imgData=imageupload.files[0];
    img.src=URL.createObjectURL(imgData);   // creareObjectURL =>  creats data to URL
    img.height=400;
    img.width=400;
    const body=document.querySelector("body");
    body.appendChild(img);

    img.onload=function(){
        URL.revokeObjectURL(img.src);
    }
})
const img=document.querySelector(".tool-img");
img.addEventListener("click",function(e){   
})


 

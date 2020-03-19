const download=document.getElementById("download");
download.addEventListener("click",function(){
    const url=board.toDataURL("image/jpg");    // coverts the data of canvas or whatever on the screen into a URL
    const anchor=document.createElement("a");  //creats a anchor tag
    anchor.download="fileName.jpg";  //sets the filename
    anchor.href=url;  //added the link in href
    anchor.click();   //clicking on that link 
    anchor.remove();  // removing that link
}) 
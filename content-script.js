let src = chrome.runtime.getURL("images/testImage.jpeg")
let replaceImages = () => {
    let images = document.getElementsByTagName("IMG");
    for(let i = 0; i < images.length; i++){
        images[i].src = src       
    }
}

document.onDOMContentLoaded = replaceImages();

window.addEventListener("scroll", ()=>{
    //add background script?
    console.log("hello")
    setTimeout(replaceImages, 500);
})
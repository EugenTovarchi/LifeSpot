let slideImages = [];

function addImageToSlide(){
    const someText = "TEST!";
    const parentOfSlide = document.getElementById("slide");
    parentOfSlide.innerHTML = `<div><p>${someText}</p></div>`;
}
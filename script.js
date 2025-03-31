var box = document.querySelector("#box")
var btn = document.querySelector("#button")
// var image = document.querySelector("#image")
btn.addEventListener("click", function(){
    const newImgSrc = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    box.style.backgroundImage = `url(${newImgSrc})`
    location.reload();
})
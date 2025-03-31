var h = document.querySelector("#box h4")
var btn = document.querySelector("button")
 var clutter = 0
btn.addEventListener("click",function(){
     if(clutter === 0){
    h.innerHTML = 'request sending...'
    h.style.color = 'gold'
    btn.innerHTML = 'Remove friend'
    setTimeout(function(){
        h.innerHTML = 'friend'
        h.style.color = 'green'
        clutter = 1
    },2000)
     }else{
        h.innerHTML = 'Removing...'
        btn.innerHTML = 'Add friend'
        h.style.color = 'red'
        setTimeout(function(){
           h.innerHTML = 'Stranger'
        },2000)
        clutter = 0
     }    
     
})
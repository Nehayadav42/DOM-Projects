var btns= document.querySelectorAll("button")
var body= document.querySelector("body")

btns.forEach(function(elem){
    elem.addEventListener('click', function(){
        console.log(elem.innerHTML);
        body.style.backgroundColor= elem.innerHTML
        body.style.color= elem.innerHTML
        elem.style.color= elem.innerHTML
    })
    
    
})
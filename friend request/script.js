var main = document.querySelector('.main');
var h1 = document.querySelector('h1');
var btn = document.querySelector('button');
var box = document.querySelector('.box');

    btn.addEventListener('click', function() {
        box.innerHTML= "Request Sending...";
        btn.innerHTML= "Adding...";
        h1.innerHTML= "Wait for some seconds.."
        box.style.backgroundColor= "pink";
        h1.style.color= "purple";
        box.style.color= "brown";
        box.style.fontSize= "40px";
        box.innerHTML= "FRIENDS ";
        btn.innerHTML= "Remove friend";
        h1.innerHTML= "We are friends now ";
        

    btn.addEventListener('click', function(){
            box.innerHTML= "Stranger"
            btn.innerHTML= "Add as a friend"
            h1.innerHTML= "Will you be my friend?"
        })
   
});
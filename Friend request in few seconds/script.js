var main = document.querySelector('.main');
var h1 = document.querySelector('h1');
var btn = document.querySelector('button');
var box = document.querySelector('.box');

btn.addEventListener('click', function() {
     box.innerHTML= "Request Sending...🤔";
    btn.innerHTML= "Adding...";
    h1.innerHTML= "Wait for some seconds..🙂"
    box.style.backgroundColor= "pink";
    h1.style.color= "purple";
    box.style.color= "brown";
    box.style.fontSize= "40px";
    main.style.backgroundImage= "url(https://www.shutterstock.com/image-photo/wait-word-on-wooden-cubes-260nw-2314471909.jpg)"

    setTimeout(function(){
        box.innerHTML= "FRIENDS 🤩💖";
        btn.innerHTML= "Remove friend";
        main.style.backgroundImage = "url(https://images.unsplash.com/photo-1517867065801-e20f409696b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
        h1.innerHTML= "We are friends now 🤗💕";
        h1.style.color= "black";
        box.style.color= "purple";
        box.style.backgroundColor= "black";
        btn.style.backgroundColor= "black";
        btn.style.color= "pink";
    }, 2000);
   
});

var teams = ['RCB💖', 'MI💙', 'CSK💛', 'GT😻', 'RR💗', 'LSG🤗', 'PBKS😍', 'SRH🧡', 'KKR💜', 'DC😊'];


var btn = document.querySelector('button');
var box = document.querySelector('.box');

btn.addEventListener('click', function() {
    var num = Math.floor(Math.random() * teams.length);
    box.innerHTML= teams[num]; 

    
    btn.style.color = "yellow";
    box.style.color= "black";
    box.style.fontSize = "40px";
    box.style.backgroundColor = "red";
    btn.style.backgroundColor = "black";
});
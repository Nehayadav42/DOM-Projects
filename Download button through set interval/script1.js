var btn= document.querySelector("button");
var h1= document.querySelector("h1");
var growth= document.querySelector("#growth");
var h2= document.querySelector("h2");
grow=0;

var num2= Math.floor(Math.random()*100);


btn.addEventListener('click', function(){


    var num= setInterval(function(){
     grow++;
     h1.innerHTML= grow + "%";
     growth.style.width= grow +"%"
    },num2);


    setTimeout(function(){
        clearInterval(num);
        btn.innerHTML= "Downloaded";
        btn.style.opacity= "0.6";
        btn.style.pointerEvents= "none";
        h2.innerHTML= `Your Downloading is completed in ${num2/10} seconds`;
    }, num2*100);
});
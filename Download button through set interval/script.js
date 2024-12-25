var btn= document.querySelector("button");
var h1= document.querySelector("h1");
var growth= document.querySelector("#growth");
grow=0;

btn.addEventListener('click', function(){


    var num= setInterval(function(){
     grow++;
     h1.innerHTML= grow + "%";
     growth.style.width= grow +"%"
    },40);


    setTimeout(function(){
        clearInterval(num);
        btn.innerHTML= "Downloaded";
        btn.style.opacity= "0.6";
    }, 4000);
});
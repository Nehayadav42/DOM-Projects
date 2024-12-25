var body= document.querySelector("body");
var box= document.querySelector(".box");
var h1= document.querySelector("h1");

body.addEventListener('mousemove', function(dets){
    box.style.left= dets.x + 'px';
    box.style.top= dets.y + 'px';
});

h1.addEventListener('mouseenter', function(){
     box.style.transform= 'scale(3)';
     h1.style.letterSpacing= '10px';
});

h1.addEventListener('mouseleave', function(){
    box.style.transform= 'scale(1)';
    h1.style.letterSpacing= 'normal';
});


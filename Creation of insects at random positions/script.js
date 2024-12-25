var btn= document.querySelector("button");
var body= document.querySelector("body");

btn.addEventListener('click', function(){
  var valuex= Math.random()*100;
  var valuey= Math.random()*100;
  var rot= Math.random()*360;

  var img= document.createElement("img");
  img.setAttribute('src', 'https://www.freepnglogos.com/uploads/bug-png/bug-png-transparent-images-4.png');
  img.style.height= '100px';
  img.style.position= 'absolute';
  img.style.left= valuex + '%';
  img.style.top= valuey + '%';
  img.style.transform = 'rotate(' + rot + 'deg)';

  body.appendChild(img);



});
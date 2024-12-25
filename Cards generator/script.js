// var cards= [" Neha", "Priya", "Nikita", "Mahima"]

// sum=""

// cards.forEach(function(elem){
//  sum = sum+ elem + " "
   
// })

// console.log(sum);


var data= [
{  
    Name: 'Neha',
    Age: 19,
    City: 'Bhopal',
    State: 'Madhya Pradesh'
},

{  
    Name: 'Nikita',
    Age: 18,
    City: 'Bhopal',   
    State: 'Madhya Pradesh'
},

{  
    Name: 'Mahima',
    Age: 19,
    City: 'Berasia',
    State: 'Madhya Pradesh'
},

{  
    Name: 'Rahul',
    Age: 34,
    City: 'Jaipur',
    State: 'Rajasthan'
},

{  
    Name: 'Priya',
    Age: 22,
    City: 'Ahemdabad',
    State: 'Gujarat'
},
]
sum=0
var container= ""
data.forEach(function(elem){
    container += `<div class="card1">
        <h1>${elem.Name}</h1>
        <h4>${elem.Age}, ${elem.City}</h4>
        <h5>${elem.State}</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae vero omnis ducimus cum saepe qui  quas cumque!</p>
    </div>`
    sum += elem.Age
})

var body= document.querySelector("body")
body.innerHTML= container
// console.log(container);
console.log(sum);


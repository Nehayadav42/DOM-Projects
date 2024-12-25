var details= [
    { 
        "name": "Aarav",
         "activeStatus": "Just now",
          "profile": "https://photosly.in/wp-content/uploads/2024/07/boy-dp-profile-pic4.jpg" ,
          "story" : "https://plus.unsplash.com/premium_photo-1663839331539-33db874aa080?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        },


    {
       "name": "Ishaani", 
       "activeStatus": "2 minutes ago ", 
       "profile": "https://photosbulk.com/wp-content/uploads/2024/08/real-pic-girl-simple-attitude_32.webp",
       "story": "https://images.unsplash.com/photo-1702884163621-ded464345868?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

       },


    { 
      "name": "Vihaan", 
      "activeStatus": "45 minutes ago",
       "profile": "https://cdn.pixabay.com/photo/2023/09/02/03/14/child-8228075_640.jpg",
       "story" : "https://images.unsplash.com/photo-1733345743514-297504c58bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },


    { 
      "name": "Aditya",
       "activeStatus": "8 hours ago", 
       "profile": "https://i.pinimg.com/736x/36/6d/53/366d53a5bfa871cb6edfd7f6b9280311.jpg" ,
       "story" : "https://images.unsplash.com/photo-1733860532456-3e83dd0b1174?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },


    { 
      "name": "Reyansh", 
      "activeStatus": "10 hours  ago",
       "profile": "https://i.pinimg.com/736x/5d/a3/33/5da3332f636e619eb3b77e3a878819d2.jpg" 
       ,
       "story" : "https://images.unsplash.com/photo-1734375294751-e5afcb9dd9f8?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      },
    

      { 
        "name": "Swasti", 
        "activeStatus": "22 hours ago",
         "profile": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7qlhRmj3YBNJvmQ_zGvd9vavdHAV5cteLw&s" ,
         "story" : "https://plus.unsplash.com/premium_photo-1690522331304-caac86cd8811?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        },

        { 
          "name": "Rohan", 
          "activeStatus": "Yesterday",
           "profile": "https://i.pinimg.com/736x/9f/0a/83/9f0a83410e99a667a80d9c5d11ee67a5.jpg" ,
           "story" : "https://plus.unsplash.com/premium_photo-1734610302728-b9faf507cf90?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
  ]

  var container=`<div class="card">
   <div class="full">

            <div id="progress">
                <div id="growth"></div>
            </div>
            <h2>sarthak</h2>
            
        </div>
        <div class="status">
        <div id="up">
            <h4>Updates</h4>
             </div>
             <div class="icons">
               <i class="ri-qr-scan-2-line"></i>
               <i class="ri-camera-line"></i>
               <i class="ri-search-line"></i>
            </div> 
        </div>
              <h5 id="upper">Status</h5>
        <div class="mydetails">
           <img src="sunkissed.jpg" alt="">
             <div class="myname">
        <h5>My Status</h5>
        <h6>Tap to add a status update</h6>
       </div>
        </div>
       <h6 id="recent">Recent Updates</h6>
        <div class="user-details">
        </div>
`

  details.forEach(function(elem, idx){

    
           container= container + `
            <div id= ${idx} class="name">
                <img src="${elem.profile}" alt="">
                <div class="name-details">
              <h5>${elem.name}</h5> 
              <h6 class="time">${elem.activeStatus}</h6>
              </div>
        </div>
        
   `
    
  })

  var main= document.querySelector(".main")

  var allStatus = document.querySelector('#allStatus')





   main.innerHTML=container

   main.addEventListener('click',function(dets){
   var gold= (details[dets.target.id])
  
   var growth = document.querySelector('#growth')
   main.addEventListener('click',function(dets){
    var grow = 0
    var gold = details[dets.target.id]
    var inter = setInterval(function(){
        grow++
        growth.style.width = grow +'%'
    },30)


   var full = document.querySelector(".full")
   var fullUser = document.querySelector('.full h2')
   
    full.style.display ='block';
   
   
    
    full.style.backgroundImage = `url(${gold.story})`
    
   fullUser.innerHTML = gold.name   
   
   
   
   setTimeout(function(){
    full.style.display='none'
},3000)



})
   })

   
   
   

   
   

  
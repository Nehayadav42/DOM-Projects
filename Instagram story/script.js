var arr= [
    {
        username: "_aanya08",
        dp : "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://images.unsplash.com/photo-1725714355442-4216013a29fd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },

    {
        username: "@pixelpioneer",
        dp : "https://photosqn.com/wp-content/uploads/2024/06/iphone-boys-dp_49.webp",
        story : "https://images.unsplash.com/photo-1734205402869-d322431ca4f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },

    {
        username: "sahil_@33",
        dp : "https://cdn.lazyshop.com/files/9cf1cce8-c416-4a69-89ba-327f54c3c5a0/product/06070774c795f37dce3445274f1e42ff.jpeg",
        story : "https://plus.unsplash.com/premium_photo-1663839331539-33db874aa080?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },

    {
        username: "DreamyDusk_",
        dp : "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://images.unsplash.com/photo-1702884163621-ded464345868?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },

    {
        username: "@rebel.2",
        dp : "https://photosking.net/wp-content/uploads/2024/04/attitude-boys-dp_71.webp",
        story : "https://images.unsplash.com/photo-1733345743514-297504c58bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },

    {
        username: "@Maahi",
        dp : "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://images.unsplash.com/photo-1733860532456-3e83dd0b1174?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },

    {
        username: "Indigo_",
        dp : "https://photosking.net/wp-content/uploads/2024/04/instagram-cute-couple-dp_129.webp",
        story : "https://images.unsplash.com/photo-1734375294751-e5afcb9dd9f8?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },

    {
        username: ".anshu4",
        dp : "https://photosbulk.com/wp-content/uploads/2024/08/real-hand-pic-girl-and-boy_26.webp",
        story : "https://plus.unsplash.com/premium_photo-1690522331304-caac86cd8811?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },

    {
        username: "@VivaciousV.",
        dp : "https://photosking.net/wp-content/uploads/2024/04/real-girl-pic-photo-images54.webp",
        story : "https://plus.unsplash.com/premium_photo-1734610302728-b9faf507cf90?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },
 ]

 var sum = ''

arr.forEach(function(elem,idx){
    
    sum = sum + `<div class="story">
    <img id = ${idx} src=${elem.dp} alt="">
    <h6>${elem.username}</h6>
</div>`

})


var storiyan = document.querySelector('.storiyan')


var full = document.querySelector('#full')
var fullUser = document.querySelector('#full h2')
var growth = document.querySelector('#growth')


storiyan.innerHTML = sum

storiyan.addEventListener('click',function(dets){
    var grow = 0
    var gold = arr[dets.target.id]
    var inter = setInterval(function(){
        grow++
        growth.style.width = grow+'%'
    },30)
    
    full.style.display = 'block'
    full.style.backgroundImage = `url(${gold.story})`
    fullUser.innerHTML = gold.username

storiyan.innerHTML = sum
    setTimeout(function(){
        full.style.display = 'none'
        clearInterval(inter)
    },3000)
})



 
const counter = document.getElementById('counter')

let count = 0
let number = 1

setInterval(() => {
    count ++
    counter.innerText = count;

}, 1000);

// decrement/increment the timer

const minus = document.getElementById('minus')

minus.addEventListener("click", function(){ 
    count-=1
    counter.innerHTML = count
})

const plus = document.getElementById('plus')

plus.addEventListener("click", function(){ 
    count+=1
    counter.innerHTML = count
})

// like number
const heart = document.getElementById('heart')
const likes = document.querySelector("ul.likes")
heart.addEventListener('click', function(){
    let li = document.createElement('li')
    li.innerText = `${count} has been liked ${number} time(s).`
    likes.appendChild(li)
})

// pause counter

const pause = document.getElementById('pause')
pause.addEventListener('click', function(){
    
})
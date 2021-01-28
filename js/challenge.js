const counter = document.getElementById('counter')

let count = 0
let number = 1

let timer = setInterval(() => {
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

// pause/resume counter

const pause = document.getElementById('pause')
pause.addEventListener('click', function(){
    if (pause.innerText == 'pause'){
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        pause.innerText = 'resume';
        clearInterval(timer);
    } else {
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
        pause.innerText = 'pause';
        setInterval(() => {
            count ++
            counter.innerText = count;
        
        }, 1000);
    }

    //leave a comment 
const commentForm = document.getElementById('comment-form')
const inputComment = document.getElementById('comment-input')
commentForm.addEventListener('submit', function(e){
    e.preventDefault();

})


})
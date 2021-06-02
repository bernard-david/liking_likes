var likes = 0;
var count = document.querySelector('#count');

function increment() {
    likes++
    count.innerHTML = likes;
}
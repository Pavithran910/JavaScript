var click = document.querySelector('.click');
var reset = document.querySelector('.reset');
var red = document.querySelector('.red');
var blue = document.querySelector('.blue');

var square = document.querySelector('.square');
var rectangle = document.querySelector('.rectangle');
var circle = document.querySelector('.circle');

var count = 0;
var countElement = document.querySelector('.count');

click.addEventListener("click", function() {
    count++;
    if (count % 5 === 0) {
        circle.style.display = "block";
        square.style.display = "none";
        rectangle.style.display = "none";
    } else if (count % 2 === 0) {
        square.style.display = "block";
        circle.style.display = "none";
        rectangle.style.display = "none";
    } else {
        rectangle.style.display = "block";
        square.style.display = "none";
        circle.style.display = "none";
    }
    countElement.innerHTML = "count=" + count;
    click.style.backgroundColor="grey"
    reset.style.backgroundColor="transparent"
});

reset.addEventListener("click",function(){
    count = 0;
    countElement.innerHTML = "count=" + count;
    reset.style.backgroundColor="grey"
    click.style.backgroundColor="transparent"
});

red.addEventListener("mouseover", function(){ 
    square.style.backgroundColor = "red";
    circle.style.backgroundColor = "red";
    rectangle.style.backgroundColor = "red";
});

blue.addEventListener("mouseover", function(){
    square.style.backgroundColor = "blue";
    circle.style.backgroundColor = "blue";
    rectangle.style.backgroundColor = "blue";
});
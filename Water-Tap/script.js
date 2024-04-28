var tapButton = document.getElementById('button');
var tankwater = document.querySelector('.tank-water');
var waterEle = document.querySelector('.pipewater');
var effect = document.querySelector('.pipebg');
var tankempty = false;
var interval;
var pipe = document.querySelector(".pipebg");
let Emptying=false;
let currentWidth=100;

tapButton.addEventListener('click', function() {
    tapButton.classList.toggle('changer');
    if (waterEle.style.display === "block") {
        waterEle.style.display = "none";
    } else {
        waterEle.style.display = "block";
    }
    if (!tankempty) {
        tankempty = true;
        var currentHeight = parseFloat(getComputedStyle(tankwater).height);
        
        interval = setInterval(function() {
            currentHeight -= 1;
            tankwater.style.height = currentHeight + 'px';

            if (currentHeight <= 0) {

                tankempty = false;
                tankwater.style.display = "block";
                clearInterval(interval);
                pipeEmpty()
            }    
        }, 20);  
    }  
    
    else {
        clearInterval(interval);
        tankempty = false;
    }

    function pipeEmpty(){
        if(!Emptying){
            Emptying =true;
            var currentWidth = parseFloat(getComputedStyle(effect).width);

            tapInterval=setInterval(function() {
                currentWidth -=1
                effect.style.width=currentWidth + 'px'
                if(currentWidth <= 0){
                    clearInterval(tapInterval)
                    tapButton.style.backgroundColor="red"
                    tankwater.style.display="none"
                    effect.style.display="none"
                    Emptying = false;
                    waterEle.style.display="none"
                }
            },20)
        }else{
            clearInterval(tapInterval)
            Emptying=false;
        }
    }
  
});
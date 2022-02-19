
score = 0;

cross  = true;

audio = new Audio('music.mp3');

audiogo = new Audio('gameover.mp3');

//ek second ke baad music play

document.onkeydown = (e) => {
    console.log("key clicked : ", e.keyCode)

/

audio.play();

if (e.keyCode == 38) {
    dino = document.querySelector('.dino');
    dino.classList.add('animateDino');

    //it means that after 700 milliseconds this action will be performed --

    setTimeout(() => {
        dino.classList.remove('animateDino')
    }, 700);
}

//for right button ---
if (e.keyCode == 39) {
    dino = document.querySelector('.dino');
  //  dino.classList.add('animateDino');

    dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left = dinoX + 122 + 'px';


}


//for left button --- 

if (e.keyCode == 37) {
    dino = document.querySelector('.dino');
    dino.classList.add('animateDino');

    dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    
    dino.style.left = (dinoX - 122) + 'px';


}}





setInterval(() => {
    dino = document.querySelector(".dino");
    gameOver = document.querySelector(".gameOver");
    obstacle = document.querySelector(".obstacle");

    
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
//ye obstacle ke left our top ki value hai
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);

    if(offsetX<113 && offsetY<52) {

       
      
    gameOver.innerText= 'Game Over';

    obstacle.classList.remove("obstacleAni");

    audiogo.play();

    setTimeout(() => {
        audiogo.pause();
        audio.pause();
    }, 1000);




    }

    

    else if (offsetX< 145 && cross) {
        score +=1;
        updateScore(score);
        cross = false ;

        
        setTimeout(() => {
            cross = true;
        }, 1000);

           

            setTimeout(() => {

                aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));

                newDur = aniDur - 0.3;
                obstacle.style.animationDuration =  newDur + 's' ;  //seconds
    
            }, 500);
          
    }

   
}, 10);

function updateScore(score){
    //console.log(score);
    scoreCont.innerText = "Your score = " + score;
}

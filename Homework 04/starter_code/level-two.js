/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');
let ballOne = document.querySelector(".js-ball:nth-child(1)");
let ballTwo = document.querySelector(".js-ball:nth-child(2)");
let ballThree = document.querySelector(".js-ball:nth-child(3)");
function declareWinner() {
    document.body.classList.add('game-over');
  } // add an eventlistener
  ballOne.addEventListener("click",function(){
    score+=10; 
    if(score < 100){
        scoreEl.innerText=score
    } else{
       declareWinner() 
    } 
   

  })
  ballTwo.addEventListener("click",function(){
    score+=10; 
    if(score < 100){
        scoreEl.innerText=score
    } else{
       declareWinner() 
    } 
   

  })
  ballThree.addEventListener("click",function(){
    score+=10; 
    if(score < 100){
        scoreEl.innerText=score
    } else{
       declareWinner() 
    } 
   

  })
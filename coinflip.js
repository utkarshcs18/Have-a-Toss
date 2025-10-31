const score = JSON.parse(localStorage.getItem('savedScore')) || {wins : 0 , loss : 0 };
const refreshMessage = localStorage.getItem('lastMessage');



const heads = document.querySelector('.heads');
const tails = document.querySelector('.tails');
const reset = document.querySelector('.reset');
const resultDisplay = document.querySelector('.text-result');

resultDisplay.innerHTML = refreshMessage;


let myGuess = ' ';
let computerMove = ' ';

    heads.addEventListener("click", ()=>{
        computerMove = computerGuess();
        playGame("heads",computerMove);
    });

    tails.addEventListener("click",()=>{
        computerMove = computerGuess();
        playGame("tails",computerMove);
    });

    reset.addEventListener("click" , ()=>{
        score.wins = 0;
        score.loss = 0;    
        localStorage.setItem("savedScore" , JSON.stringify(score));
        display( );
    });

function computerGuess(){
    let randomGuess = Math.random();
    let computerResult = ' ';

        if(randomGuess >= 0 && randomGuess <= 0.5){
            computerResult = 'heads'
        }else if(randomGuess > 0.5 && randomGuess <=1){
            computerResult = 'tails';
        }

    return computerResult;
}


function playGame(myGuess , computerMove){
        if(computerMove === myGuess){
            score.wins++;
            display(true , myGuess , computerMove);
        }else{
            score.loss++;
            display(false , myGuess , computerMove);
        }

    localStorage.setItem('savedScore',JSON.stringify(score));
}

const display = (isWin , myGuess , computerMove) =>{
        if (isWin === undefined && myGuess === undefined && computerMove === undefined) {
            resultDisplay.innerHTML = `Game reset!`;
            return;
        }
        
        if(isWin){
            resultDisplay.innerHTML = `YOU WON. IT'S ${myGuess.toUpperCase()} Wins : ${score.wins} | Loss : ${score.loss} `;
        }else{
            resultDisplay.innerHTML = `YOU LOSS. IT'S ${computerMove.toUpperCase()} Wins : ${score.wins} | Loss : ${score.loss}`;
        }
}

localStorage.setItem("lastMessage" , "Page Refreshed .... But not your Score!");
let userScore = 0;
let compScore =0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    //rock, paper,scissor
};
const drawGame =()=>{
    
    msg.innerText ="Game was Draw. play again."
};

const showWinner =(userWin, userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
       
        msg.innerText= 'You Win!Your ${userChoice}beats ${compchoice}';
       msg.style.backgroundColor="green";


    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
    
        msg.innerText='You Lose. ${compChoice}beats your ${userchoice}';
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    console.log("userChoice=", userChoice);
//generate computer choice->modular
const compChoice= genCompChoice();
console.log("compChoice=", compChoice);
if(userChoice=== compChoice){
    //Draw game
    drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        //scissor,paper
        userWin = compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        //rock, scissor
        userWin=compChoice==="scissor"?false:true;
    }
    else{
        //rock, paper
      userWin= compChoice==="rock"?false:true; 
    }
    showWinner(userWin, userChoice, compChoice);
}

};




choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        //for fetching id  for each one
        console.log("choice was clicked", userChoice);
        playGame(userChoice);


    });
});
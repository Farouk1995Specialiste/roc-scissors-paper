
let humanScore =0;
let computerScore = 0;
 let rounds=0
  const playerChoice=document.getElementById('playerCh')
  const computerChoice=document.getElementById('computeCh')

// get computer choice
function getComputerChoice(){
   let  arrChoice=["paper","rock","scissors"] ;
   let arrLength=arrChoice.length; 
   let randomValue=Math.floor(Math.random()*arrLength)  
   
   return  arrChoice[randomValue]
   }
 // play round
 function playRound (humanChoice,cm){
   if ((humanChoice ==="rock" && cm==="scissors")||
   (humanChoice ==="paper" && cm==="rock") ||
   (humanChoice === 'scissors' && cm==="paper")){
   humanScore++;
   document.querySelector('.humanSc').innerHTML=humanScore
   document.getElementById('one').innerHTML=`${humanChoice.toUpperCase()} beats ${cm.toUpperCase()}`
}else if((cm==="rock" && humanChoice ==="scissors" )||
( cm==="paper" && humanChoice ==="rock") ||
(cm==="scissors" && humanChoice === "paper")){
      computerScore++;
      document.querySelector('.computerSc').innerHTML=computerScore;
      document.getElementById('one').innerHTML=`${cm.toUpperCase()} beats ${humanChoice.toUpperCase()} `

      }else{ document.getElementById('one').innerHTML=`Its a Tie`}
   
 }

 function checkWinner(){
   if(rounds === 5){
      if( humanScore >computerScore){
         document.getElementById('winner').style.display="block"
         document.getElementById('winner').innerHTML=`The Winner Is You :)`;
      }else if( humanScore <computerScore){
         document.getElementById('loose').style.display="block"
         document.getElementById("loose").innerHTML="You Lost ,Computer beats You :(";
         }else{
            document.getElementById('tie').style.display="block"
            document.getElementById('tie').innerHTML=`It's Draw! No One Win`;
         }
   }
 }
 

function displayNone(){
   document.getElementById('tie').style.display="none"
}

function game(){
   const options=document.querySelectorAll('.btn');
   options.forEach(option => option.addEventListener('click' , () => {
      let computerSelection=getComputerChoice();
      let playerSelection = option.id;

playerChoice.innerHTML=option.textContent;
computerChoice.innerHTML=computerSelection
 rounds++;
 console.log(rounds)
 if(rounds===5){
   document.getElementById('start').style.display='block'
 }
 playRound(playerSelection ,computerSelection);
 checkWinner()
 document.getElementById('one').style.display=`block`

   }))

}
game()

// start again !!!
document.getElementById('start').addEventListener('click',() => {
   computerScore=humanScore=rounds=0;
   document.getElementById('winner').style.display="none"
   document.getElementById('loose').style.display="none"
   displayNone();
   playerChoice.innerHTML=``;
   computerChoice.innerHTML=``;
   document.querySelector('.humanSc').innerHTML="0";
   document.querySelector('.computerSc').innerHTML="0";
  document.getElementById('one').style.display=`none`
   document.getElementById('start').style.display='none'
})
//Store game information
let wins=0;
let losses=0;
let draws=0;

let results=[];
let round=0;
let gameStarted=false;

//Start game function
function startGame(){
	let name=document.getElementById("playerName").value;

//Check empty name
if(name.trim() === ""){
	alert("Please enter your name.");
	return;
}

gameStarted=true;

//Display welcome message
document.getElementById("welcome").innerHTML="Welcome, " +name +"!";

//Display starting date and time
document.getElementById("startTime").innerHTML="Game started on: " +new Date();
}

//generate random computer choice
function getComputerChoice(){
	let choice=["rock", "paper", "scissors"];
	let randomIndex=Math.floor(Math.random() * 3);
	return choice[randomIndex];
}

//Play one round
function playRound(playerChoice){

	//Check whether game has started
	if(!gameStarted){
		alert("Click Start Game first.");
		return;
}

let computerChoice=getComputerChoice();
let result;

round++;

//Decide the winner
if(playerChoice === computerChoice){
	result="Draw";
	draws++;
}else if(
	(playerChoice === "rock" && computerChoice ==="scissors") ||
	(playerChoice === "scissors" && computerChoice === "paper") ||
	(playerChoice === "paper" && computerChoice === "rock")
){

	result="Win";
	wins++;
}else{
	result="Lose";
	losses++;
}

//Change player image
document.getElementById("playerImg").src=playerChoice + ".png";

//Change computer image
document.getElementById("computerImg").src=computerChoice + ".png";

//Display results and change color
let resultElement=document.getElementById("result");
resultElement.innerHTML="You " +result+ "!";

if (result === "Win"){
	resultElement.style.color="green";
}else if(result === "Lose"){
	resultElement.style.color="red";
}else{
	resultElement.style.color="grey";
}

//update score
document.getElementById("wins").innerHTML=wins;
document.getElementById("losses").innerHTML=losses;
document.getElementById("draws").innerHTML=draws;

//Store result in array
results.push(result);

//Add round to history table
document.getElementById("historyBody").innerHTML +=
	"<tr>"+
	"<td>"+ round +"</td>" +
	"<td>"+ playerChoice +"</td>" +
	"<td>"+ computerChoice +"</td>" +
	"<td>"+ result +"</td>" +
	"</tr>";
}

//Show game summary
function showSummary(){
	let totalRounds = results.length;
	let totalWins = 0;

	//Count total wins using loop
	for (let i=0; i<results.length; i++){
		if(results[i] === "Win"){
			totalWins++;
		}
	}

	//Calculate win percentage
	let percentage=0;
	if(totalRounds > 0){
		percentage=Math.round(
			(totalWins/totalRounds)*100
		);
	}

	//Display summary
	document.getElementById("summary").innerHTML =
	"You played "+ totalRounds + " rounds and won " + percentage + " %";
}

//reset game
function resetGame(){
	wins=0;
	losses=0;
	draws=0;

	round=0;
	results= [];
	gameStarted =false;

	//reset scoreboard
	 document.getElementById("wins").innerHTML =0;
	 document.getElementById("losses").innerHTML =0;
	 document.getElementById("draws").innerHTML =0;

	 document.getElementById("historyBody").innerHTML ="";
	 document.getElementById("result").innerHTML ="";
	 document.getElementById("summary").innerHTML ="";
	 document.getElementById("welcome").innerHTML ="";
	 document.getElementById("startTime").innerHTML ="";

	 document.getElementById("playerImg").src ="rock.png";
	 document.getElementById("computerImg").src ="rock.png";

	 document.getElementById("playerName").value ="";
}



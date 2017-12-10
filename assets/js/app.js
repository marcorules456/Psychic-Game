var counter =0;
var left =10;
var enemyLives = 4;
var letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
var numbers = [1,2,3,4,5,6,7,8,9];


var guesses = [];


for(var i=0;i<enemyLives;i++){
		var heart = $("<img>").addClass("life").attr("src","assets/images/heart.png").appendTo(".lives");
	}





function letterDisplay(){
$(".list").empty();
$(".lives").empty();
var answer = $("#answers").val();
guesses.push(answer);

console.log(guesses);

var letterList = $("<h2>").text(guesses).appendTo(".scoreBox").addClass("list");
}



$(".submitter").on("click",function(){
	letterDisplay();
	letterCheck();
});

function emptier(){
	$(".ball").animate({opacity:0});
	$(".ball").empty();
}

function letterCheck(){
	var randomizer = Math.floor(Math.random()*7);
	var answer = $("#answers").val();
	console.log(letters[randomizer]);

	if(answer === letters[randomizer]){
		console.log("Wrong");
		left-=1;
		enemyLives-=1;
		var ball = $("<img>").addClass("ball").animate({left:"+=400px"}).appendTo(".rockets").attr("src","assets/images/ball.gif");
	setTimeout(emptier,1000);

	}else{
		console.log("Wrong");
		left-=1;

	}


	if(left===0){
		alert("you lost");
		$(".list").empty();
		guesses=[];
		left=10;
		enemyLives=4;
	}
	if(enemyLives===0){
		alert("You won");
		$(".list").empty();
		guesses=[];
		left=10;
		enemyLives=4;
	}


	$("#left").text(left);



	for(var i=0;i<enemyLives;i++){

		var heart = $("<img>").addClass("life").attr("src","assets/images/heart.png").appendTo(".lives");
	}




}

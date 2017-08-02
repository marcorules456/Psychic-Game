// variable storing the computer guess
 
 var computer= ["a","b","c","d","e","f"
,"g","h","i","j","k","l","m","n","o","p"
,"q","r","s","t","u","v","w","x","y","z"];
// variable for randomizer

var randomizer= Math.floor(Math.random()*12.1);
// finsihed version of the the computers guess

var computerGuess=computer[randomizer];

var brainW=document.getElementById("commentWin");

var brainL=document.getElementById("commentLose");

// variable sotring the keys pressed in html

var userText = document.getElementById("user-text");
// variable storing the wins of user
   
   var wins=document.getElementById("win");
   
   var losses=document.getElementById("loss");
   // guesses left in a variable 
  
  var guessesLeft=document.getElementById("questionsLeft");
   // sets the value of the variables to their respective scores, they will be combined when function starts
  var  scoreWin=0;
  
  var scoreLose=0;
  
  var  guessLeft=9;
     
  
   // start of the function
   
   document.onkeyup = function(event) {
    // makes the variable value the key pressed
	
	userText.textContent = event.key;
   // if you gt the guess right
  
  if(userText==computerGuess){
	  // score will go up by 1

	  scoreWin+=1;
// the score and the element are combined to show the score

wins.innerHTML=scoreWin;
brainL.innerHTML="noo i have been defeated";

}
// if user loses
 
 else{
   
   // the guesses left goes downn by 1
   
   guessLeft-=1;
   // this will print it to the html with the variable holding the value of the guesses left
    
	guessesLeft.innerHTML=guessLeft;
   }
   // if your guesses run out
  
  if(guessLeft==0) {
	   // you lose score goes up 1

	   scoreLose+=1;
// guesses left go back to 9
   
   guessLeft+=9;
   // losing pop up
   
   alert("you lose");
   // prints the score of losses to  html
  
  losses.innerHTML=scoreLose;
   //prints the guesses left to html
  
  guessesLeft.innerHTML=guessLeft;
  brainL.innerHTML="Haha I am the best";
  
   }
   
   
   
   
   
   
   
  
   
   };
   
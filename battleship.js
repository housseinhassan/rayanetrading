var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var guessedNumber = 0;

var isSunk = false;

while (isSunk==false) {
    
    guess=prompt("enter a number between 0 and 6");
    
  //  guessedNumber = guess;
    
        
    if (guess <0 || guess >6) {
        
        alert("enter a valid number");
        
       // guessedNumber = 0;
        
    } else{ 
        
        guesses=guesses+1;
        
      //  guessedNumber = guess;
        
        if (guess==location1 || guess== location2 || guess==location3){
            
            hits = hits + 1;
            
            alert("HIT!");
            
                   /*  if (hits >= 1 && guessedNumber == guess){
                         
                         alert(" You cannot pick the same number");
                      
                     } else {
                         
                         hits = hits + 1;
                         
                         alert("HIT!");
                     }*/
            
            if (hits == 3) {
                
                isSunk = true;
                
                alert("You sank my battleship!");
            }
            
        } else {
            
            alert("MISS");
        }
        
    }
 }

    var stats ="You took  "+ guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);

 alert(stats);
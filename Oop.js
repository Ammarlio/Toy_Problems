// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.



// function makeGame(upperbound){
//   var upper=upperbound;
//   var rand=randInt(upper)
//   var counter=0;
//   return {
//   	guessMyNumber:function(n){
//   		counter++;
// 	    if (n > upper) {
// 	      return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
// 	    } else if (n === rand) {
// 	      return "You guessed my number!";
// 	    }
// 	    return "Nope! That wasn't it!";
//   	},
//   	giveUp:function(){
//     	return rand;
//   	},
//   	numOfGuesses:function(){
//     	return counter;
//   	}
//   }
// }



	var makeGame=function(upperbound){
		var obj={}
		obj.upper=upperbound;
		obj.rand=randInt(obj.upper)
		obj.counter=0	
		obj.guessMyNumber=guessMyNumber;
		obj.giveUp=giveUp;
		obj.numOfGuesses=numOfGuesses;
		return obj;
	}


	var randInt=function(n) {
	    return Math.floor(Math.random() * (n + 1));
	}
	var guessMyNumber=function(n){
		var x=this;
		x.counter++;
		   if (n > x.upper) {
		      return "Out of bounds! Please try a number between 0 and " + x.upperbound + ".";
		    } else if (n === x.rand) {
		      return "You guessed my number!";
		    }
		    return "Nope! That wasn't it!";

	} 

	var giveUp=function(){
		var x=this;
		return x.rand;
	}

	var numOfGuesses=function(){
		 var x=this;
		return x.counter;
	}



	var Ammar=makeGame(5)




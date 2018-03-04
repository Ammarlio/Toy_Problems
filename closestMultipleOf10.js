 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
 	if(num%10===0){
 		return num

 	}else if(num%10<5){
 		num-=num%10
 		return num
 	}else{

 		num+=10;
 		num-=num%10;
 		return num;

 	}

 	
 }
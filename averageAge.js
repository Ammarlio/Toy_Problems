// // Write a function called  averageAge that accpets an array of objects and return the average ages for the people who are between 18 and 50

 var people = [ 
       {name: {first: 'Ahmad', middle: 'B.', last: 'AlAhmad'}, age: 85}, 
       {name: {first: 'Amer', last: 'MHD'}, age: 43}, 
       {name: {first: 'Aya', last: 'Sultan'}, age: 36}, 
       {name: {first: 'Hadeel', middle: 'E.', last: 'Lami'}, age: 44}, 
       {name: {first: 'Hadeel', middle: 'E.', last: 'Lami'}, age: 54}, 
       {name: {first: 'Lina', last: 'MHD'}, age: 14} ,
       {name: {first: 'Obada', last: 'Eddin'}, age: 24} 
 ]; 
//  function averageAge(peoplea) {
//  	var sum=0;
 	
//  	for (var i = 0; i < people.length; i++) {
//  		if(people[i].age >18 && people[i].age<50)
 		
//  				sum+=people[i]
//  			}
 		

 	
//  	return arr;
 	

//  }

//  averageAge(people); // 43+36+44+24 = 36.74


function averageAge(array){
	var sum=0;
	var counter=0;
	for (var i = 0; i < array.length; i++) {
		if(array[i]['age']>18 && array[i]['age']<50){
			sum+=array[i]['age'];
			counter++;
		}
	}
	return sum/counter;
}

















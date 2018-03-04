	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.
		function classMates(name,age,favorite,gender){
			return {
				name:name,
				age:age,
				favorite:favorite,
				gender:gender
			}
		}

		var mate1=classMates("ammar",22,"football","male")
		var mate2=classMates("omar",23,"tennis","male")
		var mate3=classMates("am",21,"baset","female")
		var classArr=[mate1,mate2];

		function dispmate(mate){
			return mate.name + "" + mate.age;
		}

		function addMate(arr,mate){
				arr.push(mate)
		}

		function nmbOfmale(array){
			var count=0
			for (var i = 0; i < array.length; i++) {
				if(array[i].gender==="male")
				{
					count++;
				}
			}
			return count;
		}


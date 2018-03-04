// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!

	var mate1={name:{first:"Ammar",mid:"darwish",last:"Halbouni"},
		age:22,
		favorite:"football",
		nationality:"Jordanian"
	}
	var mate2={name:{first:"Omar",mid:"dari",last:"maasra"},
		age:23,
		favorite:"football",
		nationality:"Jordanian"
	}
	var mate3={name:{first:"ahmad",mid:"amer",last:"darabke"},
		age:24,
		favorite:"basketball",
		nationality:"palestinian"
	}
	var mate4={name:{first:"mahmoud",mid:"galeb",last:"hedaya"},
		age:25,
		favorite:"tennis",
		nationality:"syrian"
	}
	var mate5={name:{first:"nader",mid:"ahmad",last:"laban"},
		age:26,
		favorite:"swimming",
		nationality:"lebanese"
	}

	mates=[mate1,mate2,mate3,mate4,mate5]

// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
	function older3ars(array){
		var older=array[0].age
		for (var i = 0; i < array.length; i++) {
			if(array[i].age>older){
				older=array[i].age
			}

		}
		return older;
	}

// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 // nbOfObjKeys({}) // ==> 0
	 // nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

	 function nbOfObjKeys(obj){
	 	return Object.keys.length;
	 }

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    // ['hi','hello','welcome','hy'] // ==> ["hi","hy"]

	    function sameLength(array){
	    	var arr=[];
	    	for (var i = 0; i < array.length; i++) {
	    		for (var j = 0; j < array.length; j++) {
	    			if(array[i].length===array[j].length && j!==i){
	    				arr.push(array[i])
	    			}
	    		}
	    	}
	    	return arr;
	    }
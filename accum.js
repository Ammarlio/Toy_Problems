// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

    function accum(input){
        var  str=""
        var f=input[0].toUpperCase()+'-'
        var z;
       	for (var i = 1; i < input.length-1; i++) {
       		z=i
       			str+=input[i].toUpperCase()+ input[i].repeat(i)+'-'
       		
       	}

       	return f+str+input[z+1].toUpperCase()+input[z+1].repeat(z+1);

    }
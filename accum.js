// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

    function accum(input){
        var  str=""
       
        var f=input[0].toUpperCase()+"-"
        for (var i = 1; i < input.length; i++) {
        		//i need to make another for loop but actually i couldnt make it in my logic i will understand it later
        	str+=input[i].toUpperCase()+input[i]+"-"

        }
        return f+str;
    }
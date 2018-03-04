// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

  function accum(string){
    var str=""
    var first=string[0].toUpperCase()+"-";
    for (var i = 0; i < string.length; i++) {
      str+=string[i].toUpperCase()+string[i].repeat(i)+"-"
    }
   str=str.split("");
   str.pop();
   str=str.join("");
   return str;

  }
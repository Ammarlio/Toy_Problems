/*
using improved each create function that returns an array with all the names in the array
if the index is even
var x = [{name : 'Jon',age : 45}, {name : 'Ali', age : 28},
{name :'Omar', age :17},{name :'Ola', age :37}, {name 'Salwa', age : 22}];
pName(x); = > ['Jon', 'Omar', 'salwa']
*/
var x = [{name : 'Jon',age : 45}, {name : 'Ali', age : 28},
{name :'Omar', age :17},{name :'Ola', age :37}, {name :'Salwa', age : 22}];


    function each(array, func) {
      for (var i = 0; i < array.length; i++) {
        func(array[i], i);
      }
    }
    
    function pName(array) {
        var arr=[];
        each(array,function(elem,i){
                if(i%2===0){
                    arr.push(elem.name)
                }

        })
       return arr;
    }


/*
1) using improved each with objects, create function that print every element inside the object 
var obj_2 = {name: 'Ibrahim', age : 67, phone : '078-0000000'}
printValue(obj_2); => 
    Ibrahim
    67
    078-0000000
var obj_1 = {name: 'Salim', age : 15, phone : '079-0000000'}
printValue(obj_1); => 
    Salim
    15
    079-0000000
*/

var obJ = {name: 'Salim', age : 15, phone : '079-0000000'}
    function each(coll, func) {
        if (Array.isArray(coll)) {
            for (var i = 0; i < coll.length; i++) {
                func(coll[i], i);
            }
        }
        else {
            for (var key in coll) {
                func(coll[key], key);
            }
        }
    }
    
    
    function printValue(obj) {
        var str=""      
        each(obj,function(obj,key){
           str+=obj+"\n"
        })

        return str;
    }

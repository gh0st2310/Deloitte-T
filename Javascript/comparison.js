
alert(2>1); //true (correct)
alert(2==1); //false
alert(2 != 1); //true
let result = 5>4; //assign the result of the comparison
alert(result); //true


//String Comparison:-JS uses lexicographical or dictionary order to compare strings

alert( 'Z' > 'A'); //true
alert('Glow' > 'Glee'); //true
alert('Bee' > 'Be'); //true


//Comparison of different types:- JS converts the values to numbers b4 comparing

alert('2'>1); //true

//for boolean values true becomes 1 and  false  becomes 0

alert(true ==1); //true

//Strict Equality
//A regular equality check == has a problem. It cant differentiate 0 from false
alert(0 == false); //true
alert("" == false); //True

// this  happens cuz operands of different types are converted to numbers by the  equality operator == . An empyty
//string, just like false becomes zero.

//What to do to differentiate 0 from false?
// a strict equality operator === checks the equaility without type conversion
//eg.: if a and b are of different types then a === b returns false immediately
alert(0 === false); //false

//there is also a strict non  equality operator !== analogous to !=.


// comparison with null and undefined
// Theres a non intuitive behaviour when null or undefines are compared to other values.

//For a static equality check ===
// THESE VALUES ARE DIFFERENT BCOZ EACH OF THEM IS A DIFFERENT TYPE

alert(null === undefined); //false

//For a non strict check
//Theres a special rule.These 2 are sweet couple. they equal each other(in the sense of ==), but not any other value.

alert(null == undefined); //true





//For maths and other comparisons < > <= >=
//null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

//Strange results: null vs 0
alert(null >0); //false
alert(null == 0); //false
alert(null >= 0); //true

//cuz == is not a math operator.


alert( undefined > 0); //false
alert(undefined < 0); //false
alert(undefined == 0); //false

// First 2 are false as undefined is converted to NaN which is not equal to  any numeric value
// Last one is false as undefined only equals null,undefined and no other value.


//Treat any comparison with undefined/null except the strict equality === with exceptional care.
//Dont use comparisons >= > <= with a variable which may be null/undefined, unless you are really sure of what you are doing. if a variable
//can have these values check for them separately.


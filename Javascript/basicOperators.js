

//Terms : "unary", "binary", "operand"
// operand- is what operators are applied to.

//An operator is unary if it has a single operand. eg. unary negation - reverses the sign of a number:

let x =1;

x= -x;
alert(x); //-1, unary neagation was applied

let x=1,y=3;
alert(y-x); //2

//Converts non-numbers
alert(+true); //1
alert(+""); //0

//Exponentiation **
alert(4 ** (1/2)); //2
alert(8 ** 2);//64

//Increment and Decrement

let counter=0;
alert(counter++);//0

//Pre-increment increases the value after assigning the variable

let counter = 0;
alert(++counter); //1

//post increment assigns the variable after incrementing its value 


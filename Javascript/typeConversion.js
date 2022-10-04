
// Type conversions
// Operators and funcs automatically convert the values given to them to the right typeof.

// For EventTarget. alert automatically converts any values to a string to show instanceof. Mathematical operations
// convert values to nums.
// Sometimes we need to explicitlly convert a value to the expeted type.EventTarget

// String conversions
// Happens when we need the string form of value.

// Eg. alert(value ) or String(value)


let value = true;
alert(typeof value); // boolean
alert(typeof value);



alert("6" / "2");
let str = "123";
alert(typeof str);

let num = Number(str);

alert(typeof num);

let age = Number("an arbitrary string instead of a number");

alert(age);

alert( Number("   123   "));
alert( Number("123z"));
alert( Number(true));
alert( Number(false));


//Null and undefined behave differently here: null becomes zero while undefined becomes NAN

//Boolean conversion
//Boolean conversion is the simplest one.

//The conversion rule:

//Values that are intuitively "empty", like 0, an empty string, null, undefines , and NaN , becomes false
//other values become true

alert(Boolean(1));//true
alert(Boolean(0));//false

alert(Boolean("hello"));//true
alert(Boolean(""));//false

alert(Boolean("0"));//true
alert(Boolean(" "));//true


//String conversiom - String(value)

//Numeric conversion- occurs in math operations.performed with Number(value)

//Boolean conv. - occurs in logical operations. Boolean(value)

//Commonly done mistakes:
//undefied is NaN as a number, not 0
//"0" and  space only strings like " " are true as boolean



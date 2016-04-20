if (typeof String.prototype.startsWith != 'function' ) {
    String.prototype.startsWith = function( str ) {
        return this.substring(0,str.length)===str;
    }
}

if (typeof String.prototype.endsWith != 'function' ) {
    String.prototype.endsWith = function( str ) {
        return this.indexOf(str, this.length - str.length) !== -1;
    }
}

if (typeof String.prototype.capitalize != 'function' ) {
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
}


/*
Property: contains
	Tests an array for the presence of an item.

Arguments:
	item - the item to search for in the array.
	from - integer; optional; the index at which to begin the search, default is 0. If negative, it is taken as the offset from the end of the array.

Returns:
	true - the item was found
	false - it wasn't

Example:
	>["a","b","c"].contains("a"); // true
	>["a","b","c"].contains("d"); // false
*/
if (typeof String.prototype.contains != 'function' ) {
    String.prototype.contains = function(string, s) {
        return (s) ? (s + this + s).indexOf(s + string + s) > -1 : this.indexOf(string) > -1;
    }
};

/*
Property: toInt
	parses a string to an int.

Returns:
	either a float or "NaN" if the string is not a number.

Example:
	>var value = "10.848".toInt(); // value is 10
*/
if (typeof String.prototype.toInt != 'function' ) {
    String.prototype.toInt = function() {
        return parseInt(this, 10);
    }
};

/*
Property: toFloat
	parses a string to an float.

Returns:
	either a float or "NaN" if the string is not a number.

Example:
	>var value = "10.848".toFloat(); // value is 10.848
*/
if (typeof String.prototype.toFloat != 'function' ) {
    String.prototype.toFloat = function() {
        return parseFloat(this);
    }
};

/*
Property: trim
	Trims the leading and trailing spaces off a string.

Example:
	>"    i like cookies     ".trim() //"i like cookies"

Returns:
	the trimmed string
*/
if (typeof String.prototype.trim != 'function' ) {
    String.prototype.trim = function( str ) {
        return this.replace(/^\s+|\s+$/g, '');
    }
};

/*
Property: clean
	trims (<String.trim>) a string AND removes all the double spaces in a string.

Returns:
	the cleaned string

Example:
	>" i      like     cookies      \n\n".clean() //"i like cookies"
*/
if (typeof String.prototype.clean != 'function' ) {
    String.prototype.clean = function() {
        return this.replace(/\s{2,}/g, ' ').trim();
    }
};





























/*
Function: $defined
	Returns true if the passed in value/object is defined, that means is not null or undefined.

Arguments:
	obj - object to inspect
*/

function $defined(obj){
	return (obj != undefined);
};


/*
Function: $extend
	Copies all the properties from the second passed object to the first passed Object.
	If you do myWhatever.extend = $extend the first parameter will become myWhatever, and your extend function will only need one parameter.

Example:
	(start code)
	var firstOb = {
		'name': 'John',
		'lastName': 'Doe'
	};
	var secondOb = {
		'age': '20',
		'sex': 'male',
		'lastName': 'Dorian'
	};
	$extend(firstOb, secondOb);
	//firstOb will become:
	{
		'name': 'John',
		'lastName': 'Dorian',
		'age': '20',
		'sex': 'male'
	};
	(end)

Returns:
	The first object, extended.
*/

var $extend = Object.extend = function(){
	var args = arguments;
	if (!args[1]) args = [this, args[0]];
	for (var property in args[1]) args[0][property] = args[1][property];
	return args[0];
};

/*
Section: Utility Functions

Function: $
	returns the element passed in with all the Element prototypes applied.

Arguments:
	el - a reference to an actual element or a string representing the id of an element

Example:
	>$('myElement') // gets a DOM element by id with all the Element prototypes applied.
	>var div = document.getElementById('myElement');
	>$(div) //returns an Element also with all the mootools extentions applied.

	You'll use this when you aren't sure if a variable is an actual element or an id, as
	well as just shorthand for document.getElementById().

Returns:
	a DOM element or false (if no id was found).

Note:
	you need to call $ on an element only once to get all the prototypes.
	But its no harm to call it multiple times, as it will detect if it has been already extended.
*/

function $(el){
	if (!el) return false;
	if ($type(el) == 'string') el = document.getElementById(el);
	return el;
};

/*
Function: $type
	Returns the type of object that matches the element passed in.

Arguments:
	obj - the object to inspect.

Example:
	>var myString = 'hello';
	>$type(myString); //returns "string"

Returns:
	'element' - if obj is a DOM element node
	'textnode' - if obj is a DOM text node
	'whitespace' - if obj is a DOM whitespace node
	'arguments' - if obj is an arguments object
	'object' - if obj is an object
	'string' - if obj is a string
	'number' - if obj is a number
	'boolean' - if obj is a boolean
	'function' - if obj is a function
	'regexp' - if obj is a regular expression
	'class' - if obj is a Class. (created with new Class, or the extend of another class).
	'arguments' - if obj is the arguments object.
	'collection' - if obj is a native htmlelements collection, such as childNodes, getElementsByTagName .. etc.
	false - (boolean) if the object is not defined or none of the above.
*/

function $type(obj){
	if (!$defined(obj)) return false;
	if (obj.htmlElement) return 'element';
	var type = typeof obj;
	if (type == 'object' && obj.nodeName){
		switch(obj.nodeType){
			case 1: return 'element';
			case 3: return /\S/.test(obj.nodeValue) ? 'textnode' : 'whitespace';
		}
	}
	if (type == 'object' || type == 'function'){
		switch(obj.constructor){
			case Array: return 'array';
			case RegExp: return 'regexp';
			case Class: return 'class';
		}
		if (typeof obj.length == 'number'){
			if (obj.item) return 'collection';
			if (obj.callee) return 'arguments';
		}
	}
	return type;
};

/*
Function: $random
	Returns a random integer number between the two passed in values.

Arguments:
	min - integer, the minimum value (inclusive).
	max - integer, the maximum value (inclusive).

Returns:
	a random integer between min and max.
*/

function $random(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
};


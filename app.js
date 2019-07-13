//Get the packages
var lorem = require("loremip");
var hewwwo = require("hewwwo");

//Get Array
var a = ["this", "is", "my", "awesome", "array", "give", "me", "cuddles"];

//Set Lorem variables
var b = lorem.generate(a, 50);
var c = lorem.ipsum(5);

//Hewwwo time
var h = hewwwo(b,c);

//Console Log var h
console.log(h);

//Datatypes Number, string, Boolean, null, undefined, object, symbol

//Strings
let username = "tamanna.singh" ;
let domain = "@gmail.com";
console.log(username,domain);
let email = username + domain;//concatenation example
console.log(email);

//string concatenation
let verb = 'Learning';
let noun = 'Javascript';

let activity = verb +' '+ noun;
console.log(activity);

//fetching characters from string via indexing
console.log(activity[0]);
console.log(email[2]);

//string length(property: something it possesses)
console.log(email.length);
console.log(activity.length);

//srting methods
console.log(activity.toLowerCase());
let caps = email.toUpperCase();
console.log(caps);
let index = caps.indexOf('@');
console.log(index);

//Common string methods
let res = activity.lastIndexOf('a');
console.log(res);

let res1 = activity.replace('a','o');
console.log(res1);

let res2 = activity.substring(3,6);
console.log(res2);

let res3 = activity.slice(8,15);
console.log(res3);

let res4 = activity.split("n");
console.log(res4);


//1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

//1b
console.log(warmHugs.toUpperCase());

//1c
console.log(warmHugs.replace("like" , "love"));

//2a
var beenImpaled = "Oh, look at that. I've been impaled. ";

//2b
console.log(beenImpaled.slice(-19,-1));

//3a
var dotDotDot = "...";

//3b
var skullBones = `I don't have a skull${dotDotDot}or bones`;

console.log(skullBones);

//4
console.log(Math.PI);

//5
let randomNum = Math.random();

randomNum *= 3

randomNum = Math.ceil(randomNum);
console.log(randomNum);
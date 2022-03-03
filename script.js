//1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

//1b
console.log(warmHugs.toUpperCase());

//1c
warmHugs = warmHugs.replace("like" , "love");
console.log(warmHugs);


//2a
var beenImpaled = "Oh, look at that. I've been impaled. ";

//2b
beenImpaled = beenImpaled.slice(-19,-1);
console.log(beenImpaled);


//3a
let dotDotDot = "...";

//3b
let skullBones = `I don't have a skull ${dotDotDot} or bones.`;

console.log(skullBones);

//4
console.log(Math.PI);

//5
let randomNum = Math.random(); // 0 through 0.99999
randomNum *= 3; // 0 to 2.99999
randomNum = Math.floor(randomNum); //gets rid of decimal
randomNum++;
console.log(randomNum);

//BONUS
//6
console.log(" Let It Go!".toUpperCase().repeat(2).trim())

//7a
let reindeers = "Reindeers are better than people.";

//7b
console.log(reindeers.replace ("Reindeers are better than people." , "Reindeers_are_better_than_people"));

//8
let squareRoot = Math.sqrt(2);
console.log(squareRoot);

//9
let newRandomNumber = Math.ceil((Math.random()*17)+6);
console.log(newRandomNumber);
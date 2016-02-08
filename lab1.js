var numOfChildren = 6;
var partnerName = "Mary";
var location = "Cork";
var jobTitle = "Web Developer";

console.log("You will be " + jobTitle + " in " + location + " ,and married to " + partnerName+ " with " + numOfChildren+ " kids.");


var currentYear = 2016;
var birthYear = 1993;

var answerOne = currentYear - birthYear;
var answerTwo =  birthYear - currentYear;

console.log("They are either " + answerOne + " or " + answerTwo);

var currentAge = 22;
var maxAge = 100;
var estAmount = 3;

var estPerYear = estAmount * 365;

var total = (maxAge - currentAge)* estPerYear;

console.log("You will need " + total + " to last you until you die at " + maxAge);

var radius = 6;

var circumference = 2*3.14*6 ;
console.log("The circumference is " + circumference);

var area = 3.14*(radius * radius);
console.log("The area is " + area);

function tellFortune(numOfChildren, partnerName, location, jobTitle){
    
    console.log("You will be " + jobTitle + " in " + location + " ,and married to " + partnerName+ " with " + numOfChildren+ " kids.");
    
}

console.log(tellFortune(1, "Mary", "Cork", "Web Developer"));

function greaterNum(numOne, numTwo){
    
    if (numOne > numTwo){
        
        return numOne;
        
    }else if (numTwo > numOne){
         
        return numTwo;
        
    }

}

greaterNum(10, 5);

function helloWorld(langCode) {
    
    if (langCode == "en"){
        
        return console.log("Hello World");
        
    } else if (langCode == "de") {
        
        return console.log("Hello World 2");
        
    } else if (langCode == "es") {
        
        return console.log("Hello World 3");
        
    }
    
}

helloWorld("de");

function assignGrade(score) {
    
    
    
}

assignGrade(67);
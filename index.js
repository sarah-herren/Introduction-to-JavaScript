/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Make a variable called votingAge and give it a value
   2. Return true if age is 18 or higher

   HINT: no function required
*/

var votingAge = 19

if (votingAge >= 18) {
  console.log(true);
}
//you can't use return outside of a function. Return stops the execution of a function
/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Return the new value of the 1st variable

   HINT: no function required
*/

var var1 = 2
var var2 = 3
var1 = var1 + var2

console.log(var1)



/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Return the result

   HINT: look up the Number method
*/

let string = "1999"
parseInt(string);

console.log(string);


/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the numbers in the parameters: a and b
   3. Multiply a and b and return the answer
*/

var product = multiply(5, 3);
function multiply(a,b) {
    return a * b;
      
    }
  multiply();
  console.log(product);


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

var dogAge = dogYears(5);

function dogYears(years){
    return years * 7
}
dogYears();
console.log(dogAge);


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  
var amountFood = hungryDog(1,15);

function hungryDog(age, weight) {

  if (age <= .333) {
    return weight * .1;
  }
    else if (age <= .58) {
      return weight * .05;
    }
    else if (age < 1) {
      return weight * .04;
    }
  if (age >= 1) {
  
  if (weight <= 5) {
    return weight *.05;
  }
    else if (weight <= 10) {
      return weight * .04;
    }
    else if (weight <= 15) {
      return weight * .03;
    }
    else {
      return weight * .02;
    }
    }
}    
hungryDog();

console.log(amountFood); 



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below
   - win should return "you win!"
   - lose should return "you lose!"
   -tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()
*/


function game(user, computer) {
  var computer1 = Math.random();
  
      if (computer1 < 0.34) {
      computer = "scissors";
      }
          else if (computer1 < 0.67) {
          computer = "rock";
          } 
          else {
          computer = "paper";
          }
  
      console.log("Computer: " + computer);
  
   var user = "scissors";   
      
      console.log("You: " + user);
  
      if (user === "rock") {  
          
          if (computer === "rock") {
          console.log("it's a tie");
          }
          else if (computer === "scissors") {
              console.log("You win!");
          }
          else {
              console.log("You lose!");
          }
      }
  
      if (user === "paper") {
  
          if (computer === "paper") {
          console.log("it's a tie");
          }
           else if (computer === "scissors") {
          console.log("You lose!");
          }
          else {
          console.log("You win!");
          }
      }
  
      if (user === "scissors") {
  
          if (computer === "scissors") {
          console.log("it's a tie");
          }
          else if (computer === "paper") {
          console.log("You win!");
          }
          else {
          console.log("You lose!");
          }
      }
  
  
  }
  game();
  
  

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/

var convertedMiles = miles(50);

function miles(kilometerConversion){
    return kilometerConversion * 0.621371;

  }
  miles()
  console.log(convertedMiles);



//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/
var convertedFeet = feet(43);

function feet(centimeters){
    return centimeters * 0.0328084;
  }
 
  feet()
  console.log(convertedFeet);


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start to count down from the number received 
  2. At each iteration, it should return this string: 
      "(number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall"
*/

function annoyingSong(countDown){
  for (let i = countDown; i >= 1; i--) {
      
    let remaining = i - 1;

    console.log( i + " bottles of soda on the wall, " + i + " bottles of soda, take one down pass it around " + remaining + " bottles of soda on the wall")
  }
}

annoyingSong(23)
/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 = A 
   80-89 = B 
   70-79 = C 
   60-69 =  D 
   below 60 = F
*/
  
function grade(score){
    if (score >= 90) {
      console.log("A");
    }
      else if (score >= 80) {
        console.log("B");
      }
      else if (score >= 70) {
        console.log("C");
      }
      else if (score >= 60) {
        console.log("D");
      }
      else { console.log("F");
      }
  }
grade(71)
  
  
  

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/


function vowelCounter(/*add your code here*/) {
    /*add your code here*/
}



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}

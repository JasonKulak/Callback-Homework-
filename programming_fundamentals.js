////////////////////////////////
//Principles of Good Programming
////////////////////////////////

// Write a ~1 sentence summary for each one
    //DRY - Avoid repetition and Don't Repeat Yourself.  
    //KISS (Keep It Simple Stupid) - Avoid complexity because simple code takes less time to write, has fewer bugs, and is easier to modify
    //Avoid Creating a YAGNI (You Aren't Going to Need It) - Don't add functionality until you need it
    //Do the simplest thing that could possibly work - "What is the simplest thing that could possible work?" is a good question to ask and helps keep simplicity in the design
    //Don't make me think - Code should be easily read and understood with minimum effort required.
    //Write code for the Maintainer - Almost any code that is worth writing is worth maintaining in the future, either by you or by someone else.
    //Single responsibility principle - A component of code should perform a single well defined task
    //Avoid premature optimization - If your code is working but slower than you want, only then should you start thinking about optimizing.
    //Separation of concerns - Separating a computer program into distinct sections.
       
// Which ones surprise you (if any)?
    // They all seem pretty straight forward.

// Which one is currently giving you the most struggle?
    
/////////////////
//Commenting Code
/////////////////

//f is an arrow function with l as the parameter
const f = l => {
    //these are our objects/keys for the function
    let es = 0, p = 0, c = 1, n = 0
    //While Loop. c (1) is lessthan or equal to l (55). This loop will be executed as long as the test condition (c <= l)/(1 <= 55) is true
    while (c <= l) {
      n = c + p;
      [c, p] = [n, c]
      es += (c % 2 === 0) ? c : 0
    }
    return es
  }
  
  //we console.log the arrow function and 55 is our argument.  55 is assigned to l at the beginning of the code/arrow function
  console.log(f(55))

////////////////////////////////////////

  const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return evenSum;
  }
  
  
  console.log(f2(55))
  
  
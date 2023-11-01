//  ASSIGMENT 


// no 1.
// What is NaN? What is its type? How can you reliably test if a value is equal to NaN?


//NaN stands for "Not a Number". It's a special value that represents an invalid number, such as the result of dividing by zero.
// NaN is considered to be a "number" type, but it does not have any specific value.
// As a result, it's not possible to reliably test if a value is equal to NaN.
//However, the "isNaN()" function can be used to check if a value is NaN or not.
 // If the value is NaN, the "isNaN()" function will return true.
// Otherwise, it will return false.


// no 2 .

let check = (word) =>{
    const revWord = word.split("").reverse().join("").toUpperCase()
    console.log(revWord)
   if(word.toUpperCase() === revWord){
        return true
    }else{
        return false
    }
  }
  
  console.log(check("madam"))
   // no 3. Write a sum method which will work properly when invoked using either syntax below.
  //Hint: console.log(sum(2,3)); // Outputs 5 
  //console.log(sum(2)(3)); // Outputs 5
  
  function sum(a, b) {
    return a + b;
  }
  console.log(sum(2, 3)); 
  
  
  // no 4.
  console.log(false == '0') //output = true
   console.log(false === '0')// output = false
   //The reason for this difference is that the "==" operator performs "loose" comparison, whereas the "===” operator performs "strict" comparison.
  
  
  // no 5.
   // console.log(0.1 + 0.2); // output = 0.3
   //console.log(0.1 + 0.2 == 0.3); // output = false
  
   // this is why it output like this:
  
   //The first line of code will output 0.30000000000000004. This is because when adding two floating point numbers together,
   //JavaScript will perform a type of coercion known as "value" coercion.
  // In this case, the numbers 0.1 and 0.2 are coerced into floating point numbers with a greater degree of precision.
   // The second line of code will output false. This is because, in this case, the "===" operator is being used, which performs "strict" equality.
    // As a result, the two values are not considered to be equal, even though they are very close.
  
  
  
    // no 6 Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
  
  //Sample numbers : 3, -7, 2
  //Output : The sign is -
  let num1 = 3;
  let num2 = -7;
  let num3 = 2;
  
  let product = num1 * num2 * num3;
  if(product > 0){
    alert("the sign is +");
  }else if (product < 0){
    alert("the sign is -");
  }else{
    alert("the product is 0");
  }
  
  
  
  //no 7.  Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
  //Sample Output :
  //"0 is even"
  //"1 is odd"
  //"2 is even"
  
  for (let i=0; i<= 15; i++){
    if(i%2 === 0){
      console.log(i + "is even");
    }else{
      console.log(i + "is odd")
    }
  }
  
  
  
  // no 8.Write a JavaScript program that iterates integers from 1 to 100.
  // But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz".
   // For numbers multiples of both three and five print "FizzBuzz".
  
  for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz");
    }else if (i % 3 === 0){
      console.log("Fizz");
    }else if (i % 5 === 0){
      console.log("Buzz");
    }else{
      console.log(i);
    }
  }
  
  
  
  // no 9. Write a JavaScript program to sum 3 and 5 multiples under 1000.
  
  
   i = 0
  for (let i = 1; i< 100; i++){
    if(i%3 ===0||i % 5 === 0){
      sum += i;
    }
    
  }
  console.log(i)
  
  // no 10. Write a JavaScript function to check whether an 'input' is a string or not.
  
  
  
  const checkString = (string) =>{
    if(typeof string === "string"){
        console.log("this is a string")
    }else{
        console.log("not a string")
    }
  }
  
  checkString(100)
  
  
  
  
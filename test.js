let a = 10;



const myFunction = () => {
   a = 20;
}
myFunction();
console.log("Value of 'a' outside the function " + a); //outputs 20
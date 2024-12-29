// Q ->  Write a function that takes a number as input and returns "Even" if the number is even and "Odd" if it's odd.


// This is a function which is 
let  checkEvenOdd = (n) => {
    if (n % 2 === 0){
        console.log("The Given Number is Even..");
    }else{
        console.log("The Given Number is Odd..");
    }

}

// Call The Function...
checkEvenOdd(5);
checkEvenOdd(8);
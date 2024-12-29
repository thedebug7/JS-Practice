// Q -> Write a program to print numbers from 1 to 10 using a loop.


// This is a function which take 2 num start and end and print number
let printNum = (start, end) => {
    for (let i = start; i <= end; i++){
        console.log(i)
    }
}

// Call the Function...
printNum(0,10)
//q1 write a function that console logs “hello world”

function greet(){
    console.log("Hello World")
}

greet()

//q2 Write a function that generates a random number(use the math.random import 

function getRandom(max){
    return Math.random();
}

console.log(getRandom(5))

//q3 write a function that combines multiple arrays together as 1 big array (you can use the .concat method for this )

var list=["apples", "oranges", "bananas"]
var size=["large","small","medium"]

function arrconcat(arr1, arr2) {
    let newArr = arr1.concat(arr2);
    let val = newArr.reduce(function(accumulator, currentValue){
      return accumulator + currentValue;
    });
    
    return val;
  }
  console.log(arrconcat(list,size))

//q4 write a function that checks if the number inputted is a prime number

function isitprime(num){
    let isprime=true;

    if(num===1){
        console.log(`${num} is not a prime number`)
    }
    else if(num>1){
        for(let i=2; i<num; i++){
            if (num % i ==0){
                isprime=false;
                break;
            }
        }
        if (isprime) {
            console.log(`${num} is a prime number`);
        } else {
            console.log(`${num} is a not prime number`);
        }
    }

}
console.log(isitprime(7))

//q5 write a function that check if the number is an odd or even number

function oddoreven(value){
    if (value %2 ==0){
        console.log(`${value} is even`)
    }
    else{
        console.log(`${value} is odd`)
    }
}

console.log(oddoreven(3))

//q6 write a case statement every day of the week with output being either a working day or a weekend
var day ="saturday"
    switch(day.toLowerCase()){
        case "monday":
            console.log("Work day")
            break;
        case "tuesday":
              console.log("Work day")
            break;
        case "wednesday":
            console.log("Work day")
            break;
        case "thursday":
        console.log("Work day")
            break;
        case "friday":
            console.log("Work day")
            break;
        case "saturday":
            console.log("Weekend")
            break;
        case "sunday":
            console.log("Weekend")
            break;
    }
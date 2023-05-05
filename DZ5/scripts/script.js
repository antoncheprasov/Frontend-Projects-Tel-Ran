{
const input = prompt("Enter number")
const number = Number(input)
if (Number.isNaN(number)) {
    console.log('Not a number!')
} else {
console.log(`10% from your number is ${Math.round(number * 0.1)}`)
}
}


{
const number1 = prompt("Enter a number 1: ")
const number2 = prompt("Enter a number 2: ")
if (number1<number2) {
    console.log(number1)
} else {
    console.log(number2)
}
} 


{
const input = prompt("Enter a number")
const number = Number(input)
if (number<100) {
    console.log('Число меньше 100')
} else if (number>100) {
    console.log('Число больше 100')
} else {
    console.log('Число равно 100')
}
}


{
const name = prompt("Enter your name: ")
const age = Number(prompt("Enter your age: "))
if (age>18) {
    console.log("Hello "+ name)
} else {
    console.log("Hi " + name)
}
}
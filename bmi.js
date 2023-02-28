let feet = prompt('Enter your height in feet')
let inch = prompt('Enter your height in inches ')

 let weight = prompt('Enter your weight in kilograms')

 feet = Number(feet)

 inch = Number(inch)

let inch1 = feet * 12;
let inch2 = inch * 1;

let heightininches = inch1 + inch2;

let height = heightininches * 0.0254

height = height * height
weight = Number(weight)

let bmi = weight / height

console.log('your Bmi is:' + bmi)

let firstmessage = 'your Bmi is:' + bmi +'And'

if (bmi <=18.5)
{
    alert  (firstmessage + 'You are underweight')

    console.log (firstmessage + 'You are underweight')
}
else if (bmi <=25)
{
    alert (firstmessage + 'You are normal')

    console.log (firstmessage + 'you are normal')
}
else if (bmi <=30)
{
    alert (firstmessage + 'You are over weight')

    console.log(firstmesssage + 'you are over weight')
}
else {
    alert (firstmessage + 'You are obese')
    console.log(firstmessage + 'you are obese')
}


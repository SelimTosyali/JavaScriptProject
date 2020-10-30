/*let n1 = 3
let n2 = 3

console.log(n1 == n2)

let js = "JavaScript"
let py = 'Python'

console.log(js == py)

let nums = [1,2,3]
nums.forEach(i => console.log(i))

let user = {
    name : 'Selim',
    age : 23,
    country : 'Turkey'
}
console.log(typeof user, typeof user.name)

const PI = Math.random()
console.log(parseInt(PI*100))


let number = prompt('Enter number')
console.log(number)

const agree = confirm('Are you sure you like to delete? ')
console.log(agree)

let user = {
    name : 'Selim',
    surname : 'Tosyalı',
    age : 23,
    country : 'Turkey'
}
let fullName = user.name + " " + user.surname

console.log(fullName)

let info = "My name is Selim Tosyalı. I live in Turkey, Izmir.\
 I am a student and I love learning. I learn HTML, CSS, JavaScript.\
 I am enjoying reading the 30DaysOfJavaScript challenge."

console.log(info)

let num1 = 5
let num2 = 10

console.log(`The sum of ${num1} and ${num2} is ${num1+num2}`)
console.log(`${num1} is greater than ${num2}: ${num1>num2}`)

let countries = 'Finland, Sweden, Norway, Denmark, Iceland'
countriesArray = countries.split(", ")
console.log(countriesArray)
let string = '    30    Days Of JavaScript     '
console.log(string)
console.log(string.trim(' '))
let num = "10"
let numInt = +num
console.log(numInt)

let info = '30 Days Of JavaScript'

console.log(info)
console.log(`info variable size is ${info.length}`)
info = info.toUpperCase()
console.log(info)
info = info.toLowerCase()
console.log(info)
console.log(info.substring(0,info.search(' ')))
console.log(info.substring(3,info.length))
let socialMedia = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let socialMediaArray = socialMedia.split(', ')
console.log(socialMediaArray)
info = info.replace("JavaScript","Java")
console.log(info)
console.log(info.charAt(20))
console.log(info.charCodeAt(info.search('J')))

let data = 'You cannot end a sentence with because because because is a conjunction'
console.log(data.match(/because/gi).length)
*/
let info = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let regularExpression = /\d+/g

let infoArray = info.match(regularExpression)
console.log(infoArray)
let total = 0
infoArray.forEach(g => total += +g)
console.log(`Total salary is ${total}.`)
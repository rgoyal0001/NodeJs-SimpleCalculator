const add = require('./operations/add')
const subtract = require('./operations/subtract')
const multiply = require('./operations/multiply')
const divide = require('./operations/divide')

const a = add(2, 4)
const b = subtract(2, 4)
const c = multiply(2, 4)
const d = divide(2, 4)

console.log(a)
console.log(b)
console.log(c)
console.log(d)
'use strict'

let obj = {
   name: 'ilya',
   title: 'document',
   age: 13
}
let newObj = { ...obj };
delete newObj.age
console.table(newObj)
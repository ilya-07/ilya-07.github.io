const block = document.querySelector('.blick')
block.innerHTML = '12345';
const firstObj = {
   num: 23,
   name: 'ivan'
};

const secondObj = { ...firstObj }
secondObj.name = 55

console.log(firstObj.name, secondObj.name);
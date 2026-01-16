// document.body.innerHTML = 'hello';
// document.title = 'good job';

/*
console.log(document.title);
document.title = 'changed';

console.log(document.body);
console.log(typeof document.body);

console.log(document.body.innerHTML);
document.body.innerHTML = '<button>good job!</button>'
*/

console.log(document.querySelector('button').innerHTML);
document.querySelector('button')
  .innerHTML = 'changed';

const buttonElement = document.querySelector('.js-but')
  .innerHTML = 'button 2';

console.log(buttonElement); 
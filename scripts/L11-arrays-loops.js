/*
const myArray = [10, 20, 30];
console.log(myArray);

console.log(myArray[1]);

myArray[0] = 99;
console.log(myArray)

const newArray = [1, 'hello', true, { name: 'socks' }, [1, 2]]
console.log(newArray);
console.log(typeof newArray);
console.log(Array.isArray(newArray));

console.log(newArray.length);

newArray.push([12, 13, 15, 17])
console.log(newArray)

newArray.splice(1, 1);
console.log(newArray)
*/

const todoList = [];

function addTodo () {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  
  todoList.push(name);
}
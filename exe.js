let randNum = [43,27,5,27,40,67,83,31,14]

for(let items of randNum){
  // console.log(items);

  if(items % 2 === 0){
    console.log(items);
  }
}

let filteredNum = randNum.filter((item) => {
  return item % 2 === 0;
})

console.log(filteredNum);




const numbers = [10, 47, 3, 67, 6, 100];
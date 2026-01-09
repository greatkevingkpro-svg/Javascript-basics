let access = true;

if (access) {
  // console.log("This is a reference");
}

// let username = "kevin";

// console.log(username);
let isDataBaseOpen = false;

function login(username, password) {
  isDataBaseOpen= true;
  if(username.length<6){
    throw new Error("the length should greater than 6")
  }
  return username===password
}

try {

  let username = 2000000;
  let password = "";

  username = username.toString();
  login(username, password);

  if (typeof username === "string") {
    if (true) {
      username.toUpperCase();
    }
  } else {
    console.log("please enter a text value not a number");
  }
} catch (error) {
  console.log(error);
} finally {
  // write code that executes eventually
  isDataBaseOpen = true;
}

console.log(isDataBaseOpen);
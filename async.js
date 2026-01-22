fetch("https://fakestoreapi.com/products")
.then((responce)=>{
  return responce.json()
  // console.log(responce.body);
}).then((data)=>{
  // console.log(data)
})

async function getProducts(){
  // const resp = await fetch("https://fakestoreapi.com/products");
  // const data = await resp.json();
  // console.log(data);

  try {
    const resp = await fetch("https://fakestoreapi.com/products");
    const data = await resp.json();
    console.log(data);
  } catch(error) {
    console.error(error)
  }
}
getProducts()
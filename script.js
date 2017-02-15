var grocery = [
{product: "cherries", price: 3},
{product:"cereal", price: 5.25},
{product: "milk", price: 3.99},
{product: "Butter", price: 4.25},
{product: "Beer", price: 10.10}];

for(var i=0; i<grocery.length; i++){
console.log(grocery[i].product + " " + grocery[i].price);
}

var sum = 0;

for (x=0; x<grocery.length; x++){
  sum += grocery[x].price;
}

console.log("total:" +sum);

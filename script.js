var grocery = [
{product: "Cherries", price: 3.00},
{product:"Cereal", price: 5.25},
{product: "Milk", price: 3.99},
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

for (i=0; i<grocery.length; i++){
  var newDiv = document.getElementById('list');
  newDiv.innerHTML += "<p>"+grocery[i].product + ":$" + grocery[i].price.toFixed(2)+"</p>";
};

var sum2 = 0;
for (x=0; x<grocery.length; x++){
    var total2 = document.getElementById('total');
  sum2 += grocery[x].price;
  total2.innerHTML = "Total $" +sum2.toFixed(2);
}

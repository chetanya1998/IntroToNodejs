var faker = require('faker');
//var randomName = faker.name.findName();
//console.log(randomName);

//var randomCard = faker.helpers.createCard();
//console.log(randomCard);
//console.log(faker.commerce.price());
console.log("===========")
console.log("welcome to myshop")
console.log("============")
for (var i=0;i<10;i++){
    console.log(faker.commerce.productName()+"-"+faker.commerce.price()); 
}

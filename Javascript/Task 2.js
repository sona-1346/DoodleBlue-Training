const products=[
    { name:"lap",price:500},
    {name:"mouse",price:500},
    {name:"keyboard",price:500},
    {name:"monitor",price:1200},
    {name:"headphones",price:200}
];
//Filter products with price greater than 1000
const d=(products.filter(product=>product.price>=1000));
console.log(d);

//Get onlt product names
const get=products.map(names>=names.name);
console.log(get);

//Calculate the total price of those products

const express = require("express");
const app = express();

app.use(express.json());


// All product list
const list = [
    { id: 1, product: "Hotdog", type: "hunter", price: "2.45"},
    { id: 2, product: "Jelly beans", type: "mix", price: "0.99"},
    { id: 3, product: "Toilet paper", type: "extra soft", price: "4.65"},
    { id: 4, product: "Sausage", type: "italian", price: "2.45"},
    { id: 5, product: "Mineral water", type: "Carbonated", price: "0.99"},
]

app.get("/shop/products", (request, reponse) => {
    reponse.send(list);
});

// one product from list // GET
app.get("/shop/products/:id", (request, reponse) => {
    const product = list.find(
    (product)=> product.id === parseInt(request.params.id))
if (!product) {
    reponse.status(404).send("not found");
}

reponse.send(product);
});

// add // POST
app.post("/shop/products", (request, reponse) => {
    const newProduct = {
        id: list.length + 1,
        product: "Bread",
        type: "White",
        price: "1.20",
    };
    list.push(newProduct);
    reponse.send(list); 
});

// Update record // PUT
app.put("/shop/products/:id", (request, reponse) => {
    const myproduct = list.find(
    (product)=> product.id === parseInt(request.params.id))

if (!myproduct) {
    reponse.status(404).send("not found");
}
myproduct.product = "Eggs";
myproduct.type = "L";
myproduct.price = "3.12";
reponse.send(myproduct);
});


// Delete record // DELETE
app.delete("/shop/products/:id", (request, reponse) => {
    const myproduct = list.find(
    (product)=> product.id === parseInt(request.params.id))

const productIndex = list.indexOf(myproduct);
list.splice(productIndex, 1);
reponse.send(myproduct);
});



// server work? no
if (!myproduct) {
    reponse.status(404).send("not found");
}
// server work? yes
app.listen(8080, ()=> {
    console.log("Serveris veikia");
});
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(name + " added to cart!");
}
function orderOnWhatsApp(name, price) {
    let message = "Assalam-o-Alaikum! Main order karna chahta hoon.%0A%0A" +
                  "Product: " + name + "%0A" +
"Price: PKR " + price + "%0A";
    window.open("https://wa.me/923280092911?text=" + message, "_blank");
}

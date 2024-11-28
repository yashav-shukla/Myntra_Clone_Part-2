const PORT = process.env.PORT || 8080;
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use("", router);
server.listen(PORT, () =>
  console.log(`JSON Server is running on port ${PORT}`)
);

//https://Myntra.onrender.com/MensData
//https://Myntra.onrender.com/WomensData
//https://Myntra.onrender.com/ChildrensData
//https://Myntra.onrender.com/WishList
//https://Myntra.onrender.com/Cart
//https://Myntra.onrender.com/UsersList
//https://Myntra.onrender.com/AdminData
//https://Myntra.onrender.com/Checkout
//https://Myntra.onrender.com/CurrentUser
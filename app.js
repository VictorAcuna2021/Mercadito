const express = require("express");
const app = express();
const path = require("path");

//instanciando el servidor
app.listen(3000, ()=> console.log("Server on http://localhost:3000"));

//verifico el funcionamiento del servidor
//app.get("/", (req,res)=> res.send ("Hola Express"));

//acceso a public
app.use(express.static(path.resolve(__dirname,"./public")));

//web sites
app.use(require("./src/routes/web"));
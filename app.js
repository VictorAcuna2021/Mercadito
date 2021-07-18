const express = require("express");
const app = express();
const path = require("path");

// Seteo para el deploy
app.set("port",process.env.PORT || 3000);

//instanciando el servidor
// app.listen(3000, ()=> console.log("Server on http://localhost:3000"));
// Seteo para el deploy
app.listen(app.get("port"),()=> console.log("Server Start http://localhost:"+app.get("port")));

//verifico el funcionamiento del servidor
//app.get("/", (req,res)=> res.send ("Hola Express"));

//acceso a public
app.use(express.static(path.resolve(__dirname,"./public")));

//web sites
app.use(require("./src/routes/web"));
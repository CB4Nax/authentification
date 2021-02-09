const express = require("express");
const apiRoutes = require("./Server/routes/router")
const app = express();

app.use(express.json());

app.listen(process.env.PORT || "3000", function(){console.log("server is running")}); 
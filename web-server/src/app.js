const path = require("path");
const express = require("express");
const hbs = require("hbs");

const routes = require("./routers/routes.js");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "hbs");

hbs.registerPartials(path.join(__dirname, "../templates/partials"));
app.set("views", path.join(__dirname, "../templates/views"));
app.use(express.static(path.join(__dirname, "../public"))); // directory set karo
app.use(routes);

app.listen(port);

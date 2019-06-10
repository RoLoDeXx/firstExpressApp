const path = require("path");
const express = require("express");
const hbs = require("hbs");

const forcast = require("./utils/forcast");
const geocode = require("./utils/geocode");

const app = express();

app.set("view engine", "hbs"); //set view engine aka template engine

//set paths
hbs.registerPartials(path.join(__dirname, "../templates/partials"));
app.set("views", path.join(__dirname, "../templates/views"));
app.use(express.static(path.join(__dirname, "../public"))); // directory set karo

//directories to serve
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Samarth"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Samarth"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Samarth",
    message: "Atak gaye kidhar kya"
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    errorName: "Not Found",
    errorMessage: "Help article not found ",
    name: "Samarth",
    title: "Error 404"
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    res.send("Error you must provide a search statemnet");
    return;
  }
});

app.get("/weather", (req, res) => {
  if (!req.query.address)
    return res.send("You must provide an address to work");

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) return res.send({ error });

      forcast([latitude, longitude], (error, forcast) => {
        if (error) return res.send({ error });
        res.send({
          forcast: forcast.daily.summary,
          temp: forcast.currently.temperature + "C",
          location,
          address: req.query.address,
          icon: forcast.currently.icon
        });
      });
    }
  );
});

app.get("*", (req, res) => {
  res.render("404", {
    errorName: "Not Found",
    errorMessage: "Page not found",
    name: "Samarth",
    title: "Error 404"
  });
});

app.listen(3000);

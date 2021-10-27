const express = require("express");

const app = express();

const axios = require("axios").default;

app.get("/", (req, res) => {
  axios
    .get("https://covid19.mathdro.id/api/countries/Indonesia")
    .then((response) => {
      res.send(
        `<h1>Data Covid Terkonfirmasi Hari Ini : ${response.data.confirmed.value}</h1>`
      );
    });
});

app.listen(3000, () => {
  console.log("web server berjalan ...");
});

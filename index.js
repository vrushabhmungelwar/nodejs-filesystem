const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 8000;

app.get("/", (request, response) => {
  response.send(
    "To create .txt file type: http://localhost:8000/textfile , and To get all files type: http://localhost:8000/get"
  );
});

app.get("/textfile", (request, response) => {
  const current = new Date();
  const date = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()} ${current.getHours()}-${current.getMinutes()}`;

  let timestamp = `Date: ${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}\nTime: ${current.getHours()}:${current.getMinutes()}`;

  fs.writeFile(`./files/${date}.txt`, timestamp, (err) => {
    console.log("completed writing!!!");
  });
  response.send("text file created in files,  type: /get to all txt files");
});

app.get("/get", (request, response) => {
  const testFolder = "./files/";
  var x = [];
  fs.readdirSync(testFolder).forEach((file) => {
    file = file;
    x.push(file);
  });

  response.send(`${x}`);
});

app.listen(PORT, () => console.log("App is started", PORT));

const express = require("express");
const process = require("process");

module.exports = () => {
  const app = express();
  // basic route
  app.get("/", function(req, res) {
    res.json({ message: "ok" });
  });

  // Process route
  app.get("/calcule", function(req, res) {
    let x = 0,
      y = 1;
    let max = 10000 + Math.random() * 500;

    for (let i = 0; i <= max; i++) {
      let z = x + y;
      x = y;
      y = z;
    }

    res.json({ message: "ok" });
  });
  app.listen(4000);
  console.log("Application running!", process.pid);
};

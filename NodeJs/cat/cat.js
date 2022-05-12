const express = require("express");
const app = express();

class Cat {
  constructor(id, name, age, breed) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
}

const cats = [];

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: true, data: cats });
});

app.post("/", (req, res) => {
  const id = new Date().getTime();
  const name = req.body.name;
  const age = req.body.age;
  const breed = req.body.breed;
  cats.push(new Cat(id, name, age, breed));
  res.json({ success: true, data: cats });
});

app.get("/:id", (req, res) => {
  cats.map((cat) => {
    if (req.params.id == cat.id) {
      res.json({ success: true, data: cat });
    }
  });
  res.json({ success: false });
});

app.put("/:id", (req, res) => {
  cats.map((cat) => {
    if (req.params.id == cat.id) {
      if (req.body.name) cat.name = req.body.name;
      if (req.body.age) cat.age = req.body.age;
      if (req.body.breed) cat.breed = req.body.breed;
      res.json({ success: true, data: cats });
    }
  });
  res.json({ success: false });
});

app.delete("/:id", (req, res) => {
  cats.filter((cat) => cat.id == req.params.id);
  res.json({ success: true, data: cats });
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});

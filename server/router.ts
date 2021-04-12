import express, { json } from "express";
import { Book } from "./Book";
import fs from "fs";

const router = express.Router();

router.get("/books", (req, res) => {
  const data = fs.readFileSync("./books.json", "utf-8");  
  res.send(JSON.parse(data)).status(200);
});

router.get("/books/:id", (req, res) => {
  const stringData = fs.readFileSync("./books.json", "utf-8");
  const data = JSON.parse(stringData);
  const book = data.filter((obj: Book) => {
    return obj.title.toUpperCase().includes(req.params.id.toUpperCase());
  });
  
  res.send(book).status(200);
});
router.post("/books", (req, res) => {
  const stringData = fs.readFileSync("./books.json", "utf-8");
  let data = JSON.parse(stringData);
  
  if (!data.find((obj: Book) => obj.UUID === req.body.UUID)) {
    data.push(req.body);

    fs.writeFileSync("./books.json", JSON.stringify(data));
    res.sendStatus(201);
  } else {
    res.send({
      message: "UUID number already exist"
    }).status(422)
  }
   
});
router.delete("/books/:id", (req, res) => {
  
  const stringData = fs.readFileSync("./books.json", "utf-8");
  
  let data = JSON.parse(stringData);
  data = data.filter((obj: Book) => obj.title !== req.params.id);
  fs.writeFileSync("./books.json", JSON.stringify(data));
  res.sendStatus(200);
});
router.put("/books/:id", (req, res) => {
  const stringData = fs.readFileSync("./books.json", "utf-8");
  let data = JSON.parse(stringData);
  data = data.filter((obj: Book) => obj.title !== req.body);
  data.push(req.body);
  fs.writeFileSync("./books.json", data);
  res.sendStatus(201);
});

export default router;

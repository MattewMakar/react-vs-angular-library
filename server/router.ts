import express, { json } from "express";
import { Book } from "./Book";
import fs from "fs";

const router = express.Router();

router.get("/books", (req, res) => {
  const data = fs.readFileSync("./books.json", "utf-8");  
  res.status(200).send(JSON.parse(data));
});

router.get("/books/:id", (req, res) => {
  const stringData = fs.readFileSync("./books.json", "utf-8");
  const data = JSON.parse(stringData);
  const book = data.filter((obj: Book) => {
    return obj.title.toUpperCase().includes(req.params.id.toUpperCase());
  });
  
  res.status(200).send(book);
});
router.post("/books", (req, res) => {
  const stringData = fs.readFileSync("./books.json", "utf-8");
  let data = JSON.parse(stringData);
  
  if (!data.find((obj: Book) => obj.UUID === req.body.UUID)) {
    data.push(req.body);

    fs.writeFileSync("./books.json", JSON.stringify(data));
    res.sendStatus(201);
  } else {
    
    res.status(422).send({
      message: "UUID number already exist",
    });
  }
   
});
router.delete("/books/:id", (req, res) => {
  
  const stringData = fs.readFileSync("./books.json", "utf-8");
  
  let data = JSON.parse(stringData);
  data = data.filter((obj: Book) => obj.UUID !== req.params.id);
  fs.writeFileSync("./books.json", JSON.stringify(data));
  res.sendStatus(200);
});
router.put("/books/:id", (req, res) => {  
  const stringData = fs.readFileSync("./books.json", "utf-8");
  let data = JSON.parse(stringData);

  const dataIndex = data.findIndex((obj: Book) => obj.UUID === req.body.UUID);
  data[dataIndex]= req.body;
  fs.writeFileSync("./books.json", JSON.stringify(data));
  res.sendStatus(201);
});

export default router;

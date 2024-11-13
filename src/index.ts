import express from "express";
import itemsRoutes from "./routes/items/index";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("My API 1");
});

app.use("/items", itemsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

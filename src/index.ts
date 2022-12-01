import express from "express";
import "dotenv-safe/config";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

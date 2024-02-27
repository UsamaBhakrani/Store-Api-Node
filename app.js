require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleWare = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

app.use(express.json());

app.get("/", (req, res) =>
  res
    .status(200)
    .send("<h1>Hello</h1><a href='/api/v1/products'>Products Route</a>")
);

app.use("/api/v1/products", productsRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleWare);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log("Server Running on Port: ", port));
  } catch (error) {
    console.log(error);
  }
};

startServer();

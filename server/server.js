const express = require("express");
const dotenv = require("dotenv");
const database = require("./config/db");
const ProductRoutes = require("./routes/ProductRoutes");

const app = express();
app.use(express.json());
database();
dotenv.config();

app.use("/api/products", ProductRoutes);

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log(
    `Server is Running on PORT ${PORT} in ${process.env.NODE_MODE} mode`
  );
});

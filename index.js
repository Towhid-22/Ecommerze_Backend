const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// async function main() {
//   (await mongoose.connect(process.env.MONOGODB_URL))
// }
connectDB();
// main().then(() => console.log("Connected to MongoDB")).catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Ecommerze Backend"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

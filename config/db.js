const { default: mongoose } = require("mongoose");

async function connectDB() {
  const DB_URL = process.env.MONOGODB_URL;
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectDB;

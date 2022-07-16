const { default: mongoose } = require("mongoose");
const app = require("./app");
require("dotenv").config();

mongoose.connect(process.env.DB_CONNECTION).then(() => {
  console.log("Db is connected");
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`);
  });
});

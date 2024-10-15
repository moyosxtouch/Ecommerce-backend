const mongoose = require("mongoose");
module.exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connect success");
  } catch (error) {
    console.log(error.message);
  }
};

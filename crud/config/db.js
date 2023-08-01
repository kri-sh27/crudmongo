const { default: mongoose } = require("mongoose");

const connectToDb = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
      console.log(`connected to DB: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};
module.exports=connectToDb
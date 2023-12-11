// // const mongoose = require("mongoose");
// // const Schema = mongoose.Schema;

// // const userSchema = new Schema({
// //   name: String,
// //   email: String,
// //   password: String,
// //   age: Number,
// // });

// const uri =
//   "mongodb+srv://user1:alle1@cluster0.p3phjsx.mongodb.net/?retryWrites=true&w=majority";

// const mongoose = require("mongoose");

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// const connection = mongoose.connection;

// connection.once("open", () => {
//   console.log("MongoDB connection established successfully");
// });

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//     required: true,
//   },
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;

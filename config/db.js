const mongoose = require("mongoose");

const connect = async () => {
  return mongoose.connect("mongodb+srv://anukritinwn:anukritinwn@cluster0.p6jgqtl.mongodb.net/Users?retryWrites=true&w=majority");
};
module.exports = connect;

// mongodb+srv://salemes:salemes@cluster0.8hhyd86.mongodb.net/?retryWrites=true&w=majority

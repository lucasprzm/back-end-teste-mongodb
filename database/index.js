const mongoose = require("mongoose");
require("dotenv/config");

async function hasConnection() {
  try {
    await mongoose.connect(
      "mongodb+srv://lucas_matos:" +
        process.env.SECRET_KEY_DB +
        "@bootcamp-gama-una.no46g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    console.log("Banco de dados conectado!");
  } catch (error) {
    handleError(error);
    console.error("Erro ao tentar conectar com o banco de dados!");
  }
}
let db = {};
Object.assign(db, {
  hasConnection,
});

module.exports = db;

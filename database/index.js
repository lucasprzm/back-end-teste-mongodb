const mongoose = require("mongoose");

async function hasConnection() {
  try {
    await mongoose.connect("mongodb://localhost:27017/test");
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

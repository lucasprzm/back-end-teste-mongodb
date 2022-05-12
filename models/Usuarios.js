const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: String,
  email: String,
  senha: String,
});

module.exports = mongoose.model("Usuario", UsuarioSchema);

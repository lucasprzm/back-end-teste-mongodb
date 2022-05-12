const Usuario = require("../models/Usuarios");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const usuariosController = {
  async registro(req, res) {
    const { nome, email, senha } = req.body;
    const errors = validationResult(req);
    const novaSenha = bcrypt.hashSync(senha, 10);

    const novoUsuario = new Usuario({
      _id: new mongoose.Types.ObjectId(),
      nome: nome,
      email: email,
      senha: novaSenha,
    });
    const usuario = await Usuario.exists({ email: email });
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    if (usuario) {
      console.log(usuario);
      return res.status(400).json("Usuário já cadastrado!");
    } else {
      await novoUsuario.save();
      console.log(novoUsuario);
      return res.status(201).json(novoUsuario);
    }
  },
};

module.exports = usuariosController;

const UsuarioService = require("../services/usuario.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getUsuarios = asyncHandler(async (req, res) => {
  const params = req.query;
  const usuarios = await UsuarioService.getUsuarios(params);
  return http.response200(res, usuarios);
});

const getUsuario = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const usuario = await UsuarioService.getUsuario(id);
  return http.response200(res, usuario);
});

const createUsuario = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const usuario = await UsuarioService.createUsuario(payload);
  return http.response201(res, usuario);
});

const updateUsuario = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const usuario = await UsuarioService.updateUsuario(payload);
  return http.response200(res, usuario);
});

const deleteUsuario = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await UsuarioService.deleteUsuario(id);
  return http.response200(res);
});

module.exports = {
  getUsuarios,
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};



const CategoriaService = require("../services/categoria.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getCategorias = asyncHandler(async (req, res) => {
  const params = req.query;
  const categorias = await CategoriaService.getCategorias(params);
  return http.response200(res, categorias);
});

const getCategoria = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const categoria = await CategoriaService.getCategoria(id);
  return http.response200(res, categoria);
});

const createCategoria = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const categoria = await CategoriaService.createCategoria(payload);
  return http.response201(res, categoria);
});

const updateCategoria = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const categoria = await CategoriaService.updateCategoria(payload);
  return http.response200(res, categoria);
});

const deleteCategoria = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await CategoriaService.deleteCategoria(id);
  return http.response200(res);
});

module.exports = {
  getCategorias,
  getCategoria,
  createCategoria,
  updateCategoria,
  deleteCategoria,
};

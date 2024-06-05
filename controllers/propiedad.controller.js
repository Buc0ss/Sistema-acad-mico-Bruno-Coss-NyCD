const PropiedadService = require("../services/propiedad.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getPropiedades = asyncHandler(async (req, res) => {
  const params = req.query;
  const propiedades = await PropiedadService.getPropiedades(params);
  return http.response200(res, propiedades);
});

const getPropiedad = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const propiedad = await PropiedadService.getPropiedad(id);
  return http.response200(res, propiedad);
});

const createPropiedad = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const propiedad = await PropiedadService.createPropiedad(payload);
  return http.response201(res, propiedad);
});

const updatePropiedad = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const propiedad = await PropiedadService.updatePropiedad(payload);
  return http.response200(res, propiedad);
});

const deletePropiedad = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await PropiedadService.deletePropiedad(id);
  return http.response200(res);
});

module.exports = {
  getPropiedades,
  getPropiedad,
  createPropiedad,
  updatePropiedad,
  deletePropiedad,
};


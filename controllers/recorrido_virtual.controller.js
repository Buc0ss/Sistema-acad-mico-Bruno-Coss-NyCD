const RecorridoVirtualService = require("../services/recorrido_virtual.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getRecorridosVirtuales = asyncHandler(async (req, res) => {
  const params = req.query;
  const recorridos_virtuales = await RecorridoVirtualService.getRecorridosVirtuales(params);
  return http.response200(res, recorridos_virtuales);
});

const getRecorridoVirtual = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const recorrido_virtual = await RecorridoVirtualService.getRecorridoVirtual(id);
  return http.response200(res, recorrido_virtual);
});

const createRecorridoVirtual = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const recorrido_virtual = await RecorridoVirtualService.createRecorridoVirtual(payload);
  return http.response201(res, recorrido_virtual);
});

const updateRecorridoVirtual = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const recorrido_virtual = await RecorridoVirtualService.updateRecorridoVirtual(payload);
  return http.response200(res, recorrido_virtual);
});

const deleteRecorridoVirtual = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await RecorridoVirtualService.deleteRecorridoVirtual(id);
  return http.response200(res);
});

module.exports = {
  getRecorridosVirtuales,
  getRecorridoVirtual,
  createRecorridoVirtual,
  updateRecorridoVirtual,
  deleteRecorridoVirtual,
};


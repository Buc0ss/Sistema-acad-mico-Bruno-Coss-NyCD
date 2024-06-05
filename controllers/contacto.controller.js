const ContactoService = require("../services/contacto.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getContactos = asyncHandler(async (req, res) => {
  const params = req.query;
  const contactos = await ContactoService.getContactos(params);
  return http.response200(res, contactos);
});

const getContacto = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const contacto = await ContactoService.getContacto(id);
  return http.response200(res, contacto);
});

const createContacto = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const contacto = await ContactoService.createContacto(payload);
  return http.response201(res, contacto);
});

const updateContacto = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const contacto = await ContactoService.updateContacto(payload);
  return http.response200(res, contacto);
});

const deleteContacto = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await ContactoService.deleteContacto(id);
  return http.response200(res);
});

module.exports = {
  getContactos,
  getContacto,
  createContacto,
  updateContacto,
  deleteContacto,
};


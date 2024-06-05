const ImagenVideoService = require("../services/imagen_video.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getImagenesVideos = asyncHandler(async (req, res) => {
  const params = req.query;
  const imagenes_videos = await ImagenVideoService.getImagenesVideos(params);
  return http.response200(res, imagenes_videos);
});

const getImagenVideo = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const imagen_video = await ImagenVideoService.getImagenVideo(id);
  return http.response200(res, imagen_video);
});

const createImagenVideo = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const imagen_video = await ImagenVideoService.createImagenVideo(payload);
  return http.response201(res, imagen_video);
});

const updateImagenVideo = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const imagen_video = await ImagenVideoService.updateImagenVideo(payload);
  return http.response200(res, imagen_video);
});

const deleteImagenVideo = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await ImagenVideoService.deleteImagenVideo(id);
  return http.response200(res);
});

module.exports = {
  getImagenesVideos,
  getImagenVideo,
  createImagenVideo,
  updateImagenVideo,
  deleteImagenVideo,
};


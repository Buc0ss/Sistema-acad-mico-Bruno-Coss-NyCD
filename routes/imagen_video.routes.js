const router = require("express").Router();

const imagenVideoController = require("../controllers/imagen_video.controller");

router.get(
  "/",
  imagenVideoController.getImagenesVideos
);
router.get(
  "/:id",
  imagenVideoController.getImagenVideo
);
router.post(
  "/",
  imagenVideoController.createImagenVideo
);
router.put(
  "/:id",
  imagenVideoController.updateImagenVideo
);
router.delete(
  "/:id",
  imagenVideoController.deleteImagenVideo
);

module.exports = router;




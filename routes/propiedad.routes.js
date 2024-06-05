const router = require("express").Router();

const propiedadController = require("../controllers/propiedad.controller");

router.get(
  "/",
  propiedadController.getPropiedades
);
router.get(
  "/:id",
  propiedadController.getPropiedad
);
router.post(
  "/",
  propiedadController.createPropiedad
);
router.put(
  "/:id",
  propiedadController.updatePropiedad
);
router.delete(
  "/:id",
  propiedadController.deletePropiedad
);

module.exports = router;




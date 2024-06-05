const router = require("express").Router();

const recorridoVirtualController = require("../controllers/recorrido_virtual.controller");

router.get(
  "/",
  recorridoVirtualController.getRecorridosVirtuales
);
router.get(
  "/:id",
  recorridoVirtualController.getRecorridoVirtual
);
router.post(
  "/",
  recorridoVirtualController.createRecorridoVirtual
);
router.put(
  "/:id",
  recorridoVirtualController.updateRecorridoVirtual
);
router.delete(
  "/:id",
  recorridoVirtualController.deleteRecorridoVirtual
);

module.exports = router;


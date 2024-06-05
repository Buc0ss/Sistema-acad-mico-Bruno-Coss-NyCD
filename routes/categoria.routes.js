const router = require("express").Router();

const categoriaController = require("../controllers/categoria.controller");

router.get(
  "/",
  categoriaController.getCategorias
);
router.get(
  "/:id",
  categoriaController.getCategoria
);
router.post(
  "/",
  categoriaController.createCategoria
);
router.put(
  "/:id",
  categoriaController.updateCategoria
);
router.delete(
  "/:id",
  categoriaController.deleteCategoria
);

module.exports = router;


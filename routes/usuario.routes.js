const router = require("express").Router();

const usuarioController = require("../controllers/usuario.controller");

router.get(
  "/",
  usuarioController.getUsuarios
);
router.get(
  "/:id",
  usuarioController.getUsuario
);
router.post(
  "/",
  usuarioController.createUsuario
);
router.put(
  "/:id",
  usuarioController.updateUsuario
);
router.delete(
  "/:id",
  usuarioController.deleteUsuario
);

module.exports = router;



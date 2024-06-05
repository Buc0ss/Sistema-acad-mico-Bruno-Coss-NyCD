const router = require("express").Router();

const contactoController = require("../controllers/contacto.controller");

router.get(
  "/",
  contactoController.getContactos
);
router.get(
  "/:id",
  contactoController.getContacto
);
router.post(
  "/",
  contactoController.createContacto
);
router.put(
  "/:id",
  contactoController.updateContacto
);
router.delete(
  "/:id",
  contactoController.deleteContacto
);

module.exports = router;

const router = require("express").Router();

const v1 = "v1";

router.use(`/${v1}/contactos`, require("./contacto.routes"));
router.use(`/${v1}/categorias`, require("./categoria.routes"));
router.use(`/${v1}/usuarios`, require("./usuario.routes"));
router.use(`/${v1}/propiedades`, require("./propiedad.routes"));
router.use(`/${v1}/recorridos_virtuales`, require("./recorrido_virtual.routes"));
router.use(`/${v1}/imagenes_videos`, require("./imagen_video.routes"));
module.exports = router;

const Propiedad = require("../models").propiedad;

class PropiedadService {
  static async getPropiedades(params) {
    return await Propiedad.findAll(params);
  }

  static async getPropiedad(id) {
    return await Propiedad.findOne({ where: { id } });
  }

  static async createPropiedad(propiedad) {
    return await Propiedad.create({
      fk_usuario: propiedad.fk_usuario,
      ubicacion: propiedad.ubicacion,
      precio: propiedad.precio,
      nro_habitaciones: propiedad.nro_habitaciones,
      descripcion: propiedad.descripcion,
      estado: propiedad.estado,
      fk_categoria: propiedad.fk_categoria,
    });
  }

  static async updatePropiedad(propiedad) {
    const instance = await this.getPropiedad(propiedad.id);

    if (!instance) return null;

    return instance.update({
      fk_usuario: propiedad.fk_usuario,
      ubicacion: propiedad.ubicacion,
      precio: propiedad.precio,
      nro_habitaciones: propiedad.nro_habitaciones,
      descripcion: propiedad.descripcion,
      estado: propiedad.estado,
      fk_categoria: propiedad.fk_categoria,
    });
  }

  static async deletePropiedad(id) {
    const instance = await this.getPropiedad(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = PropiedadService;


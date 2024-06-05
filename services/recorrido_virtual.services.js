const RecorridoVirtual = require("../models").recorrido_virtual;

class RecorridoVirtualService {
  static async getRecorridosVirtuales(params) {
    return await RecorridoVirtual.findAll(params);
  }

  static async getRecorridoVirtual(id) {
    return await RecorridoVirtual.findOne({ where: { id } });
  }

  static async createRecorridoVirtual(recorrido_virtual) {
    return await RecorridoVirtual.create({
      fk_propiedad: recorrido_virtual.fk_propiedad,
      enlace_recorrido: recorrido_virtual.enlace_recorrido,
      descripcion: recorrido_virtual.descripcion,
    });
  }

  static async updateRecorridoVirtual(recorrido_virtual) {
    const instance = await this.getRecorridoVirtual(recorrido_virtual.id);

    if (!instance) return null;

    return instance.update({
      fk_propiedad: recorrido_virtual.fk_propiedad,
      enlace_recorrido: recorrido_virtual.enlace_recorrido,
      descripcion: recorrido_virtual.descripcion,
    });
  }

  static async deleteRecorridoVirtual(id) {
    const instance = await this.getRecorridoVirtual(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = RecorridoVirtualService;



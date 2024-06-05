const Categoria = require("../models").categoria;

class CategoriaService {
  static async getCategorias(params) {
    return await Categoria.findAll(params);
  }

  static async getCategoria(id) {
    return await Categoria.findOne({ where: { id } });
  }

  static async createCategoria(categoria) {
    return await Categoria.create({
      nombre: categoria.nombre,
    });
  }

  static async updateCategoria(categoria) {
    const instance = await this.getCategoria(categoria.id);

    if (!instance) return null;

    return instance.update({
      nombre: categoria.nombre,
    });
  }

  static async deleteCategoria(id) {
    const instance = await this.getCategoria(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = CategoriaService;

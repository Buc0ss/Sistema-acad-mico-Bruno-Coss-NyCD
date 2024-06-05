const Contacto = require("../models").contacto;

class ContactoService {
  static async getContactos(params) {
    return await Contacto.findAll(params);
  }

  static async getContacto(id) {
    return await Contacto.findOne({ where: { id } });
  }

  static async createContacto(contacto) {

console.log(contacto)    
    return await Contacto.create({
      fk_usuario_emisor: contacto.fk_usuario_emisor,
      fk_usuario_receptor: contacto.fk_usuario_receptor,
      mensajes: contacto.mensajes,
      fecha: contacto.fecha,
    });
  }

  static async updateContacto(contacto) {
    const instance = await this.getContacto(contacto.id);

    if (!instance) return null;

    return instance.update({
      fk_usuario_emisor: contacto.fk_usuario_emisor,
      fk_usuario_receptor: contacto.fk_usuario_receptor,
      mensajes: contacto.mensajes,
      fecha: contacto.fecha,
    });
  }

  static async deleteContacto(id) {
    const instance = await this.getContacto(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = ContactoService;


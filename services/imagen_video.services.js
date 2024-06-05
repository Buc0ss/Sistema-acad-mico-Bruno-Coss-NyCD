const ImagenVideo = require("../models").imagen_video;

class ImagenVideoService {
  static async getImagenesVideos(params) {
    return await ImagenVideo.findAll(params);
  }

  static async getImagenVideo(id) {
    return await ImagenVideo.findOne({ where: { id } });
  }

  static async createImagenVideo(imagen_video) {
    return await ImagenVideo.create({
      fk_propiedad: imagen_video.fk_propiedad,
      tipo: imagen_video.tipo,
      URL: imagen_video.URL,
    });
  }

  static async updateImagenVideo(imagen_video) {
    const instance = await this.getImagenVideo(imagen_video.id);

    if (!instance) return null;

    return instance.update({
      fk_propiedad: imagen_video.fk_propiedad,
      tipo: imagen_video.tipo,
      URL: imagen_video.URL,
    });
  }

  static async deleteImagenVideo(id) {
    const instance = await this.getImagenVideo(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = ImagenVideoService;




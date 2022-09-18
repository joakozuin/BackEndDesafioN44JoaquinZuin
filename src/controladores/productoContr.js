import  ProductoServicio from '../servicios/productoServ.js' 



export default class ProductoContr{
  constructor() {

    this.productoServicio=new ProductoServicio()
  }

  async getAll(){
    const productos=await this.productoServicio.getAll()
   return productos
  }

  async createProducto(prod){

    const producto=await this.productoServicio.createProducto(prod)

   return producto
  }

  async deleteProducto(id){

    const producto=await this.productoServicio.deleteProducto(id)

   return producto
  }

  async updateProducto(id,prod){

    const producto=await this.productoServicio.updateProducto(id,prod)

   return producto
  }
}
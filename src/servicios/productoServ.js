
import ProductoDaoGraph from '../persistencia/Daos/productoDaoGraph.js'



export default class ProductoServicio {

    constructor() {

        this.productoDao=new ProductoDaoGraph()
      }
    
      async getAll(){
        const productos= await this.productoDao.findAllProductos()
       return productos
      }

      async createProducto(prod){
        const producto= await this.productoDao.createOneProducto(prod)
       return producto
      }

      async deleteProducto(id){
        const producto= await this.productoDao.deleteOneProducto(id)
       return producto
      }

      async updateProducto(id,prod){
        const producto= await this.productoDao.updateOneProducto(id,prod)
       return producto
      }
}
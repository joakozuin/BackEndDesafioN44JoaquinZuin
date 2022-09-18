import productoModel from '../modelo/Productos.js'

export default class ProductoDaoGraph {
    
        async findAllProductos(){
            try {
                const productos=await productoModel.find()
    
                return productos

            } catch (error) {

                console.log('Ha ocurrido un error al leer los Productos de la BD:'+error)
            }

         
        }

        async createOneProducto(prod){
            try {
            
                const producto=new productoModel(prod)
                await producto.save()
    
                return producto

            } catch (error) {

                console.log('Ha ocurrido un error al crear un Producto en la BD:'+error)
            }

         
        }

        async deleteOneProducto(id){
            try {
            
                const producto=await productoModel.findByIdAndDelete(id)
    
                return producto

            } catch (error) {

                console.log('Ha ocurrido un error al borrar un Producto en la BD:'+error)
            }

         
        }

        async updateOneProducto(id,prod){
            try {
            
                const producto=await productoModel.findByIdAndUpdate(id,prod,{new:true})
    
                return producto

            } catch (error) {

                console.log('Ha ocurrido un error al modificar un Producto en la BD:'+error)
            }

         
        }
      
}
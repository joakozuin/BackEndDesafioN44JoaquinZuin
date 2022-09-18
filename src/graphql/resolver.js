
import ProductoControlador from '../controladores/productoContr.js'

const productoControlador = new ProductoControlador()

export const resolvers = {
  Query: {
    getAllProductos: () => {
      return productoControlador.getAll();
    }
  },

 Mutation: {
        //(roots,arg)
        //Destructuramos arg.input que esta en schema.js
      addProducto: async (_,{input}) => {

        return productoControlador.createProducto(input);

      },
      deleteProducto: async (_,{id}) => {

        return productoControlador.deleteProducto(id);
     },
     updateProducto: async (_,{id,input}) => {

        return productoControlador.updateProducto(id,input);
     },
   }
  
};
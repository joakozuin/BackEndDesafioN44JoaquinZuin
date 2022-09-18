//Aca escribimos el lenguaje Graphql
export  const typeDefs=`
  type Query{
    getAllProductos:[Producto]  
  }


  type Mutation{
    addProducto(input:ProductoInput): Producto
    deleteProducto(id:ID):Producto
    updateProducto(id:ID,input:ProductoInput): Producto
  }

  type Producto{
    id:ID
    nombre:String
    precio:Float
    cant:Int
    descripcion:String
  }


  input ProductoInput{
    nombre:String
    precio:Float
    cant:Int
    descripcion:String
  }


`



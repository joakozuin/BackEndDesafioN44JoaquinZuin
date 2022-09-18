import {Schema, model} from 'mongoose'

const productoSchema=new Schema({
  nombre:{type:String,},
  precio:{type:Number,required:true},
  cant:{type:Number,required:true},
  descripcion:{type:String,required:true}

})

export default model('productos',productoSchema)
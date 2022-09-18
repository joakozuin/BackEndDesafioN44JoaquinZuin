import mongoose from 'mongoose'

    export const conectarBD =async ()=>{
    try {
        await  mongoose.connect('mongodb+srv://joakoBE:joakoBE@cluster0.pgubd90.mongodb.net/joaGraphql?retryWrites=true&w=majority ',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log('Conectado a la base de datos MongoDB con éxito')
    } catch (error) {

        console.log('Ha ocurrido un error al conectar la BD MongoDB:'+ error)
        
    }
}
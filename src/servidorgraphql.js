import express from "express";
import {graphqlHTTP} from 'express-graphql';
import {makeExecutableSchema} from '@graphql-tools/schema'
import {typeDefs} from './graphql/schema.js'
import {resolvers} from './graphql/resolver.js'
import {conectarBD} from './persistencia/db/db_index.js'


import path from 'path';
import { fileURLToPath } from "url";
const __dirname=path.dirname(fileURLToPath(import.meta.url))
import dotenv from 'dotenv';
dotenv.config();

const app = express();

//Conecta a la base de datos MongoDB atlas
//*************************************** */
const con=conectarBD();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(process.cwd() + "\\public"));
app.set('views', __dirname+ "\\src\\vistas");

const schema=makeExecutableSchema({
 typeDefs:typeDefs,
 resolvers:resolvers
});

app.use('/graphql', graphqlHTTP({
 schema:schema,
 graphiql:true

}))




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor GraphQl, escuchando al puerto ${PORT}`);
});

import db from "../db/connection.js";
import { DataTypes } from "sequelize";

const Autor = db.define('autor',{
    codAutor:{
        type:DataTypes.INTEGER,
        primaryKey :true
    },
    nombreAutor:{
        type:DataTypes.STRING,
        allowNull:false
    },
    apellidoAutor:{
        type:DataTypes.STRING,
        allowNull:false
    },
    nacimientoMuerte:{
        type:DataTypes.STRING,
        allowNull:false
    }
});


export default Autor;
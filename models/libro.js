import db from "../db/connection.js";
import { DataTypes } from "sequelize";

const Libro = db.define('libro',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey :true
    },
    ISBN:{
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
            is: /^\d{3}-\d{7}-\d{3}$/ // Expresión regular para el formato "NNN-NNNNNNN-NNN"
        }
    },
    titulo:{
        type:DataTypes.STRING,
        allowNull:false

    },
    paginas:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    codAutor:{
        type:DataTypes.INTEGER,
        allowNull:false
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
    },
    tipoAutor:{ 
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
            isIn: [['PRINCIPAL', 'COAUTOR']] // Lista de valores permitidos: 'PRINCIPAL' y 'COAUTOR'
        }
    },
    diasPrestamo:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
});






export default Libro;
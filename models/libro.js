import db from "../db/connection.js";
import { DataTypes } from "sequelize";
import AutorLibro from "./autorLibro.js";
import Autor from "./autor.js";
import HistorialPrestamo from "./historialPrestamos.js";

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
    diasPrestamo:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
});

Libro.belongsToMany(Autor,{
    through:AutorLibro
})
Autor.belongsToMany(Libro,{
    through:AutorLibro
});

Libro.hasMany(HistorialPrestamo);
HistorialPrestamo.belongsTo(Libro);






export default Libro;
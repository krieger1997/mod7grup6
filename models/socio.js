import db from "../db/connection.js";
import { DataTypes } from "sequelize";
import HistorialPrestamo from "./historialPrestamos.js";

const Socio =db.define('socio',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    rut:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            is: /^\d{7,8}-\d$/ // Expresión regular para permitir 7 u 8 dígitos antes del guion
        }
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    direccion :{
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            is: /^\d{8}$/ // Expresión regular para validar que sean exactamente 8 números
        }
    }
})

Socio.hasMany(HistorialPrestamo);
HistorialPrestamo.belongsTo(Socio);

export default Socio;
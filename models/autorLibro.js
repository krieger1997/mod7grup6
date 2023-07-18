import db from "../db/connection.js";
import { DataTypes } from "sequelize";

const AutorLibro = db.define('autorLibro',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey :true
    },
    tipoAutor:{ 
        type:DataTypes.ENUM('PRINCIPAL', 'COAUTOR'),
        allowNull:false,
    }
});






export default AutorLibro;
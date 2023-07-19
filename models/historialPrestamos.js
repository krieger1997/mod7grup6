import db from "../db/connection.js";
import { DataTypes } from "sequelize";

const HistorialPrestamo = db.define('historialPrestamo',{

    fechaInicio:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    fechaFin:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    fechaRealDevolucion:{
        type:DataTypes.DATEONLY,
        allowNull:true
    }

},{
    hooks: { 
        beforeValidate: async (historialPrestamo,options)=>{
            const prestado = await HistorialPrestamo.findOne({
                where:{
                    libroId:historialPrestamo.libroId,
                    fechaRealDevolucion:null
                }
            });
            if(prestado){
                throw new Error("Libro está prestado!");
            } 

            const socioPendiente = await HistorialPrestamo.findOne({
                where: {
                    socioId: historialPrestamo.socioId,
                    fechaRealDevolucion:null
                }
            })
            if(socioPendiente){
                throw new Error("Socio tiene devolucion pendiente!");
            }
    }}
})

export default HistorialPrestamo;
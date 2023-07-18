import db from "../db/connection.js";
import { DataTypes } from "sequelize";

const HistorialPrestamo = db.define('historialPrestamo',{

    fechaInicio:{
        type:DataTypes.DATE,
        allowNull:false
    },
    fechaFin:{
        type:DataTypes.DATE,
        allowNull:false
    },
    fechaRealDevolucion:{
        type:DataTypes.DATE,
        allowNull:true
    }

},{
    hooks: { 
        beforeValidate: async (historialPrestamo,options)=>{
            const prestado = await HistorialPrestamo.findOne({
                where:{
                    LibroId:historialPrestamo.LibroId,
                    fechaRealDevolucion:null
                }
            });
            if(prestado){
                throw new Error("Libro está prestado!");
            } 

            const socioPendiente = await HistorialPrestamo.findOne({
                where: {
                    SocioId: historialPrestamo.SocioId,
                    fechaRealDevolucion:null
                }
            })
            if(socioPendiente){
                throw new Error("Socio tiene devolucion pendiente!");
            }
    }}
})

export default HistorialPrestamo;
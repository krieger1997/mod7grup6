import db from "../db/connection.js";
import { DataTypes } from "sequelize";

const HistorialPrestamo = db.define('HistorialPrestamo',{

    fechaInicio:{

    },
    fechaFin:{

    },
    fechaRealDevolucion:{
        
    }

})
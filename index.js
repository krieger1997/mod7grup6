// https://drive.google.com/file/d/1H8ImdwcaJNKDxX6SUEATqVImDvLmc56j/view
import db from "./db/connection.js";
import Autor from "./models/autor.js";
import AutorLibro from "./models/autorLibro.js";
import HistorialPrestamo from "./models/historialPrestamos.js";
import Libro from "./models/libro.js";
import Socio from "./models/socio.js";
import { Op, Sequelize } from "sequelize";


(async () => {
    try {
        await db.sync({ force: true });
        console.log('Las tablas se han creado correctamente.');
        await ingresoData();
        console.log("")
        console.log("")
        console.log("")
        console.log("")
        console.log("---------------------- CONSULTAS ----------------------")
        await consultas();
    } catch (error) {
        console.error('Error al crear las tablas:', error);
    } finally {
        db.close();
    }
})();


const ingresoData = async ()=>{
    const soc1 = await Socio.create({
        rut:'1111111-1',
        nombre: 'JUAN',
        apellido:'SOTO',
        direccion:'AVENIDA 1, SANTIAGO',
        telefono:911111111,
    });
    const soc2 = await Socio.create({
        rut:'2222222-2',
        nombre: 'ANA',
        apellido:'PÉREZ',
        direccion:'PASAJE 2, SANTIAGO',
        telefono:922222222,
    });
    const soc3 = await Socio.create({
        rut:'3333333-3',
        nombre: 'SANDRA',
        apellido:'AGUILAR',
        direccion:'AVENIDA 2, SANTIAGO',
        telefono:933333333,
    });
    const soc4 = await Socio.create({
        rut:'4444444-4',
        nombre: 'ESTEBAN',
        apellido:'JEREZ',
        direccion:'AVENIDA 3, SANTIAGO',
        telefono:944444444,
    });
    const soc5 = await Socio.create({
        rut:'5555555-5',
        nombre: 'SILVANA',
        apellido:'MUÑOZ',
        direccion:'PASAJE 3, SANTIAGO',
        telefono:955555555,
    });



    const autor1 = await Autor.create({
        codAutor:3,
        nombreAutor:'JOSE',
        apellidoAutor:'SALGADO',
        nacimiento:1968,
        muerte:2020
    })
    const autor2 = await Autor.create({
        codAutor:4,
        nombreAutor:'ANA',
        apellidoAutor:'SALGADO',
        nacimiento:1972
    })
    const autor3 = await Autor.create({
        codAutor:1,
        nombreAutor:'ANDRÉS',
        apellidoAutor:'ULLOA',
        nacimiento:1982
    })
    const autor4 = await Autor.create({
        codAutor:2,
        nombreAutor:'SERGIO',
        apellidoAutor:'MARDONES',
        nacimiento:1950,
        muerte:2012
    })
    const autor5 = await Autor.create({
        codAutor:5,
        nombreAutor:'MARTIN',
        apellidoAutor:'PORTA',
        nacimiento:1976
    })
    
    const libro1 = await Libro.create({
        ISBN:'111-1111111-111',
        titulo:'CUENTOS DE TERROR',
        paginas:344,
        diasPrestamo:7
    });


    const libro2 = await Libro.create({
        ISBN: '222-2222222-222',
        titulo: 'POESÍAS CONTEMPORANEAS',
        paginas: 167,
        diasPrestamo: 7
    });    

    const libro3 = await Libro.create({
        ISBN: '333-3333333-333',
        titulo: 'HISTORIA DE ASIA',
        paginas: 511,
        diasPrestamo: 14
    }); 

    const libro4 = await Libro.create({
        ISBN: '444-4444444-444',
        titulo: 'MANUAL DE MECANICA',
        paginas: 298,
        diasPrestamo: 14
    }); 

    const autorLibro1 = await AutorLibro.create({
        tipoAutor:'PRINCIPAL',//'PRINCIPAL', 'COAUTOR'
        libroId:1,
        autorCodAutor:3
    });
    const autorLibro2 = await AutorLibro.create({
        tipoAutor:'COAUTOR',//'PRINCIPAL', 'COAUTOR'
        libroId:1,
        autorCodAutor:4
    });
    const autorLibro3 = await AutorLibro.create({
        tipoAutor:'PRINCIPAL',//'PRINCIPAL', 'COAUTOR'
        libroId:2,
        autorCodAutor:1
    });
    const autorLibro4 = await AutorLibro.create({
        tipoAutor:'PRINCIPAL',//'PRINCIPAL', 'COAUTOR'
        libroId:3,
        autorCodAutor:2
    });
    const autorLibro5 = await AutorLibro.create({
        tipoAutor:'PRINCIPAL',//'PRINCIPAL', 'COAUTOR'
        libroId:4,
        autorCodAutor:5
    });


    const historialPrestamo1 = await HistorialPrestamo.create({
        fechaInicio: '2020-01-20',
        fechaFin:'2020-01-27',
        fechaRealDevolucion:'2020-01-27',
        libroId:1,
        socioId:1
    });

    const historialPrestamo2 = await HistorialPrestamo.create({
        fechaInicio: '2020-01-20',
        fechaFin:'2020-01-27',
        fechaRealDevolucion:'2020-01-30',
        libroId:2,
        socioId:5
    });

    const historialPrestamo3 = await HistorialPrestamo.create({
        fechaInicio: '2020-01-22',
        fechaFin:'2020-02-05',
        fechaRealDevolucion:'2020-01-30',
        libroId:3,
        socioId:3
    });

    const historialPrestamo4 = await HistorialPrestamo.create({
        fechaInicio: '2020-01-23',
        fechaFin:'2020-02-06',
        fechaRealDevolucion:'2020-01-30',
        libroId:4,
        socioId:4
    });

    const historialPrestamo5 = await HistorialPrestamo.create({
        fechaInicio: '2020-01-27',
        fechaFin:'2020-02-03',
        fechaRealDevolucion:'2020-02-04',
        libroId:1,
        socioId:2
    });
    const historialPrestamo6 = await HistorialPrestamo.create({
        fechaInicio: '2020-01-31',
        fechaFin:'2020-02-14',
        fechaRealDevolucion:'2020-02-12',
        libroId:4,
        socioId:1
    });
    const historialPrestamo7 = await HistorialPrestamo.create({
        fechaInicio: '2020-01-31',
        fechaFin:'2020-02-07',
        fechaRealDevolucion:'2020-02-12',
        libroId:2,
        socioId:3
    });


    
    


}

const consultas = async ()=>{
    
    //libros de menos de 300 paginas
    await Libro.findAll({
        where: {
          paginas: {
            [Op.lt]:300
          }
        }
      }).then((res)=>console.log("LIBROS CON MENOS DE 300 PAG: ",res.map(libro=>  libro.dataValues.titulo)))


    //   Mostrar todos los autores que hayan nacido después del 01-01-1970.

    await Autor.findAll({
        where: {
          nacimiento: {
            [Op.gte]:1970
          }
        }
      }).then((res)=>console.log("AUTORES NACIDOS DESDE 1970: ",res.map(autor=>  `${autor.dataValues.nombreAutor} ${autor.dataValues.apellidoAutor}`)))


    //   ¿Cuál es el libro más solicitado?
    await HistorialPrestamo.count({
        group:'libroId'
    }).then(res=>console.log(res))


    // await HistorialPrestamo.findAll({
    //     attributes:['libroId',db.literal(`count(*)`)],
        
    //     group: 'libroId'
    // },
    // ).then(res=>console.log(res))

      
}
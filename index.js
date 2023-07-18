// https://drive.google.com/file/d/1H8ImdwcaJNKDxX6SUEATqVImDvLmc56j/view
import db from "./db/connection.js";
import Autor from "./models/autor.js";
import AutorLibro from "./models/autorLibro.js";
import HistorialPrestamo from "./models/historialPrestamos.js";
import Libro from "./models/libro.js";
import Socio from "./models/socio.js";


(async () => {
    try {
        await db.sync({ force: true });
        console.log('Las tablas se han creado correctamente.');
        await ingresoData();
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



    const autor1 = Autor.create({
        codAutor:3,
        nombre:'JOSE',
        apellido:'SALGADO',
        nacimientoMuerte:'1968-2020'
    })
    const autor2 = Autor.create({
        codAutor:4,
        nombre:'ANA',
        apellido:'SALGADO',
        nacimientoMuerte:'1972-'
    })
    const autor3 = Autor.create({
        codAutor:1,
        nombre:'ANDRÉS',
        apellido:'ULLOA',
        nacimientoMuerte:'1982-'
    })
    const autor4 = Autor.create({
        codAutor:2,
        nombre:'SERGIO',
        apellido:'MARDONES',
        nacimientoMuerte:'1950-2012'
    })
    const autor5 = Autor.create({
        codAutor:5,
        nombre:'MARTIN',
        apellido:'PORTA',
        nacimientoMuerte:'1976-'
    })
    




}
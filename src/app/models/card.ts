/*
    MODELO= Plantilla que representa a un tipo de objeto, compartiendo 
    caracteristicas generales y similares

    INSTANCIAS= Copia de la CLASE o MODELO del objeto, que tenia definido sus propias caracteristicas

    Ej: Persona-> trabajador, estudiante, veterinario
    Ej: Animal-> perro,gato,caballo

    INTERFACES= MODELO/CLASE (concepto de Programcacion Orientada A Objetos)
*/

export interface Card {
    
        idProducto: string;
        nombre: string;
        precio: number;
        descripcion: string;
        categoria: string;
        imagen: string;
        alt: string;
    
}

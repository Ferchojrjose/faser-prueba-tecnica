export class Tarea {

    public seleccionada: boolean = false; // Para controlar si la tarea está seleccionada
    public destacada: boolean; // Nueva propiedad para tareas destacadas

    constructor(
        public id: number,
        public titulo: string,
        public minutos: number,
    ) { 
        this.destacada = false; // Inicializar la propiedad destacada
    }
}
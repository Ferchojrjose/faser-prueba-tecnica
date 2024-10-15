export class Tarea {

    public seleccionada: boolean = false; // Para controlar si la tarea está seleccionada
    public destacada: boolean = false; // Para controlar si la tarea está destacada

    constructor(
        public id: number,
        public titulo: string,
        public minutos: number,
    ) { }
}
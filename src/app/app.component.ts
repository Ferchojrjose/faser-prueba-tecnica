import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Tarea } from './tarea';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	tareas: Tarea[];
	nuevaTarea: Tarea = new Tarea(0, '', 0); // Objeto para almacenar nueva tarea
	ordenAscendente: boolean = true; // Para controlar el orden

	constructor(
		public service: AppService,
	) { }

	ngOnInit() {
		this.obtenerTareas();
	}

	async obtenerTareas() {
		this.tareas = await this.service.obtenerTareas();
	}

	// Método para agregar una nueva tarea
	agregarTarea() {
		if (this.nuevaTarea.titulo && this.nuevaTarea.minutos) {
			this.nuevaTarea.id = this.tareas.length + 1; // Asignar un nuevo ID
			this.tareas.push({ ...this.nuevaTarea, seleccionada: false, destacada: false });
			this.nuevaTarea = new Tarea(0, '', 0); // Reiniciar el formulario
		}
	}


	// Método para eliminar una tarea
	eliminarTareas() {
		this.tareas = this.tareas.filter(tarea => !tarea.seleccionada);
	}


	// Método para cambiar el estado de una tarea
	ordenar(propiedad: string) {
		this.ordenAscendente = !this.ordenAscendente; // Cambiar el orden
		this.tareas.sort((a, b) => this.ordenAscendente ? (a[propiedad] > b[propiedad] ? 1 : -1) : (a[propiedad] < b[propiedad] ? 1 : -1));
	}


	// Método para cambiar el estado de una tarea
	marcarDestacadas() {
		this.tareas.forEach(tarea => {
			if (tarea.seleccionada) {
				tarea.destacada = !tarea.destacada;
			}
		});
	}


	// Método para cambiar el estado de una tarea
	ordenarAleatorio() {
		this.tareas = this.tareas.sort(() => Math.random() - 0.5);
	}
}

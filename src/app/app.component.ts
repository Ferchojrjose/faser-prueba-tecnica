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

	constructor(
		public service: AppService,
	) { }

	ngOnInit() {
		this.obtenerTareas();
	}

	async obtenerTareas() {
		this.tareas = await this.service.obtenerTareas();
	}


	agregarTarea() {
		if (this.nuevaTarea.titulo && this.nuevaTarea.minutos) {
			this.nuevaTarea.id = this.tareas.length + 1; // Asignar un nuevo ID
			this.tareas.push({ ...this.nuevaTarea, seleccionada: false, destacada: false });
			this.nuevaTarea = new Tarea(0, '', 0); // Reiniciar el formulario
		}
	}


	eliminarTareas() {
        this.tareas = this.tareas.filter(tarea => !tarea.seleccionada);
    }
}

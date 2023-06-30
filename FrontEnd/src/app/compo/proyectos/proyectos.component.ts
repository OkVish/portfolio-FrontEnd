import { Component, OnInit } from "@angular/core";
import { Proyecto } from "src/app/model/proyecto";
import { ProyectoService } from "src/app/services/proyecto.service";

@Component({
    selector: 'app-proyecto',
    templateUrl: './proyectos.component.html',
    styleUrls: ['./proyectos.component.css']
})
export class ProyectoComponent implements OnInit {
    public proyectos: Proyecto[] = [];
    public newProyecto: Proyecto = {
        nombrepr: '',
        urlgit: '',
        urlpr: '',
        imgurl: '',
        id: 0
    }; 
    public selectedProyecto: Proyecto = {
        nombrepr: '',
        urlgit: '',
        urlpr: '',
        imgurl: '',
        id: 0
    }; 

    constructor(private proyectoService: ProyectoService) { }

    ngOnInit(): void {
        this.getProyectos();
    }

    getProyectos(): void {
        this.proyectoService.getProyecto().subscribe(
            (proyectos: Proyecto[]) => {
                this.proyectos = proyectos;
            },
            (error: any) => {
                console.error(error);
            }
        );
    }

    addProyecto(proyecto: Proyecto): void {
        this.proyectoService.addProyecto(proyecto).subscribe(
            (newProyecto: Proyecto) => {
                this.proyectos.push(newProyecto);
            },
            (error: any) => {
                console.error(error);
            }
        );
    }

    updateProyecto(proyecto: Proyecto): void {
        this.proyectoService.updateProyecto(proyecto).subscribe(
            (updatedProyecto: Proyecto) => {
                const index = this.proyectos.findIndex(p => p.id === updatedProyecto.id);
                if (index !== -1) {
                    this.proyectos[index] = updatedProyecto;
                }
            },
            (error: any) => {
                console.error(error);
            }
        );
    }

    deleteProyecto(proyectoId: number): void {
        this.proyectoService.deleteProyecto(proyectoId).subscribe(
            () => {
                this.proyectos = this.proyectos.filter(p => p.id !== proyectoId);
            },
            (error: any) => {
                console.error(error);
            }
        );
    }
}

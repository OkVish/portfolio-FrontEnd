import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiecia';
import { ExperienciaService } from '../../services/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public experiencias: Experiencia[] = [];
  public newExperiencia: Experiencia = {
    id: 0,
    nombreexp: '',
    descripcionexp: '',
    badges: '',
    inicioexp: new Date,
    finexp: new Date
  }; 
  public selectedExperiencia: Experiencia = {
    id: 0,
    nombreexp: '',
    descripcionexp: '',
    badges: '',
    inicioexp: new Date,
    finexp: new Date
  }; 

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.getExperiencias();
  }

  getExperiencias(): void {
    this.experienciaService.getExperiencia().subscribe(
      (experiencias: Experiencia[]) => {
        this.experiencias = experiencias;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  addExperiencia(experiencia: Experiencia): void {
    this.experienciaService.addExperiencia(experiencia).subscribe(
      (newExperiencia: Experiencia) => {
        this.experiencias.push(newExperiencia);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  updateExperiencia(experiencia: Experiencia): void {
    this.experienciaService.updateExperiencia(experiencia).subscribe(
      (updatedExperiencia: Experiencia) => {
        const index = this.experiencias.findIndex(e => e.id === updatedExperiencia.id);
        if (index !== -1) {
          this.experiencias[index] = updatedExperiencia;
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  deleteExperiencia(experienciaId: number): void {
    this.experienciaService.deleteExperiencia(experienciaId).subscribe(
      () => {
        this.experiencias = this.experiencias.filter(e => e.id !== experienciaId);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
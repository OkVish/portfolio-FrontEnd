import { environment } from 'src/app/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Experiencia } from 'src/app/model/experiecia';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}/api/exp`);
  }
  public addExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(`${this.apiServerUrl}/api/exp`, experiencia);
  }
  public updateExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(`${this.apiServerUrl}/api/exp`, experiencia);
  }
  public deleteExperiencia(experienciaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/exp/${experienciaId}`);
  }
}
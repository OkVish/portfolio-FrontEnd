import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments';
import { Education } from 'src/app/model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getEducation():Observable<Education[]> {
    return this.http.get<Education[]>(`${this.apiServerUrl}/api/edu`);
  }
  public addEducation(education: Education): Observable<Education> {
    return this.http.post<Education>(`${this.apiServerUrl}/api/edu`,education);
  }
  public updateEducation(education: Education): Observable<Education> {
    return this.http.put<Education>(`${this.apiServerUrl}/api/edu`,education);
  }
  public deleteEducation(educationId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/edu/${educationId}`);
  }
}



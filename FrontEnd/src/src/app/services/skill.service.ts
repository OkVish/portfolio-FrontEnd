import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments';
import { Skill } from 'src/app/model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiServerUrl}/api/skill`);
  }
  public addSkill(skills: Skill): Observable<Skill> {
    return this.http.post<Skill>(`${this.apiServerUrl}/api/skill`, skills);
  }
  public updateSkill(skills: Skill): Observable<Skill> {
    return this.http.put<Skill>(`${this.apiServerUrl}/api/skill`, skills);
  }
  public deleteSkill(skillsId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/skill/${skillsId}`);
  }
}
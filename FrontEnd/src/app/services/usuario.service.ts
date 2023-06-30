import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments';
import { User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUser(): Observable<User>{
    return this.http.get<User>(`${this.apiServerUrl}/api/user`);
  }

  public saveUser(usuario: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/api/user`, usuario);
  }
  
}
// proba si no funciona con Usuario []
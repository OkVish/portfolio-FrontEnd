import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/app/environments/environments";
import { Usuario } from "src/app/model/usuario";

@Injectable({
  providedIn: "root"
})
export class HeaderService {
  private apiSeverUrl = environment.apiBaseUrl

  constructor(private http: HttpClient) {}

  public getUser(): Observable<Usuario> {
    return this.http.get<Usuario>("${this.apiServerUrl}/usuario/id/1");
  }

  public updateUser(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>("${this.apiServerUrl}/usuario/update",usuario);
  }
  
}

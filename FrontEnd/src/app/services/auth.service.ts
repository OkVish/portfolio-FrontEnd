import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loginUrl = 'http://localhost:8080/login'; // Cambia la URL según tu configuración del backend

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        const credentials = { username, password };
        return this.http.post(this.loginUrl, credentials);
    }
}
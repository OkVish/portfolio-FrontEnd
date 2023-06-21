import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None, 
  styles: [`
    .login-container {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  
    h2 {
      text-align: center;
      margin-bottom: 20px;
    }
  
    .form-group {
      margin-bottom: 20px;
    }
  
    label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
    }
  
    input[type="text"],
    input[type="password"] {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  
    button {
      display: block;
      width: 100%;
      padding: 10px;
      font-size: 16px;
      color: #fff;
      background-color: #007bff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  
    .error-message {
      color: red;
      font-size: 14px;
      margin-top: 5px;
    }`]
}
)
export class HeaderComponent implements OnInit{
  username: string;
  password: string;
  showUsernameError: boolean = false;
  showPasswordError: boolean = false;
loginModal: any;

  constructor() {
    this.username = "";
    this.password = "";
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login() {
    if (this.username === 'Vish') {
      this.showUsernameError = false; // Usuario correcto, no muestra mensaje de error
      if (this.password === 'ArgPro2022') {
        this.showPasswordError = false; // Contraseña correcta, no muestra mensaje de error
        // Lógica para iniciar sesión exitosamente
      } else {
        this.showPasswordError = true; // Contraseña incorrecta, muestra mensaje de error
      }
    } else {
      this.showUsernameError = true; // Usuario incorrecto, muestra mensaje de error
    }
  }
}






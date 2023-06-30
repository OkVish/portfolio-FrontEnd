import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username!: string;
  password!: string;
  loginError: boolean = false;

  constructor(private authService: AuthService, private router:Router) { }

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        response => {
          // Manejar la respuesta exitosa, redirigir al usuario, mostrar mensaje, etc.
          console.log('Inicio de sesión exitoso');
          this.router.navigateByUrl('/home');
        },
        error => {
          // Manejar el error, mostrar mensaje de error, etc.
          this.loginError = true;
        }
      );
  }
}


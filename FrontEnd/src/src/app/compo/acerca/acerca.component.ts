import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent  {

}





  /*
  export class AcercaComponent implements OnInit {
  public usuario: Usuario | undefined;
  public saveUser: Usuario | undefined;


  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser(): void {
    this.usuarioService.getUser().subscribe({
      next: (response: Usuario) => {
        this.usuario = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
      complete: () => {
        console.info("");
      }
    });
  }
}*/
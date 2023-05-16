import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { HeaderService } from '../services/header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  public usuario : Usuario | undefined;
  public editUsuario: Usuario | undefined;

  constructor(private headerService : HeaderService){}

  ngOnInit(): void{
    this.getUser();
  }


    public getUser():void{
      this.headerService.getUser().subscribe({
        next: (response: Usuario) =>{
          this.usuario=response;
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
    }
  }






import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from './environments/environments';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';



// Componentes

import { AppComponent } from './app.component';
import { HeaderComponent } from './compo/header/header.component';
import { AcercaComponent } from './compo/acerca/acerca.component';
import { ExperienciaComponent } from './compo/experiencia/experiencia.component';
import { EducacionComponent } from './compo/educacion/educacion.component';
import { ProyectosComponent } from './compo/proyectos/proyectos.component';
import { BannerHeroComponent } from './compo/banner-hero/banner-hero.component';
import { ContactoComponent } from './compo/contacto/contacto.component';
import { FooterComponent } from './compo/footer/footer.component';
import { LoginComponent } from './compo/login/login.component';
import { HomeComponent } from './compo/home/home.component';
import { Http404Component } from './compo/http404/http404.component'
import { RegisterComponent } from './compo/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    BannerHeroComponent,
    ContactoComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    Http404Component,
    RegisterComponent,

//faltan skills

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    
  ],
  providers:[],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

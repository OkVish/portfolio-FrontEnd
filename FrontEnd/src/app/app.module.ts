// imports

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule, } from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from './environments/environments';
import { getAuth, provideAuth } from '@angular/fire/auth';


// Componentes

import { AppComponent } from './app.component';
import { HeaderComponent } from './compo/header/header.component';
import { AcercaComponent } from './compo/acerca/acerca.component';
import { ExperienciaComponent } from './compo/experiencia/experiencia.component';
import { EducationComponent } from './compo/educacion/educacion.component';
import { ProyectoComponent } from './compo/proyectos/proyectos.component';
import { BannerHeroComponent } from './compo/banner-hero/banner-hero.component';
import { FooterComponent } from './compo/footer/footer.component';
import { HomeComponent } from './compo/home/home.component';
import { Http404Component } from './compo/http404/http404.component'
import { SkillComponent } from './compo/skill/skill.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducationComponent,
    ProyectoComponent,
    BannerHeroComponent,
    FooterComponent,
    HomeComponent,
    Http404Component,
    SkillComponent,

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
  providers: [HttpClientModule],
  bootstrap: [AppComponent],

})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './compo/acerca/acerca.component';
import { BannerHeroComponent } from './compo/banner-hero/banner-hero.component';
import { ContactoComponent } from './compo/contacto/contacto.component';
import { EducacionComponent } from './compo/educacion/educacion.component';
import { ExperienciaComponent } from './compo/experiencia/experiencia.component';
import { FooterComponent } from './compo/footer/footer.component';
import { HeaderComponent } from './compo/header/header.component';
import { HomeComponent } from './compo/home/home.component';
import { Http404Component } from './compo/http404/http404.component';
import { LoginComponent } from './compo/login/login.component';
import { ProyectosComponent } from './compo/proyectos/proyectos.component';
import { RegisterComponent } from './compo/register/register.component';

const approutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent},
  { path: "header", component: HeaderComponent },
  { path: "hero", component: BannerHeroComponent },
  { path: "acerca", component: AcercaComponent },
  { path: "educacion", component: EducacionComponent },
  { path: "experiencia", component: ExperienciaComponent },
  { path: "proyectos", component: ProyectosComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "footer", component: FooterComponent },
  { path: "**", component: Http404Component },
  { path:"register", component:RegisterComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

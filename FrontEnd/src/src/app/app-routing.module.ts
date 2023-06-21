import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './compo/acerca/acerca.component';
import { BannerHeroComponent } from './compo/banner-hero/banner-hero.component';
import { EducationComponent } from './compo/educacion/educacion.component';
import { ExperienciaComponent } from './compo/experiencia/experiencia.component';
import { FooterComponent } from './compo/footer/footer.component';
import { HeaderComponent } from './compo/header/header.component';
import { HomeComponent } from './compo/home/home.component';
import { Http404Component } from './compo/http404/http404.component';
import { ProyectoComponent } from './compo/proyectos/proyectos.component';
import { SkillComponent } from './compo/skill/skill.component';



const approutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "header", component: HeaderComponent },
  { path: "hero", component: BannerHeroComponent },
  { path: "acerca", component: AcercaComponent },
  { path: "educacion", component: EducationComponent },
  { path: "experiencia", component: ExperienciaComponent },
  { path: "proyecto", component: ProyectoComponent },
  { path: "footer", component: FooterComponent },
  { path: "skill", component: SkillComponent },
  { path: "",redirectTo:"/home",pathMatch:"full"},
  { path: "**", component: Http404Component },
]

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

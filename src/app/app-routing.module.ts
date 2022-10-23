import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { EditarAptitudesComponent } from './components/aptitudes/editar-aptitudes.component';
import { NuevaAptitudesComponent } from './components/aptitudes/nueva-aptitudes.component';
import { EditarAcercaDeComponent } from './components/acerca-de/editar-acerca-de.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NuevaExperienciaComponent },
  { path: 'editarexp/:id', component: EditarExperienciaComponent },
  { path: 'nuevaedu', component: NuevaEducacionComponent },
  { path: 'editaredu/:id', component: EditarEducacionComponent },
  { path: 'nuevaaptitudes', component: NuevaAptitudesComponent },
  { path: 'editaraptitudes/:id', component: EditarAptitudesComponent },
  { path: 'editaracercade/:id', component: EditarAcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

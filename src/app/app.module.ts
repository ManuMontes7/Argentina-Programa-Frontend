import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor.service';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { EditarAptitudesComponent } from './components/aptitudes/editar-aptitudes.component';
import { NuevaAptitudesComponent } from './components/aptitudes/nueva-aptitudes.component';
import { EditarAcercaDeComponent } from './components/acerca-de/editar-acerca-de.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditarProyectosComponent } from './components/proyectos/editar-proyectos.component';
import { NuevoProyectosComponent } from './components/proyectos/nuevo-proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    AptitudesComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    EducacionComponent,
    NuevaEducacionComponent,
    EditarEducacionComponent,
    EditarAptitudesComponent,
    NuevaAptitudesComponent,
    EditarAcercaDeComponent,
    EditarProyectosComponent,
    NuevoProyectosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}

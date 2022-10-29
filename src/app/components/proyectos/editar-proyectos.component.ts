import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../../service/image.service';
import { Proyectos } from '../../model/proyectos';
import { ProyectosService } from '../../service/proyectos.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {
  proyectos: Proyectos = null;

  constructor(
    private activatedRouter: ActivatedRoute,
    private proyectosService: ProyectosService,
    private router: Router,
    public imageService: ImageService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosService.detail(id).subscribe(
      data => {
        this.proyectos = data;
      },
      err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectos.img = this.imageService.url
    this.proyectosService.update(id, this.proyectos).subscribe(
      data => {
        this.router.navigate(['']);
      },
      err => {
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_" + id;
    this.imageService.uploadImage($event, name)
  }
}
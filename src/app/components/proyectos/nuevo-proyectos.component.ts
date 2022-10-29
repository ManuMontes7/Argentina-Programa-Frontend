import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../../service/image.service';
import { Proyectos } from '../../model/proyectos';
import { ProyectosService } from '../../service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-nuevo-proyectos',
  templateUrl: './nuevo-proyectos.component.html',
  styleUrls: ['./nuevo-proyectos.component.css']
})
export class NuevoProyectosComponent  implements OnInit {
  nombrePro: string = '';
  descripcionPro: string = '';
  img: string = '';

  constructor(
    private proyectosService: ProyectosService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public imageService: ImageService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    this.imageService.clearUrl();
  }

  onCreate(): void {
    this.img = this.imageService.url;
    const proyec = new Proyectos(this.nombrePro, this.descripcionPro, this.img);
    this.proyectosService.save(proyec).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      },
      err => {
        alert("Error al crear tu proyecto");
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
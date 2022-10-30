import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    const proyec = new Proyectos(this.nombrePro, this.descripcionPro, this.img); 
    proyec.img = this.imageService.url
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
    const archivo = $event.target.files[0].name;
    const name = "proyecto_" + archivo + "1";
    this.imageService.uploadImage($event, name)
  }
  
}
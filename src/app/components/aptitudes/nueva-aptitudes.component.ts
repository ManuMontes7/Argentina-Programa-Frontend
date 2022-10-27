import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aptitudes } from '../../model/aptitudes';
import { AptitudesService } from '../../service/aptitudes.service';

@Component({
  selector: 'app-nueva-aptitudes',
  templateUrl: './nueva-aptitudes.component.html',
  styleUrls: ['./nueva-aptitudes.component.css']
})
export class NuevaAptitudesComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(
    private aptitudS: AptitudesService, 
    private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const aptitudes = new Aptitudes(this.nombre, this.porcentaje);
    this.aptitudS.save(aptitudes).subscribe(
      data => {
        alert("Aptitud creada correctamente");
        this.router.navigate(['']);
      },
      err => {
        alert("Fallo al añadir la skill");
        this.router.navigate(['']);
      }
    )
  }
}

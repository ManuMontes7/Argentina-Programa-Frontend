import { Component, OnInit } from '@angular/core';
import { Aptitudes } from '../../model/aptitudes';
import { AptitudesService } from '../../service/aptitudes.service';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css'],
})
export class AptitudesComponent implements OnInit {
  aptitudes: Aptitudes[] = [];

  constructor(
    private aptitudS: AptitudesService,
    private tokenService: TokenService) {}
  isLogged = false;

  ngOnInit(): void {
    this.cargarAptitudes();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  cargarAptitudes(): void {
    this.aptitudS.lista().subscribe(
      data => {
      this.aptitudes = data;})}

  delete(id: number) {
    if (id != undefined) {
      this.aptitudS.delete(id).subscribe(
        data => {
          this.cargarAptitudes();
        },
        err => {
          alert('No se pudo borrar la Aptitud');
        }
      )
    }
  }
}
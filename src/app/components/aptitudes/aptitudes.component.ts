import { Component, OnInit } from '@angular/core';
import { Aptitudes } from 'src/app/model/aptitudes';
import { AptitudesService } from 'src/app/service/aptitudes.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css'],
})
export class AptitudesComponent implements OnInit {
  aptitudes: Aptitudes[] = [];

  constructor(
    private aptitudS: AptitudesService,
    private tokenService: TokenService
  ) {}
  isLogged = false;

  ngOnInit(): void {
    this.cargarAptitudes();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarAptitudes(): void {
    this.aptitudS.lista().subscribe((data) => {
      this.aptitudes = data;
    });
  }

  delete(id: number) {
    if (id != undefined) {
      this.aptitudes.delete(id).subscribe(
        (data) => {
          this.cargarAptitudes();
        },
        (err) => {
          alert('No se pudo borrar la skill');
        }
      );
    }
  }
}

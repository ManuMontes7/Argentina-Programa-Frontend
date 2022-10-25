import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aptitudes } from '../../model/aptitudes';
import { AptitudesService } from '../../service/aptitudes.service';

@Component({
  selector: 'app-editar-aptitudes',
  templateUrl: './editar-aptitudes.component.html',
  styleUrls: ['./editar-aptitudes.component.css'],
})
export class EditarAptitudesComponent implements OnInit {
  aptitudes: Aptitudes = null;

  constructor(
    private aptitudS: AptitudesService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.aptitudS.detail(id).subscribe(
      (data) => {
        this.aptitudes = data;
      },
      (err) => {
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.aptitudS.update(id, this.aptitudes).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar la Aptitud');
        this.router.navigate(['']);
      }
    );
  }
}

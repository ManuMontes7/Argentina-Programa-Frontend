import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css'],
})
export class EditarExperienciaComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(
    private Experiencia: ExperienciaService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.Experiencia.detail(id).subscribe(
      (data) => {
        this.expLab = data;
      },
      (err) => {
        alert('Error al modificar experiencia');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.Experiencia.update(id, this.expLab).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar experiencia');
        this.router.navigate(['']);
      }
    );
  }
}
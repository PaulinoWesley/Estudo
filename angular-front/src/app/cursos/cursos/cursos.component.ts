import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  public listaCursos: Curso[] = [];
  public displayedColumns = ['descricao','categoria']

  constructor() { }

  ngOnInit(): void {
    this.preencheListaCurso();
  }

  private preencheListaCurso(): void {
    this.listaCursos = [
      { _id: "1", descricao: 'Angular', categoria: 'Front-End' },
      { _id: "2", descricao: 'Spring', categoria: 'Back-End' }
    ]
  }

}

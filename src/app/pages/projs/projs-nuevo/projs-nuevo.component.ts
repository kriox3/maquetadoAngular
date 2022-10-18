import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/serv/proyecto.service';
import { ProjsListarComponent } from '../projs-listar/projs-listar.component';
import { ProjsComponent } from '../projs.component';

@Component({
  selector: 'app-projs-nuevo',
  templateUrl: './projs-nuevo.component.html',
  styleUrls: ['./projs-nuevo.component.css']
})
export class ProjsNuevoComponent implements OnInit {

  id?: number;
  nombre: string = '';
  informacion: string = '';
  fecha: string = '';
  accesoUrl: string = '';

  proyectoNewModalOn = false;

  constructor(private proyectoService: ProyectoService,
    private router: Router,
    private proyectoComponente: ProjsComponent) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const cont = new Proyecto(this.nombre, this.informacion, this.fecha, this.accesoUrl, this.id);
    this.proyectoService.addProyecto(cont).subscribe(data => {

    }, err => {
      let er = alert(JSON.stringify(err.error.text));
      this.proyectoComponente.reloadME();

    }
    )
  }

  onNewModal() {
    this.proyectoNewModalOn = true;
  }

  onNewModalOff() {
    this.proyectoNewModalOn = false;
  }

}

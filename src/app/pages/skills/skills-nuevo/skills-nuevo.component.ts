import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/models/habilidad';
import { HabilidadService } from 'src/app/serv/habilidad.service';
import { SkillsListarComponent } from '../skills-listar/skills-listar.component';
import { SkillsComponent } from '../skills.component';

@Component({
  selector: 'app-skills-nuevo',
  templateUrl: './skills-nuevo.component.html',
  styleUrls: ['./skills-nuevo.component.css']
})
export class SkillsNuevoComponent implements OnInit {

  id?: number;
  nombre: string = '';
  porcentaje: string = '';

  habilidadNewModalOn = false;

  constructor(private habilidadService: HabilidadService,
    private router: Router,
    private habilidadComponente: SkillsComponent) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const cont = new Habilidad(this.nombre, this.porcentaje, this.id);
    this.habilidadService.addHabilidad(cont).subscribe(data => {

    }, err => {
      let er = alert(JSON.stringify(err.error.text));
      this.habilidadComponente.reloadME();

    }
    )
  }

  onNewModal() {
    this.habilidadNewModalOn = true;
  }

  onNewModalOff() {
    this.habilidadNewModalOn = false;
  }


}

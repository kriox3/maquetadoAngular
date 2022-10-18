import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/models/habilidad';
import { HabilidadService } from 'src/app/serv/habilidad.service';
import { TokenService } from 'src/app/serv/token.service';
import { SkillsComponent } from '../skills.component';

@Component({
  selector: 'app-skills-listar',
  templateUrl: './skills-listar.component.html',
  styleUrls: ['./skills-listar.component.css']
})
export class SkillsListarComponent implements OnInit {

  id?: number;
  nombre: string = '';
  porcentaje: string = '';  

  habilidade: Habilidad = new Habilidad("", "", 0);
  habilidadLista: Habilidad[] = [];

  constructor(private habilidadService: HabilidadService,
    private tokenService: TokenService,
    private router: Router,
    private habilidadComponente: SkillsComponent) { }

  isLogged = false;
  habilidadModalOn = false;
  habilidadNewModalOn = false;

  ngOnInit(): void {
    this.cargarHabilidad();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public cargarHabilidad(): void {
    this.habilidadService.getHabilidad().subscribe(data => {
      this.habilidadLista = data;
    })
  }

  onDeleteHabilidad(id?: number) {
    console.log(id);
    if (id != undefined) {
      this.habilidadService.deleteHabilidad(id)
        .subscribe(data => { }, err => {
          let er = alert(JSON.stringify(err.error.text));
          this.habilidadComponente.reloadME();

        }
        );
    }
  }

  onUpdateSkill(id?: number) {
    let cont = this.habilidadLista.find(x => x.id == id);
    /* const cont = new Habilidad(this.accesoUrl, this.persona, this.red, this.id); */
    if (id != undefined && cont != undefined) {
      this.habilidadService.updateHabilidad(id, cont).subscribe(
        data => {
          this.cargarHabilidad();
          let a = alert("Modificada la habilidad");
          this.habilidadComponente.reloadME();
        }
      )
    }
  }

  onModal() {
    this.habilidadModalOn = true;
  }
  onModalOff() {
    this.habilidadModalOn = false;
  }

  /////////////////////////////////////////////

  onNewModal() {
    this.habilidadNewModalOn = true;
  }

}

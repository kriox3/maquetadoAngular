import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/serv/educacion.service';
import { TokenService } from 'src/app/serv/token.service';
import { PortfolioComponent } from '../../portfolio/portfolio.component';

@Component({
  selector: 'app-educacion-listar',
  templateUrl: './educacion-listar.component.html',
  styleUrls: ['./educacion-listar.component.css']
})
export class EducacionListarComponent implements OnInit {

  id?: number;
  establecimiento: string = '';
  titulo: string = '';
  fecha: string = '';
  completado: boolean = false;  

  educacion: Educacion = new Educacion("", "", "", false, 0);
  educacionLista: Educacion[] = [];

  constructor(private educacionService: EducacionService,
    private tokenService: TokenService,
    private router: Router,
    private portfolio: PortfolioComponent) { }

  isLogged = false;
  educacionModalOn = false;
  educacionNewModalOn = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public cargarEducacion(): void {
    this.educacionService.getEducacion().subscribe(data => {
      this.educacionLista = data;
    })
  }

  onDeleteEducacion(id?: number) {
    console.log(id);
    if (id != undefined) {
      this.educacionService.deleteEducacion(id)
        .subscribe(data => { }, err => {
          let er = alert(JSON.stringify(err.error.text));
          this.portfolio.reloadME();

        }
        );
    }
  }

  onUpdateEdu(id?: number) {
    let cont = this.educacionLista.find(x => x.id == id);
    /* const cont = new Educacion(this.accesoUrl, this.persona, this.red, this.id); */
    if (id != undefined && cont != undefined) {
      this.educacionService.updateEducacion(id, cont).subscribe(
        data => {
          this.cargarEducacion();
          let a = alert("Modificada la educacion");
          this.portfolio.reloadME();
        }
      )
    }
  }

  onModal() {
    this.educacionModalOn = true;
  }
  onModalOff() {
    this.educacionModalOn = false;
  }

  /////////////////////////////////////////////

  onNewModal() {
    this.educacionNewModalOn = true;
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutMe } from 'src/app/models/about-me';
import { Contacto } from 'src/app/models/contacto';
import { Red } from 'src/app/models/red';
import { ContactoService } from 'src/app/serv/contacto.service';
import { TokenService } from 'src/app/serv/token.service';
import { PortfolioComponent } from '../../portfolio/portfolio.component';

@Component({
  selector: 'app-contacto-listar',
  templateUrl: './contacto-listar.component.html',
  styleUrls: ['./contacto-listar.component.css']
})
export class ContactoListarComponent implements OnInit {

  id?: number;
  accesoUrl: string = '';
  persona: AboutMe = new AboutMe;
  red: Red = new Red("", 0);

  contacto: Contacto = new Contacto("", this.persona, this.red, 0);
  contactoLista: Contacto[] = [];

  constructor(private contactoService: ContactoService,
    private tokenService: TokenService,
    private router: Router,
    private portfolio: PortfolioComponent) { }

  isLogged = false;
  modalOn = false;
  newModalOn = false;

  ngOnInit(): void {
    this.cargarContacto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public cargarContacto(): void {
    this.contactoService.getContacto().subscribe(data => {
      this.contactoLista = data;
    })
  }

  onDeleteContacto(id?: number) {
    console.log(id);
    if (id != undefined) {
      this.contactoService.deleteContacto(id)
        .subscribe(data => { }, err => {
          let er = alert(JSON.stringify(err.error.text));
          this.portfolio.reloadME();

        }
        );
    }
  }

  onUpdateCon(id?: number) {
    let cont = this.contactoLista.find(x => x.id == id);
    if (id != undefined && cont != undefined) {
      this.contactoService.updateContacto(id, cont).subscribe(
        data => {
          alert(JSON.stringify(data));
          this.cargarContacto();
          let a = alert("Modificada la red");
          this.portfolio.reloadME();
        }
      )
    }
  }

  onModal() {
    this.modalOn = true;
  }
  onModalOff() {
    this.modalOn = false;
  }

  /////////////////////////////////////////////

  onNewModal() {
    this.newModalOn = true;
  }
  onNewModalOff() {
    this.newModalOn = false;
  }

}

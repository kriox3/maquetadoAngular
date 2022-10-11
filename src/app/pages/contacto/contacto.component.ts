import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/serv/portfolio.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  @Input() redes: any;
  @Input() modifica: any;

  getRed(red: any) {
    switch (red) {
      case 'Facebook':
        return 'bxl-facebook';
      case 'Instagram':
        return 'bxl-instagram';
      case 'Telegram':
        return 'bxl-telegram';
      case 'Whatsapp':
        return 'bxl-whatsapp';
      case 'Youtube':
        return 'bxl-youtube';
      case 'Twitter':
        return 'bxl-twitter';
      case 'Coffee':
        return 'bxs-coffee';
      case 'LinkedIn':
        return 'bxl-linkedin';
      case 'Web':
        return 'bx-globe';
      default:
        return;
    }
  }

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void { }

  onNavigate(web: any) {
    window.open(web, "_blank");


  }
}

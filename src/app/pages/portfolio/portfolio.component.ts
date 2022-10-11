import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../serv/portfolio.service';
import { Portfolio } from '../../models/portfolio';
import { TokenService } from 'src/app/serv/token.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolio: Portfolio[] = [];
  elPortfolio: any;

  constructor(private portfolioService: PortfolioService,
    private tokenService: TokenService) { }

  isLogged = false;
  isLoggedAdmin = false;
  modalOn: boolean = false;

  ngOnInit(): void {
    this.cargarPortfolio();

    if (this.tokenService.getAuthorities().includes('ROLE_ADMIN'))
      this.isLoggedAdmin = true;
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPortfolio(): void {
    this.portfolioService.lista().subscribe(data => {
      this.elPortfolio = data;
      console.log('cargar: ' + JSON.stringify(data));
    });
  }

  onModal() {
    this.modalOn = true;
  }

  onModalOff() {
    this.modalOn = false;
  }
}

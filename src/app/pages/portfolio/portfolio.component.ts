import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../serv/portfolio.service';
import { Portfolio } from '../../models/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolio: Portfolio[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.cargarPortfolio();
  }

  cargarPortfolio(): void {
    this.portfolioService.lista().subscribe(data => {
      this.portfolio = data;
      console.log(data);
    });
  }
}

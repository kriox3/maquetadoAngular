import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/serv/portfolio.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
  @Input() experiencia: any;
  @Input() modifica: any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {}
}

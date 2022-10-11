import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/serv/portfolio.service';

@Component({
  selector: 'app-certs',
  templateUrl: './certs.component.html',
  styleUrls: ['./certs.component.css']
})
export class CertsComponent implements OnInit {
  @Input() certificaciones: any;
  @Input() modifica: any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {}

}

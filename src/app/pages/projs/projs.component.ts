import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/serv/portfolio.service';

@Component({
  selector: 'app-projs',
  templateUrl: './projs.component.html',
  styleUrls: ['./projs.component.css']
})
export class ProjsComponent implements OnInit {
  @Input() proyectos: any;
  @Input() modifica: any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {}

  onNavigate(web:any){
    window.open(web, "_blank");
}
}

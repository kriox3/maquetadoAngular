import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/serv/portfolio.service';

@Component({
  selector: 'app-projs',
  templateUrl: './projs.component.html',
  styleUrls: ['./projs.component.css']
})
export class ProjsComponent implements OnInit {
  proyectos:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.consultaDatos().subscribe(data =>{
        this.proyectos = data.proyectos;
    });
  }

  onNavigate(web:any){
    window.open(web, "_blank");
}
}

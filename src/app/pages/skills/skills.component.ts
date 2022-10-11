import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/serv/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input() habilidades: any;
  @Input() modifica: any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {};
  
}

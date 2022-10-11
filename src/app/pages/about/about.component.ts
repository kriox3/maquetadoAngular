import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/serv/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() paso: any;
  @Input() modifica: any;

  constructor(private datosPortfolio:PortfolioService) {  }

  ngOnInit(): void { 
    
   }

}

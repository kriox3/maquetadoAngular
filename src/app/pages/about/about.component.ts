import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/serv/portfolio.service';
import { AboutMeService } from 'src/app/serv/aboutme.service';
import { AboutMe } from 'src/app/models/about-me';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() paso: any;
  @Input() modifica: any;

  aboutMe: AboutMe = new AboutMe("","","","","",0);

  constructor(private datosPortfolio: PortfolioService,
    private aboutMeService: AboutMeService) { }

  ngOnInit(): void {
  }

  cargarAboutMe(): void {
    this.aboutMeService.ver().subscribe(data => {
      this.aboutMe = data;
    })
  }

  devolverAboutMe():AboutMe {
    this.aboutMeService.ver().subscribe(data => {
      this.aboutMe = data;
      
    })
    return this.aboutMe;
  }

}

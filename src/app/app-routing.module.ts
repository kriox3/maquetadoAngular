import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SesionComponent } from './pages/sesion/sesion.component';

const routes: Routes = [
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

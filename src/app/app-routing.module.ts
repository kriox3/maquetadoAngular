import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { LoginComponent } from './pages/login/login.component';
import { GuardGuard } from './serv/guard.guard';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent, canActivate:[GuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login',pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

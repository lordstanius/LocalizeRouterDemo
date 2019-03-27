import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocalizeRouterModule } from '../localize-router/localize-router.module';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes),
    LocalizeRouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule, LocalizeRouterModule]
})
export class HomeRoutingModule { }

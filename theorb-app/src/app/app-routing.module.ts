import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from '../app/pages/home/the7ofdiamonds/about/about.component';
import { DesignComponent } from '../app/pages/home/the7ofdiamonds/services/design/design.component';
import { DevelopmentComponent } from '../app/pages/home/the7ofdiamonds/services/development/development.component';
import { ContactComponent } from '../app/pages/home/the7ofdiamonds/about/contact/contact.component';
import { ShopComponent } from './pages/shop/shop.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'login', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  constructor() { }

}

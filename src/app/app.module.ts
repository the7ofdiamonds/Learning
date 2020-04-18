import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { InvestComponent } from './pages/home/invest/invest.component';
import { ManageComponent } from './pages/home/manage/manage.component';
import { HomeComponent } from './pages/home/home.component';
import { LearnComponent } from './pages/home/learn/learn.component';
import { CurrencyComponent } from './pages/home/manage/currency/currency.component';
import { SendmoneyComponent } from './pages/home/manage/currency/sendmoney/sendmoney.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    InvestComponent,
    ManageComponent,
    HomeComponent,
    LearnComponent,
    CurrencyComponent,
    SendmoneyComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
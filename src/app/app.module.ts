import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { InvestComponent } from './pages/home/invest/invest.component';
import { ManageComponent } from './pages/home/manage/manage.component';
import { HomeComponent } from './pages/home/home.component';
import { LearnComponent } from './pages/home/learn/learn.component';
import { CurrencyComponent } from './pages/home/manage/currency/currency.component';
import { SendmoneyComponent } from './pages/home/manage/currency/sendmoney/sendmoney.component';
import { DebtComponent } from './pages/home/manage/debt/debt.component';
import { InsuranceComponent } from './pages/home/manage/insurance/insurance.component';
import { ReadComponent } from './pages/home/learn/read/read.component';
import { SimulationComponent } from './pages/home/learn/simulation/simulation.component';
import { QuoteComponent } from './components/forms/quote/quote.component';
import { InvoiceComponent } from './components/forms/invoice/invoice.component';
import { ReceiptComponent } from './components/forms/receipt/receipt.component';
import { AccountsComponent } from './pages/home/manage/accounts/accounts.component';
import { AccountDetailComponent } from './pages/home/manage/accounts/account-detail/account-detail.component';
import { TransactionsService } from './services/transactions.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
    DebtComponent,
    InsuranceComponent,
    ReadComponent,
    SimulationComponent,
    QuoteComponent,
    InvoiceComponent,
    ReceiptComponent,
    AccountsComponent,
    AccountDetailComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [TransactionsService]
})
export class AppModule {}

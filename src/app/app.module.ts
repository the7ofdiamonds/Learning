import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';


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
import { InvoiceSubscriberComponent } from './components/forms/invoice/invoice-subscriber/invoice-subscriber.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { TransactionsService } from './services/data/orb/transactions.service';
import { QuoteSubscriberComponent } from './components/forms/quote/quote-subscriber/quote-subscriber.component';
import { LoginComponent } from './pages/home/login/login.component';
import { ShopComponent } from './pages/home/shop/shop.component';
import { WelcomeComponent } from './pages/home/login/user/welcome/welcome.component';

const config = {
  apiKey: 'AIzaSyD1ub97o3TSNnW3NRFR0aEKk5u4pnR4wbE',
  authDomain: 'theorb-f3a48.firebaseapp.com',
  databaseURL: 'https://theorb-f3a48.firebaseio.com',
  projectId: 'theorb-f3a48',
  storageBucket: 'theorb-f3a48.appspot.com',
  messagingSenderId: '1073451047758',
  appId: '1:1073451047758:web:ae958815b1fd677e071c1f',
  measurementId: 'G-09W10PNNF0'
};

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule
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
    AccountDetailComponent,
    InvoiceSubscriberComponent,
    PageNotFoundComponent,
    QuoteSubscriberComponent,
    LoginComponent,
    ShopComponent,
    WelcomeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  providers: [TransactionsService, MatFormFieldModule,
    MatSelectModule, AuthGuard]
})
export class AppModule { }

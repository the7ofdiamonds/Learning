import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LearnComponent } from './pages/home/learn/learn.component';
import { ReadComponent } from './pages/home/learn/read/read.component';
import { SimulationComponent } from './pages/home/learn/simulation/simulation.component';
import { ManageComponent } from './pages/home/manage/manage.component';
import { CurrencyComponent } from './pages/home/manage/currency/currency.component';
import { SendmoneyComponent } from './pages/home/manage/currency/sendmoney/sendmoney.component';
import { InvestComponent } from './pages/home/invest/invest.component';
import { AccountsComponent } from './pages/home/manage/accounts/accounts.component';
import { AccountDetailComponent } from './pages/home/manage/accounts/account-detail/account-detail.component';
import { DebtComponent } from './pages/home/manage/debt/debt.component';
import { InsuranceComponent } from './pages/home/manage/insurance/insurance.component';
import { QuoteComponent } from './components/forms/quote/quote.component';
import { InvoiceComponent } from './components/forms/invoice/invoice.component';
import { ReceiptComponent } from './components/forms/receipt/receipt.component';
import { RealEstateComponent } from './pages/home/invest/real-estate/real-estate.component';
import { PaperAssetsComponent } from './pages/home/invest/paper-assets/paper-assets.component';
import { TangibleAssetsComponent } from './pages/home/invest/tangible-assets/tangible-assets.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'learn', component: LearnComponent, children: [
      { path: 'read', component: ReadComponent },
      { path: 'simulation', component: SimulationComponent }
    ]
  },
  {
    path: 'manage', component: ManageComponent, children: [
      { path: 'accounts', component: AccountsComponent, children: [
       { path: 'accountdetail', component: AccountDetailComponent }
      ] },
      {
        path: 'currency', component: CurrencyComponent, children: [
          {
            path: 'sendmoney', component: SendmoneyComponent, children: [
              {
                path: 'quote', component: QuoteComponent, children: [
                  {
                    path: 'invoice', component: InvoiceComponent, children: [
                      { path: 'receipt', component: ReceiptComponent }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      { path: 'debt', component: DebtComponent },
      { path: 'insurance', component: InsuranceComponent }
    ],
  },
  {
    path: 'invest', component: InvestComponent, children: [
      { path: 'realestate', component: RealEstateComponent },
      { path: 'paperassets', component: PaperAssetsComponent },
      { path: 'tangibleassets', component: TangibleAssetsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

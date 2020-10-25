import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../app/pages/the7ofdiamonds/about/about.component';
import { ContactComponent } from '../app/pages/the7ofdiamonds/about/contact/contact.component';
import { ShopComponent } from './pages/thehouseforeverwins/shop/shop.component';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/login/welcome/welcome.component';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { AccountsComponent } from './pages/orb/manage/accounts/accounts.component';
import { CurrencyComponent } from './pages/orb/manage/currency/currency.component';
import { RealEstateComponent } from './pages/orb/invest/real-estate/real-estate.component';
import { PaperAssetsComponent } from './pages/orb/invest/paper-assets/paper-assets.component';
import { TangibleAssetsComponent } from './pages/orb/invest/tangible-assets/tangible-assets.component';
import { QuoteComponent } from './components/forms/quote/quote.component';
import { InvoiceComponent } from './components/forms/invoice/invoice.component';
import { ReceiptComponent } from './components/forms/receipt/receipt.component';
import { AccountDetailComponent } from './pages/orb/manage/accounts/account-detail/account-detail.component';
import { ReadComponent } from './pages/orb/learn/read/read.component';
import { SimulationComponent } from './pages/orb/learn/simulation/simulation.component';
import { DebtComponent } from './pages/orb/manage/debt/debt.component';
import { InsuranceComponent } from './pages/orb/manage/insurance/insurance.component';
import { SendComponent } from './pages/orb/manage/currency/send/send.component';
import { ReceiveComponent } from './pages/orb/manage/currency/receive/receive.component';
import { ManageComponent } from './pages/orb/manage/manage.component';
import { ServicesComponent } from './pages/the7ofdiamonds/services/services.component';
import { ProductComponent } from './pages/thehouseforeverwins/shop/product/product.component';
import { CommercialPropertiesComponent } from './pages/orb/invest/real-estate/commercial-properties/commercial-properties.component';
import { ResidentialPropertiesComponent } from './pages/orb/invest/real-estate/residential-properties/residential-properties.component';
import { ResidentialPropertyComponent } from './pages/orb/invest/real-estate/residential-properties/residential-property/residential-property.component';
import { BusinessesForSaleComponent } from './pages/orb/invest/tangible-assets/businesses-for-sale/businesses-for-sale.component';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const belongsToAccount = (next) => hasCustomClaim(`account-${next.params.id}`);

const routes: Routes = [
  { path: 'services', component: ServicesComponent },
  { path: 'shop/product/:id', component: ProductComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/welcome', component: WelcomeComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'learn/read', component: ReadComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'learn/simulation', component: SimulationComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'manage', component: ManageComponent },
  { path: 'manage/currency', component: CurrencyComponent },
  { path: 'manage/currency/send', component: SendComponent },
  { path: 'manage/currency/send/quote', component: QuoteComponent },
  { path: 'manage/currency/send/invoice', component: InvoiceComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'manage/currency/send/receipt', component: ReceiptComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'manage/currency/receive', component: ReceiveComponent },
  { path: 'manage/debt', component: DebtComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'manage/insurance', component: InsuranceComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'invest/real-estate', component: RealEstateComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'invest/real-estate/commercial', component: CommercialPropertiesComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'invest/real-estate/residential', component: ResidentialPropertiesComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'invest/real-estate/residential/:id', component: ResidentialPropertyComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'invest/paper-assets', component: PaperAssetsComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'invest/tangible-assets', component: TangibleAssetsComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'invest/tangible-assets/businesses', component: BusinessesForSaleComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  constructor() { }

}

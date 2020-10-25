import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from '../app/pages/home/the7ofdiamonds/about/about.component';
import { DesignComponent } from '../app/pages/home/the7ofdiamonds/services/design/design.component';
import { DevelopmentComponent } from '../app/pages/home/the7ofdiamonds/services/development/development.component';
import { ContactComponent } from '../app/pages/home/the7ofdiamonds/about/contact/contact.component';
import { ShopComponent } from './pages/home/thehouseforeverwins/shop/shop.component';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/login/welcome/welcome.component';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { AccountsComponent } from './pages/home/orb/manage/accounts/accounts.component';
import { CurrencyComponent } from './pages/home/orb/manage/currency/currency.component';
import { RealEstateComponent } from './pages/home/orb/invest/real-estate/real-estate.component';
import { PaperAssetsComponent } from './pages/home/orb/invest/paper-assets/paper-assets.component';
import { TangibleAssetsComponent } from './pages/home/orb/invest/tangible-assets/tangible-assets.component';
import { QuoteComponent } from './components/forms/quote/quote.component';
import { InvoiceComponent } from './components/forms/invoice/invoice.component';
import { ReceiptComponent } from './components/forms/receipt/receipt.component';
import { AccountDetailComponent } from './pages/home/orb/manage/accounts/account-detail/account-detail.component';
import { ReadComponent } from './pages/home/orb/learn/read/read.component';
import { SimulationComponent } from './pages/home/orb/learn/simulation/simulation.component';
import { DebtComponent } from './pages/home/orb/manage/debt/debt.component';
import { InsuranceComponent } from './pages/home/orb/manage/insurance/insurance.component';
import { SendComponent } from './pages/home/orb/manage/currency/send/send.component';
import { ReceiveComponent } from './pages/home/orb/manage/currency/receive/receive.component';
import { ManageComponent } from './pages/home/orb/manage/manage.component';
import { TermsAndConditionsComponent } from './pages/home/orb/aboutorb/terms-and-conditions/terms-and-conditions.component';
import { PrivacyComponent } from './pages/home/orb/aboutorb/privacy/privacy.component';
import { HeaderComponent } from './pages/home/the7ofdiamonds/header/header.component';
import { ServicesComponent } from './pages/home/the7ofdiamonds/services/services.component';
import { ProductComponent } from './pages/home/thehouseforeverwins/shop/product/product.component';
import { CommercialPropertiesComponent } from './pages/home/orb/invest/real-estate/commercial-properties/commercial-properties.component';
import { ResidentialPropertiesComponent } from './pages/home/orb/invest/real-estate/residential-properties/residential-properties.component';
import { ResidentialPropertyComponent } from './pages/home/orb/invest/real-estate/residential-properties/residential-property/residential-property.component';
import { BusinessesForSaleComponent } from './pages/home/orb/invest/tangible-assets/businesses-for-sale/businesses-for-sale.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const belongsToAccount = (next) => hasCustomClaim(`account-${next.params.id}`);

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'about/t&c', component: TermsAndConditionsComponent },
  { path: 'about/privacy', component: PrivacyComponent },
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
  { path: 'invest/tangible-assets/businesses', component: BusinessesForSaleComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: '', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  constructor() { }

}

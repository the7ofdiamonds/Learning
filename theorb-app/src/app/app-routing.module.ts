import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../app/pages/the7ofdiamonds/about/about.component';
import { ShopComponent } from './pages/thehouseforeverwins/shop/shop.component';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/login/welcome/welcome.component';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { AccountsComponent } from './pages/orb/manage/accounts/accounts.component';
import { CurrencyComponent } from './pages/orb/manage/currency/currency.component';
import { RealEstateComponent } from './pages/orb/invest/real-estate/real-estate.component';
import { PaperAssetsComponent } from './pages/orb/invest/paper-assets/paper-assets.component';
import { TangibleAssetsComponent } from './pages/orb/invest/tangible-assets/tangible-assets.component';
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
import { InvestmentPropertiesComponent } from './pages/orb/invest/tangible-assets/investment-properties/investment-properties.component';
import { StocksComponent } from './pages/orb/invest/paper-assets/stocks/stocks.component';
import { BondsComponent } from './pages/orb/invest/paper-assets/bonds/bonds.component';
import { LiensComponent } from './pages/orb/invest/paper-assets/liens/liens.component';
import { NotesComponent } from './pages/orb/invest/paper-assets/notes/notes.component';
import { AutoInsuranceComponent } from './pages/orb/manage/insurance/auto-insurance/auto-insurance.component';
import { BusinessInsuranceComponent } from './pages/orb/manage/insurance/business-insurance/business-insurance.component';
import { LifeInsuranceComponent } from './pages/orb/manage/insurance/life-insurance/life-insurance.component';
import { PropertyInsuranceComponent } from './pages/orb/manage/insurance/property-insurance/property-insurance.component';
import { AutoFinanceComponent } from './pages/orb/manage/debt/auto-finance/auto-finance.component';
import { BusinessFinanceComponent } from './pages/orb/manage/debt/business-finance/business-finance.component';
import { MortgageComponent } from './pages/orb/manage/debt/mortgage/mortgage.component';
import { PersonalDebtComponent } from './pages/orb/manage/debt/personal-debt/personal-debt.component';

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
  { path: 'manage/accounts', component: AccountsComponent },
  { path: 'manage/currency', component: CurrencyComponent },
  { path: 'manage/currency/send', component: SendComponent },
  { path: 'manage/currency/receive', component: ReceiveComponent },
  { path: 'manage/debt', component: DebtComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'manage/debt/personal', component: PersonalDebtComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'manage/debt/auto', component: AutoFinanceComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'manage/debt/business', component: BusinessFinanceComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'manage/debt/mortgage', component: MortgageComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'manage/insurance', component: InsuranceComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'manage/insurance/auto', component: AutoInsuranceComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'manage/insurance/business', component: BusinessInsuranceComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'manage/insurance/life', component: LifeInsuranceComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'manage/insurance/property', component: PropertyInsuranceComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'invest/real-estate', component: RealEstateComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'invest/real-estate/commercial', component: CommercialPropertiesComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'invest/real-estate/residential', component: ResidentialPropertiesComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'invest/real-estate/residential/:id', component: ResidentialPropertyComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'invest/paper-assets', component: PaperAssetsComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'invest/paper-assets/stocks', component: StocksComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'invest/paper-assets/bonds', component: BondsComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'invest/paper-assets/liens', component: LiensComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'invest/paper-assets/notes', component: NotesComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'invest/tangible-assets', component: TangibleAssetsComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'invest/tangible-assets/businesses', component: BusinessesForSaleComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'invest/tangible-assets/investment-properties', component: InvestmentPropertiesComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  constructor() { }

}

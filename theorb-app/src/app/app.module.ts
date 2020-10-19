import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './services/navigation/auth.guard';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/home/the7ofdiamonds/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/home/the7ofdiamonds/about/about.component';
import { DesignComponent } from './pages/home/the7ofdiamonds/services/design/design.component';
import { DevelopmentComponent } from './pages/home/the7ofdiamonds/services/development/development.component';
import { ContactComponent } from './pages/home/the7ofdiamonds/about/contact/contact.component';
import { ShopComponent } from './pages/home/thehouseforeverwins/shop/shop.component';
import { LoginComponent } from './pages/login/login.component';
import { CopyrightsComponent } from './pages/home/the7ofdiamonds/about/copyrights/copyrights.component';
import { ServicesComponent } from './pages/home/the7ofdiamonds/services/services.component';
import { AboutorbComponent } from './pages/home/orb/aboutorb/aboutorb.component';
import { ContactorbComponent } from './pages/home/orb/aboutorb/contactorb/contactorb.component';
import { ReadComponent } from './pages/home/orb/learn/read/read.component';
import { SimulationComponent } from './pages/home/orb/learn/simulation/simulation.component';
import { DebtComponent } from './pages/home/orb/manage/debt/debt.component';
import { InsuranceComponent } from './pages/home/orb/manage/insurance/insurance.component';
import { LearnComponent } from './pages/home/orb/learn/learn.component';
import { ManageComponent } from './pages/home/orb/manage/manage.component';
import { InvestComponent } from './pages/home/orb/invest/invest.component';
import { AccountsComponent } from './pages/home/orb/manage/accounts/accounts.component';
import { CurrencyComponent } from './pages/home/orb/manage/currency/currency.component';
import { RealEstateComponent } from './pages/home/orb/invest/real-estate/real-estate.component';
import { PaperAssetsComponent } from './pages/home/orb/invest/paper-assets/paper-assets.component';
import { TangibleAssetsComponent } from './pages/home/orb/invest/tangible-assets/tangible-assets.component';
import { QuoteComponent } from './components/forms/quote/quote.component';
import { InvoiceComponent } from './components/forms/invoice/invoice.component';
import { ReceiptComponent } from './components/forms/receipt/receipt.component';
import { WelcomeComponent } from './pages/login/welcome/welcome.component';
import { AccountDetailComponent } from './pages/home/orb/manage/accounts/account-detail/account-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ReceiveComponent } from './pages/home/orb/manage/currency/receive/receive.component';
import { SendComponent } from './pages/home/orb/manage/currency/send/send.component';
import { HeaderorbComponent } from './pages/home/orb/headerorb/headerorb.component';
import { CheckoutComponent } from './pages/login/checkout/checkout.component';
import { ProductComponent } from './pages/home/thehouseforeverwins/shop/product/product.component';
import { InvestmentPropertyComponent } from './pages/home/orb/invest/tangible-assets/investment-properties/investment-property/investment-property.component';
import { BusinessComponent } from './pages/home/orb/invest/tangible-assets/businesses-for-sale/business/business.component';
import { CommercialPropertiesComponent } from './pages/home/orb/invest/real-estate/commercial-properties/commercial-properties.component';
import { ResidentialPropertiesComponent } from './pages/home/orb/invest/real-estate/residential-properties/residential-properties.component';
import { BusinessesForSaleComponent } from './pages/home/orb/invest/tangible-assets/businesses-for-sale/businesses-for-sale.component';
import { InvestmentPropertiesComponent } from './pages/home/orb/invest/tangible-assets/investment-properties/investment-properties.component';
import { CommercialPropertyComponent } from './pages/home/orb/invest/real-estate/commercial-properties/commercial-property/commercial-property.component';
import { StocksComponent } from './pages/home/orb/invest/paper-assets/stocks/stocks.component';
import { BondsComponent } from './pages/home/orb/invest/paper-assets/bonds/bonds.component';
import { LiensComponent } from './pages/home/orb/invest/paper-assets/liens/liens.component';
import { NotesComponent } from './pages/home/orb/invest/paper-assets/notes/notes.component';
import { BondComponent } from './pages/home/orb/invest/paper-assets/bonds/bond/bond.component';
import { LienComponent } from './pages/home/orb/invest/paper-assets/liens/lien/lien.component';
import { NoteComponent } from './pages/home/orb/invest/paper-assets/notes/note/note.component';
import { StockComponent } from './pages/home/orb/invest/paper-assets/stocks/stock/stock.component';
import { AutoFinanceComponent } from './pages/home/orb/manage/debt/auto-finance/auto-finance.component';
import { BusinessFinanceComponent } from './pages/home/orb/manage/debt/business-finance/business-finance.component';
import { MortgageComponent } from './pages/home/orb/manage/debt/mortgage/mortgage.component';
import { AutoInsuranceComponent } from './pages/home/orb/manage/insurance/auto-insurance/auto-insurance.component';
import { BusinessInsuranceComponent } from './pages/home/orb/manage/insurance/business-insurance/business-insurance.component';
import { LifeInsuranceComponent } from './pages/home/orb/manage/insurance/life-insurance/life-insurance.component';
import { PropertyInsuranceComponent } from './pages/home/orb/manage/insurance/property-insurance/property-insurance.component';
import { ResidentialPropertyComponent } from './pages/home/orb/invest/real-estate/residential-properties/residential-property/residential-property.component';

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
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSliderModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatStepperModule,
    HttpClientModule,
    MatButtonModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    DesignComponent,
    DevelopmentComponent,
    ContactComponent,
    ShopComponent,
    LoginComponent,
    CopyrightsComponent,
    ServicesComponent,
    ContactorbComponent,
    AboutorbComponent,
    ReadComponent,
    SimulationComponent,
    DebtComponent,
    InsuranceComponent,
    LearnComponent,
    ReadComponent,
    SimulationComponent,
    ManageComponent,
    AccountsComponent,
    CurrencyComponent,
    DebtComponent,
    InsuranceComponent,
    InvestComponent,
    RealEstateComponent,
    PaperAssetsComponent,
    TangibleAssetsComponent,
    QuoteComponent,
    InvoiceComponent,
    ReceiptComponent,
    AccountsComponent,
    AccountDetailComponent,
    PageNotFoundComponent,
    LoginComponent,
    ShopComponent,
    WelcomeComponent,
    ReceiveComponent,
    SendComponent,
    ReceiveComponent,
    HeaderorbComponent,
    CheckoutComponent,
    ProductComponent,
    InvestmentPropertyComponent,
    BusinessComponent,
    CommercialPropertiesComponent,
    ResidentialPropertiesComponent,
    BusinessesForSaleComponent,
    InvestmentPropertiesComponent,
    CommercialPropertyComponent,
    StocksComponent,
    BondsComponent,
    LiensComponent,
    NotesComponent,
    BondComponent,
    LienComponent,
    NoteComponent,
    StockComponent,
    AutoFinanceComponent,
    BusinessFinanceComponent,
    MortgageComponent,
    AutoInsuranceComponent,
    BusinessInsuranceComponent,
    LifeInsuranceComponent,
    PropertyInsuranceComponent,
    ResidentialPropertyComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  entryComponents: [ShopComponent, ContactComponent, ContactorbComponent, ProductComponent],
  providers: [MatFormFieldModule,
    MatSelectModule, MatStepperModule, FormsModule, AuthGuard, MatButtonModule, { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }]
})
export class AppModule { }

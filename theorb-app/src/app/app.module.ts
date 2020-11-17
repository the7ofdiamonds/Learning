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
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/the7ofdiamonds/about/about.component';
import { ContactComponent } from './pages/the7ofdiamonds/about/contact/contact.component';
import { ShopComponent } from './pages/thehouseforeverwins/shop/shop.component';
import { LoginComponent } from './pages/login/login.component';
import { CopyrightsComponent } from './pages/the7ofdiamonds/about/copyrights/copyrights.component';
import { ServicesComponent } from './pages/the7ofdiamonds/services/services.component';
import { AboutorbComponent } from './pages/orb/aboutorb/aboutorb.component';
import { ContactorbComponent } from './pages/orb/aboutorb/contactorb/contactorb.component';
import { ReadComponent } from './pages/orb/learn/read/read.component';
import { SimulationComponent } from './pages/orb/learn/simulation/simulation.component';
import { DebtComponent } from './pages/orb/manage/debt/debt.component';
import { InsuranceComponent } from './pages/orb/manage/insurance/insurance.component';
import { LearnComponent } from './pages/orb/learn/learn.component';
import { ManageComponent } from './pages/orb/manage/manage.component';
import { InvestComponent } from './pages/orb/invest/invest.component';
import { AccountsComponent } from './pages/orb/manage/accounts/accounts.component';
import { CurrencyComponent } from './pages/orb/manage/currency/currency.component';
import { RealEstateComponent } from './pages/orb/invest/real-estate/real-estate.component';
import { PaperAssetsComponent } from './pages/orb/invest/paper-assets/paper-assets.component';
import { TangibleAssetsComponent } from './pages/orb/invest/tangible-assets/tangible-assets.component';
import { QuoteComponent } from './components/forms/quote/quote.component';
import { InvoiceComponent } from './components/forms/invoice/invoice.component';
import { ReceiptComponent } from './components/forms/receipt/receipt.component';
import { WelcomeComponent } from './pages/login/welcome/welcome.component';
import { AccountDetailComponent } from './pages/orb/manage/accounts/account-detail/account-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ReceiveComponent } from './pages/orb/manage/currency/receive/receive.component';
import { SendComponent } from './pages/orb/manage/currency/send/send.component';
import { CheckoutComponent } from './pages/login/checkout/checkout.component';
import { ProductComponent } from './pages/thehouseforeverwins/shop/product/product.component';
import { InvestmentPropertyComponent } from './pages/orb/invest/tangible-assets/investment-properties/investment-property/investment-property.component';
import { BusinessComponent } from './pages/orb/invest/tangible-assets/businesses-for-sale/business/business.component';
import { CommercialPropertiesComponent } from './pages/orb/invest/real-estate/commercial-properties/commercial-properties.component';
import { ResidentialPropertiesComponent } from './pages/orb/invest/real-estate/residential-properties/residential-properties.component';
import { BusinessesForSaleComponent } from './pages/orb/invest/tangible-assets/businesses-for-sale/businesses-for-sale.component';
import { InvestmentPropertiesComponent } from './pages/orb/invest/tangible-assets/investment-properties/investment-properties.component';
import { CommercialPropertyComponent } from './pages/orb/invest/real-estate/commercial-properties/commercial-property/commercial-property.component';
import { StocksComponent } from './pages/orb/invest/paper-assets/stocks/stocks.component';
import { BondsComponent } from './pages/orb/invest/paper-assets/bonds/bonds.component';
import { LiensComponent } from './pages/orb/invest/paper-assets/liens/liens.component';
import { NotesComponent } from './pages/orb/invest/paper-assets/notes/notes.component';
import { BondComponent } from './pages/orb/invest/paper-assets/bonds/bond/bond.component';
import { LienComponent } from './pages/orb/invest/paper-assets/liens/lien/lien.component';
import { NoteComponent } from './pages/orb/invest/paper-assets/notes/note/note.component';
import { StockComponent } from './pages/orb/invest/paper-assets/stocks/stock/stock.component';
import { AutoFinanceComponent } from './pages/orb/manage/debt/auto-finance/auto-finance.component';
import { BusinessFinanceComponent } from './pages/orb/manage/debt/business-finance/business-finance.component';
import { MortgageComponent } from './pages/orb/manage/debt/mortgage/mortgage.component';
import { AutoInsuranceComponent } from './pages/orb/manage/insurance/auto-insurance/auto-insurance.component';
import { BusinessInsuranceComponent } from './pages/orb/manage/insurance/business-insurance/business-insurance.component';
import { LifeInsuranceComponent } from './pages/orb/manage/insurance/life-insurance/life-insurance.component';
import { PropertyInsuranceComponent } from './pages/orb/manage/insurance/property-insurance/property-insurance.component';
import { ResidentialPropertyComponent } from './pages/orb/invest/real-estate/residential-properties/residential-property/residential-property.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import { PersonalDebtComponent } from './pages/orb/manage/debt/personal-debt/personal-debt.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

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
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    Ng2CarouselamosModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
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
    ResidentialPropertyComponent,
    PersonalDebtComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  entryComponents: [ShopComponent, ContactComponent, ContactorbComponent, ProductComponent],
  providers: [MatFormFieldModule,
    MatSelectModule, MatStepperModule, FormsModule, AuthGuard, MatButtonModule, { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }, ResidentialPropertyComponent]
})
export class AppModule { }

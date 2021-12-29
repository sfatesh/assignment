import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';
import { CashsummaryComponent } from './cashsummary/cashsummary.component';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';
import { FooterComponent } from './footer/footer.component';
import { CashcardComponent } from './cashcard/cashcard.component';
import { TestComponent } from './test/test.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavbarComponent,
    DetailsComponent,
    CashsummaryComponent,
    Table1Component,
    Table2Component,
    FooterComponent,
    CashcardComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

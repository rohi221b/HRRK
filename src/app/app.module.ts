import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { SubcompaniesSliderComponent } from './components/subcompanies-slider/subcompanies-slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NumrushiIndustriesPageComponent } from './numrushi-industries-page/numrushi-industries-page.component';
import { RekhrajWritingPageComponent } from './rekhraj-writing-page/rekhraj-writing-page.component';
import { RekhrajVenturesPageComponent } from './rekhraj-ventures-page/rekhraj-ventures-page.component';
import { KrishnaiMobilityPageComponent } from './krishnai-mobility-page/krishnai-mobility-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { HomePageComponent } from './home-page/home-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CompanyInfoComponent,
    SubcompaniesSliderComponent,
    NumrushiIndustriesPageComponent,
    RekhrajWritingPageComponent,
    RekhrajVenturesPageComponent,
    KrishnaiMobilityPageComponent,
    AboutUsPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

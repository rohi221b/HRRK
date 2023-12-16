import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsPageComponent} from "./about-us-page/about-us-page.component";
import {KrishnaiMobilityPageComponent} from "./krishnai-mobility-page/krishnai-mobility-page.component";
import {RekhrajVenturesPageComponent} from "./rekhraj-ventures-page/rekhraj-ventures-page.component";
import {RekhrajWritingPageComponent} from "./rekhraj-writing-page/rekhraj-writing-page.component";
import {NumrushiIndustriesPageComponent} from "./numrushi-industries-page/numrushi-industries-page.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  // HomePageComponent
  { path: 'home', component: HomePageComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: 'krishnai-mobility', component: KrishnaiMobilityPageComponent },
  { path: 'rekhraj-ventures', component: RekhrajVenturesPageComponent },
  { path: 'rekhraj-writing', component: RekhrajWritingPageComponent },
  { path: 'numrushi-industries', component: NumrushiIndustriesPageComponent },
  {path: '',redirectTo: '/home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

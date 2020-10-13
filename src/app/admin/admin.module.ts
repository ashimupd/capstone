import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from './../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopComponent } from './laptop/laptop.component';
import { TabletComponent } from './tablet/tablet.component';
import { TvComponent } from './tv/tv.component';
import { ClothingsComponent } from './clothings/clothings.component';
import { WatchesComponent } from './watches/watches.component';
import { ShoesComponent } from './shoes/shoes.component';
import { GroceriesComponent } from './groceries/groceries.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent, MobilesComponent, LaptopComponent, TabletComponent, TvComponent, ClothingsComponent, WatchesComponent, ShoesComponent, GroceriesComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
    CarouselModule,
    FormsModule,
  ]
})
export class AdminModule { }

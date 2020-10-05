import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { FormsModule } from '@angular/forms';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'signup',
    component: SignupComponent
  },

  {
    path: 'profile',
    component: ProfileComponent
  },

  {
    path: 'cart',
    component: CartComponent
  },

  {
    path: 'orders',
    component: OrdersComponent
  },

  {
    path: 'categories/:category',
    component: CategoryComponent

  }
];


@NgModule({
  declarations: [IndexComponent, LoginComponent, SignupComponent, ProfileComponent, CartComponent, OrdersComponent, CategoryComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
    CarouselModule,
    FormsModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule

  ]
})
export class UserModule { }

import { LoginService } from './login/login.service';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

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
import { SingleprodductComponent } from './singleprodduct/singleprodduct.component';


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
    path: 'categories/:category/:subcategory',
    component: CategoryComponent,

  },
  {
    path: 'categories/:category/:subcategory/:productid',
    component: SingleprodductComponent
  }



];


@NgModule({
  declarations: [IndexComponent, LoginComponent, SignupComponent, ProfileComponent, CartComponent, OrdersComponent, CategoryComponent, SingleprodductComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
    CarouselModule,
    FormsModule,
    ShareIconsModule,

  ],
  providers:[
    LoginService
  ]
})
export class UserModule { }

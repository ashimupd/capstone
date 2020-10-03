import { VendorModule } from './vendor/vendor.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => UserModule
  },

  {
    path: 'admin',
    loadChildren: () => AdminModule
  },

  {
    path: 'vendor',
    loadChildren: () => VendorModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

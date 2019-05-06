import { AddbulkComponent } from './addbulk/addbulk.component';
import { UpdateimageComponent } from './updateimage/updateimage.component';
import { ViewimageComponent } from './viewimage/viewimage.component';
import { AddimageComponent } from './addimage/addimage.component';
import { ViewbannerComponent } from './viewbanner/viewbanner.component';
import { AddbannerComponent } from './addbanner/addbanner.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
// import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProductOrdersComponent } from './product-orders/product-orders.component';
import { CustomersComponent } from './customers/customers.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { UpdateComponent } from './update/update.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'categories', component: CategoriesComponent },
  {path:'addbanner',component:AddbannerComponent},
  {path:'viewbanner',component:ViewbannerComponent},
  {path:'updatebanner',component:UpdateComponent},
  {path:'addimage',component:AddimageComponent},
  {path:'viewimage',component:ViewimageComponent},
  {path:'updateimage',component:UpdateimageComponent},
  { path: 'products', component: ProductsComponent },
  {path:'addbulk',component:AddbulkComponent},
  {path:'upadateproduct',component:UpdateproductComponent},
  {path:'addcategory',component:AddcategoryComponent},
  {path:'view-category',component:ViewcategoryComponent},
  {path:'updatecategory',component:UpdatecategoryComponent},
  { path: 'add-products', component: AddProductsComponent },
  {path:'viewproduct/:id',component:ViewproductComponent},
  { path: 'product-orders', component: ProductOrdersComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'account', component: AccountComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }





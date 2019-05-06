import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, PathLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
// import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductOrdersComponent } from './product-orders/product-orders.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import { AuthDirective } from './auth.directive';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { AddbannerComponent } from './addbanner/addbanner.component';
import { ViewbannerComponent } from './viewbanner/viewbanner.component';
import { UpdateComponent } from './update/update.component';
import { AddimageComponent } from './addimage/addimage.component';
import { ViewimageComponent } from './viewimage/viewimage.component';
import { UpdateimageComponent } from './updateimage/updateimage.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AddbulkComponent } from './addbulk/addbulk.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    // CategoriesComponent,
    ProductsComponent,
    AddProductsComponent,
    CustomersComponent,
    ProductOrdersComponent,
    AccountComponent,
    LoginComponent,
    AuthDirective,
    AddcategoryComponent,
    ViewcategoryComponent,
    UpdatecategoryComponent,
    AddbannerComponent,
    ViewbannerComponent,
    UpdateComponent,
    AddimageComponent,
    ViewimageComponent,
    UpdateimageComponent,
    ViewproductComponent,
    AddbulkComponent,
    UpdateproductComponent,
    CustomerlistComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// FormsModule: Required for the Two-Way Binding using [(ngModel)]
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductComponent} from './components/productcomponent/app.product.component';
import {DataGridComponent} from './directives/componentdirectives/app.datagrid.component';
import { ValidateDirective } from './directives/attibutedirective/app.validation.directive';
//import { ColorDirective } from './directives/attibutedirective/app.color.directive';
//import { ProductFormComponent } from './components/productformcomponent/app.productform.component';

@NgModule({
  declarations: [
    AppComponent,ProductComponent, DataGridComponent, ValidateDirective
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
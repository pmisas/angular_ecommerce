import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { SharedModule } from '@shared/shared.module';
import { EcommerceRoutingModule } from './ecommerce-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
  ],
  imports: [
    SharedModule,
    EcommerceRoutingModule
  ]
})
export class EcommerceModule { }

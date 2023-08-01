import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { ItemsComponent } from './items/items.component';
import { OrderComponent } from './order/order.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    ItemsComponent,
    OrderComponent,
    EditComponent,
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }

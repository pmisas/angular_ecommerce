import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { OrderComponent } from './order/order.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
    {path:'items', component:ItemsComponent},
    {path:'order', component:OrderComponent},
    {path:':id', component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
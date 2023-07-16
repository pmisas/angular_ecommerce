import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';

const routes: Routes = [{
  path:'',
  component:SkeletonComponent,
  loadChildren: ()=> 
    import ('@modules/ecommerce/ecommerce.module').then((m)=>m.EcommerceModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

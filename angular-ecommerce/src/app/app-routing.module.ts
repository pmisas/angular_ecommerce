import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';

const routes: Routes = [
  {
  path:'home',
  component:SkeletonComponent,
  loadChildren: ()=> 
    import ('@modules/ecommerce/ecommerce.module').then((m)=>m.EcommerceModule)
  },
  {
    path:'auth',
    component:SkeletonComponent,
    loadChildren: ()=> 
      import ('@modules/auth/auth.module').then((m)=>m.AuthModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

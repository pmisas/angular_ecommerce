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
  path:'user',
  component:SkeletonComponent,
  loadChildren: ()=> 
    import ('@modules/user/user.module').then((m)=>m.UserModule)
  },
  {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
  },
  {
  path: '**',
  redirectTo: 'home',
  pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

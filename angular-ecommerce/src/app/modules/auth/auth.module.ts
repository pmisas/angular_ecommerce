import { NgModule } from '@angular/core';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LoginRegisterComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@data/services/api/auth.service';

declare var M: any;
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {


  loginForm!: FormGroup
  loginSubscribe: any
  loginLocalSubscribe:any
  loginError:string =""

  registerForm!: FormGroup
  registerSubscribe : any
  registerError: string =""

  constructor(
    private formBuilder:FormBuilder,
    private authService: AuthService,
    private router : Router
    ){}

  ngOnInit(): void {

    M.AutoInit();

    //validations 

    this.loginForm = this.formBuilder.group ({
      email: [, [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]] ,
      password: [, Validators.required],
    })

    this.registerForm = this.formBuilder.group ({
      name: [ , [Validators.required,  Validators.minLength(5), Validators.maxLength(30)]],
      email: [ , [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]] ,
      password: [ , Validators.required],
      rol: [ , Validators.required],
      adress: [ ,Validators.required],
      city: [ ,Validators.required]
    })
  }

  onSingin(formfield: string){
    if(this.loginForm.valid){
      return
    }else {
      this.validateAllLogin(this.loginForm, formfield)
    } 
  }

  onSingup(formfield: string){
    if(this.registerForm.valid){
      
      return
    }else {
      this.validateAllRegister(this.registerForm, formfield)
    } 
  }
  
  validateAllLogin(formGroup: FormGroup, formfield: string){
    Object.keys(formGroup.controls).forEach(field =>{
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        this.loginForm.controls[formfield].markAsDirty({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllLogin(control, formfield)
      }
    })
  }

  validateAllRegister(formGroup: FormGroup, formfield: string){
    Object.keys(formGroup.controls).forEach(field =>{
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        this.registerForm.controls[formfield].markAsDirty({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllRegister(control, formfield)
      }
    })
  }

  autenticateLogin() {
    this.loginForm.markAllAsTouched()
    if(this.loginForm.valid){
      this.loginLocalSubscribe = this.authService.login(this.loginForm.value)!.subscribe( r=> {
        if(r.error){
          if(r.data===400){
            this.loginForm.controls['password'].setErrors({ customError: true })
          }if(r.data===404){
            this.loginForm.controls['email'].setErrors({ customError: true });
          }if(r.data!==404 && r.data!==400){
            this.loginError= r.message
          }
        }
      })
    }
  }  

  autenticateRegister() {
    this.registerForm.markAllAsTouched()
    if(this.registerForm.valid){
      this.registerSubscribe = this.authService.register(this.registerForm.value).subscribe(r=>{
        if(r.error){
          if(r.data===400){
            this.registerForm.controls['email'].setErrors({ customError: true })
          }
        }else{
          console.log("exitoso")
        }
      })
    }
    /*
    if(this.registerForm.valid){
    
      if(this.registerForm.controls['rol'].value === 'vendedor'){
        this.registerForm.controls['rol'].setValue(true)
        this.registerSubscribe =this.authService.register(this.registerForm.value).subscribe(r=>{
          if(r.error){
            this.registerError=r.message
          }else{
            //TODO
          }
        })
      }else{
        this.registerForm.controls['is_Admin'].setValue(false)
        this.registerSubscribe =this.authService.register(this.registerForm.value).subscribe(r=>{
          if(r.error){
            this.registerError=r.message
          }
        })
      }
    
    } else {
      this.registerError= "*Formulario invalido. llene los espacios que se piden"
    }
    */
  }

  ngOnDestroy(){
    if (this.loginSubscribe ) {
      this.loginSubscribe.unsubscribe();
      console.log('unsuscribe')
    }
  }
}




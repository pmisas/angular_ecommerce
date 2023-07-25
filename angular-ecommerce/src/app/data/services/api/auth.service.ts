import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { IresponseValidation } from '../iresponse-validation.metadata';
import { Iregister } from '../auth-register.metadata';
import { IcompleteUser } from '@data/interfaces/IcompleteUser.metadata';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: BehaviorSubject<IcompleteUser | null> 
  public nameUserLS = 'currentUserEcommerce'

  constructor(
    private http:HttpClient,
    private router:Router
  ) {this.currentUser = new BehaviorSubject(
    JSON.parse(localStorage.getItem(this.nameUserLS)!)
  ); }

  
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoggedIn: Observable<boolean> = this.isLoggedInSubject.asObservable();

  login(data: {
    email: string;
    password: string;
  }):Observable<IresponseValidation>{
  const response= {error:true, message:'Error Inesperado', data:null}
  return this.http.post<{error:boolean, message:string, data:any}>("http://localhost:4000/auth/login", data)
  .pipe(
    map(r =>{
      response.error=r.error,
      response.data=r.data,
      response.message=r.message
      if(!r.error){
        localStorage.setItem('token', r.data.token)
        this.currentUser.next(r.data)
        this.isLoggedInSubject.next(true);
        this.router.navigateByUrl("/home");
      }
      return response
    }),
    catchError( e =>{
      response.data=e.status
      if(e.status===404){
        response.message="Email no encontrado"
      }if(e.status===400){
        response.message="Contraseña incorrecta"
      }
      return of (response);
    }),
  )}
  

  register(data:{
    name:string;
    email: string;
    password: string;
    rol: string;
    adress: string;
    city: string}):Observable<IresponseValidation>{
      if (data.rol === 'vendedor'){
        var roles = ["SELLER","BUYER"]
      }else{
        var roles = ["BUYER"]
      }
    let newData={
      name:data.name,
      email: data.email,
      password: data.password,
      roles: roles,
      address: data.city + data.adress,
    }
    const response= {error:true, message:'error inesperado', data:null}
    return this.http.post<{error:boolean, message:string, data:any}>("http://localhost:4000/auth/register", newData)
    .pipe(
      map(r =>{
        console.log(r)
        response.error=r.error,
        response.data=r.data,
        response.message=r.message
        return response
      }),
      catchError( e =>{
        response.data=e.status
        if(e.status===400){
          response.message="Email en uso, intente con otro"
        }
        return of (response);
      }),
    )}

    logout(){
    localStorage.removeItem('token');
    this.currentUser.next(null)
    this.isLoggedInSubject.next(false);
    }
  
}

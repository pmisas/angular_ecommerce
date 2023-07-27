import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, map, of, throwError } from 'rxjs';
import { IresponseValidation } from '../iresponse-validation.metadata';
import { Iregister } from '../auth-register.metadata';
import { IcompleteUser } from '@data/interfaces/IcompleteUser.metadata';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoggedIn: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor(
    private http:HttpClient,
    private router:Router
  ) {
    const token = localStorage.getItem('token');
    this.isLoggedInSubject.next(!!token); // !! convierte el valor a booleano (true si hay token, false si no) 
  }

  /*
    Behavior subject para saber si el usuario esta logueado
  */

  isLoggedInValue():Observable<boolean> {
    console.log(this.isLoggedIn,'service')
    return this.isLoggedIn;
  }

  getUserData():Observable<IresponseValidation>{
    
    const response= {error:true, message:'Error Inesperado', data:null}
    return this.http.get<{error:boolean, message:string, data:any}>("http://localhost:4000/users")
    .pipe(
      map(r =>{ 
        console.log(r)
        response.error=r.error,
        response.data=r.data,
        response.message=r.message
        return response;
      })
    )
  }

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
        localStorage.setItem('token', r.data.token);
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
        response.error=r.error,
        response.data=r.data,
        response.message=r.message
        if(!r.error){
          this.router.navigateByUrl("/home");
        }
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
  this.isLoggedInSubject.next(false);
  }
  
}

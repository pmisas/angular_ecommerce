import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private http:HttpClient,
    private router: Router,
  ) { }

  getCategories():Observable<any>{
    const response= {error:true, message:'No tienes proyecto', data:null}
    return this.http.get<{error:boolean, message:string, data:any}>("http://localhost:4000/public/categories")
    .pipe(
      map(r =>{
        response.error=r.error,
        response.data=r.data,
        response.message=r.message
        if(response.error==false){
          return response
        }else{
          return null
        }
      })
    )
  }

  //traer todos
  getItems():Observable<any>{
    const response= {error:true, message:'No tienes proyecto', data:null}
    return this.http.get<{error:boolean, message:string, data:any}>("http://localhost:4000/public/items")
    .pipe(
      map(r =>{
        response.error=r.error,
        response.data=r.data,
        response.message=r.message
        if(response.error==false){
          return response
        }else{
          return null
        }
      })
    )
  }

  getItem(idItem:number):Observable<any>{
    const response= {error:true, message:'No tienes proyecto', data:null}
    return this.http.get<{error:boolean, message:string, data:any}>("http://localhost:4000/public/items/"+ idItem)
    .pipe(
      map(r =>{
        response.error=r.error,
        response.data=r.data,
        response.message=r.message
        if(response.error==false){
          return response
        }else{
          return null
        }
      })
    )
  }

}

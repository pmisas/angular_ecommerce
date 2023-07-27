import { Component, OnInit } from '@angular/core';
import { AuthService } from '@data/services/api/auth.service';

declare const M: any;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit{
  public isLoggedIn:boolean = false;

  public userData: any; // Variable para almacenar los datos del usuario

  constructor(
    public authService: AuthService){
  }

  ngOnInit()  {
    // Suscribirse al BehaviorSubject para obtener el valor de isLoggedIn
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      // Si el usuario está logueado, obtener los datos del usuario
      
    });

    this.authService.userData$.subscribe(data => {
      this.userData = data; 
    })

    M.AutoInit();
  }

  logout(){
    this.authService.logout()
  }


}

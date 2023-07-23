import { Component, OnInit } from '@angular/core';
import { AuthService } from '@data/services/api/auth.service';

declare const M: any;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit{
  isLoggedIn = false;

  constructor(
    private authService: AuthService){
  }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    }),
    // Inicializa el sidenav de Materialize
    //document.addEventListener('DOMContentLoaded', function() {
    //  const elems = document.querySelectorAll('.sidenav');
    //  M.Sidenav.init(elems);
    //});
    M.AutoInit();
  }

  logout(){
    this.authService.logout()
  }


}

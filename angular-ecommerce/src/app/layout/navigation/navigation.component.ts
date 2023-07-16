import { Component, OnInit } from '@angular/core';

declare const M: any;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit{

  

  ngOnInit() {
    // Inicializa el sidenav de Materialize
    //document.addEventListener('DOMContentLoaded', function() {
    //  const elems = document.querySelectorAll('.sidenav');
    //  M.Sidenav.init(elems);
    //});
    M.AutoInit();
  }


}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '@data/services/api/auth.service';
import { IcompleteUser } from '@data/interfaces/IcompleteUser.metadata';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{

  constructor(
    private authService: AuthService
  ){}

  private user!: any; 
  
  ngOnInit(): void {
    //this.user = this.authService.currentUser

  }



}

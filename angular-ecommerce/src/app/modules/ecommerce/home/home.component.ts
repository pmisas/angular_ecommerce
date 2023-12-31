import { Component, OnInit } from '@angular/core';
import { ItemsService } from '@data/services/api/items.service';
import { ICategories, ICategoriesList, IItems } from '@data/interfaces/items.metadata'

declare const M: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(
    private  itemService:ItemsService,
  ){}

  public items!: any; 

  load = false

  ngOnInit(): void {

    this.itemService.getCategories().subscribe( r =>{
      if (r.error===false){
        this.items=r.data
      }
      this.load=true
    })
    
    
    
  
  
  }

}

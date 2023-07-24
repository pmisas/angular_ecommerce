import { Component, OnInit } from '@angular/core';
import { ItemsService } from '@data/services/api/items.service';
import { IItems } from '@data/interfaces/items.metadata'

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

  //options = {fullWidth: true};
  items: IItems[] = []
  load = false

  ngOnInit(): void {

    this.itemService.getItems().subscribe( r =>{
      if (r.error===false){
        this.items=r.data
      }
      console.log(this.items)
    })
    this.load=true
    
    
  
  
  }

}

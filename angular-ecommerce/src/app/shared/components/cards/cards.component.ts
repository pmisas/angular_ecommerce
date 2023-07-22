import { Component, Input, OnInit } from '@angular/core';
import { IItems } from '@data/interfaces/items.metadata';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  
  @Input() data!: IItems;

  ngOnInit(): void {
  }

}

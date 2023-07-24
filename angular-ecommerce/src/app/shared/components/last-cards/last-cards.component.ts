import { Component, Input, OnInit } from '@angular/core';
import { IItems } from '@data/interfaces/items.metadata';

@Component({
  selector: 'app-last-cards',
  templateUrl: './last-cards.component.html',
  styleUrls: ['./last-cards.component.css']
})
export class LastCardsComponent implements OnInit{
  
  @Input() data:  IItems[] = []

  ngOnInit(): void {
  }

}

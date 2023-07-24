import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ICategories, IItems } from '@data/interfaces/items.metadata';

@Component({
  selector: 'app-last-cards',
  templateUrl: './last-cards.component.html',
  styleUrls: ['./last-cards.component.css']
})

export class LastCardsComponent implements OnInit, AfterViewInit{

  load= false

  ngAfterViewInit(): void {
    this.load = true
  }
  
  @Input() data: any
  ngOnInit(): void {
  }

}

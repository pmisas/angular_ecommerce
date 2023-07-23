import { Component, OnInit } from '@angular/core';
declare const M: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  options={fullWidth: true, indicators: false, duration: 300, noWrap: false, interval: 300}

  ngOnInit(): void {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, this.options)
    
  }

}

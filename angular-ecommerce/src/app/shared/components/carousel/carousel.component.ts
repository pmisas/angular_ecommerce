import { Component, OnInit, AfterViewInit} from '@angular/core';
declare const M: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  options = { fullWidth: true, indicators: true, duration: 300};


  ngOnInit(): void {
    // No es necesario inicializar el carrusel aquí, lo haremos en ngAfterViewInit
  }

  ngAfterViewInit(): void {
    const carouselElement = document.querySelector('.carousel');
    if (carouselElement) {
      // Esperar a que todas las imágenes se hayan cargado completamente
      const images = carouselElement.querySelectorAll('img');
      let imagesLoaded = 0;

      const checkAllImagesLoaded = () => {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
          // Todas las imágenes se han cargado, inicializar el carrusel
          const instance = M.Carousel.init(carouselElement, this.options);
        }
      };

      // Verificar si las imágenes ya están cargadas
      images.forEach((image) => {
        if (image.complete) {
          checkAllImagesLoaded();
        } else {
          image.onload = checkAllImagesLoaded;
        }
      });
    }
  }

}
//Import Components

import { CardsComponent } from "./cards/cards.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { LastCardsComponent } from "./last-cards/last-cards.component";

//import { CartComponent } from "./cart/cart.component";

export const components: any[] =[
    CardsComponent,
    CarouselComponent,
    LastCardsComponent
    //CartComponent
];


//export all components
//export * from './cart/cart.component'
export * from './cards/cards.component'
export * from './carousel/carousel.component'
export * from './last-cards/last-cards.component'

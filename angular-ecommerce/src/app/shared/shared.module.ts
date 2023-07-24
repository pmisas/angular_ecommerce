import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import * as fromComponents from './components';
import { NextDirective } from 'app/directives/next/next.directive';
import { PrevDirective } from 'app/directives/prev/prev.directive';

@NgModule({
  imports: [
    
    //Creados
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    

    CommonModule
  ],
  declarations: [...fromComponents.components,
    NextDirective,
    PrevDirective,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item1Component } from './item1/item1.component';
import { Item2Component } from './item2/item2.component';
import { RouterModule } from '@angular/router';
import { ItensRoutes } from './itens.routing';
import { SharedModule } from '../shared/shared.module';
 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ItensRoutes),
    SharedModule,
  ],
  declarations: [
    Item1Component,
    Item2Component
  ],
  exports:[Item1Component, Item2Component]
})
export class ItensModule { }

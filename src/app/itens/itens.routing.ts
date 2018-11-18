import { Routes } from '@angular/router';
import { Item1Component } from './item1/item1.component';
import { Item2Component } from './item2/item2.component';



export const ItensRoutes: Routes = [
 {
    path: '',
    children: [ 
      {
        path: 'item1',
        component: Item1Component,
      },
      {
        path: 'item2',
        component: Item2Component,
      }
      ]

}
];

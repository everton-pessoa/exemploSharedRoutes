import { Routes } from '@angular/router';
import { AppComponent } from './app.component';


export const AppRoutes: Routes = [
 {
    path: '',
  component: AppComponent,
  children: [ 
    {
      path: '',
      loadChildren: './itens/itens.module#ItensModule'
    },
    ]

}
];

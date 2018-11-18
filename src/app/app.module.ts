import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { ItensModule } from './itens/itens.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    ItensModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

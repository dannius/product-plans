import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeView } from './views';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeView
  ]
})
export class HomeModule { }

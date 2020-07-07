import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeView } from './views';

const routes: Routes = [
  {
    path: '',
    component: HomeView,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

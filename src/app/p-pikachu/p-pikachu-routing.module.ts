import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PPikachuPage } from './p-pikachu.page';

const routes: Routes = [
  {
    path: '',
    component: PPikachuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PPikachuPageRoutingModule {}

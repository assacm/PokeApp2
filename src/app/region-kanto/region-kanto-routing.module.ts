import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionKantoPage } from './region-kanto.page';

const routes: Routes = [
  {
    path: '',
    component: RegionKantoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionKantoPageRoutingModule {}

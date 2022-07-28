import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionArchiNaranjaPage } from './region-archi-naranja.page';

const routes: Routes = [
  {
    path: '',
    component: RegionArchiNaranjaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionArchiNaranjaPageRoutingModule {}

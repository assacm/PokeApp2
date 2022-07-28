import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionKalosPage } from './region-kalos.page';

const routes: Routes = [
  {
    path: '',
    component: RegionKalosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionKalosPageRoutingModule {}

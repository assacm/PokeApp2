import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionIslasPage } from './region-islas.page';

const routes: Routes = [
  {
    path: '',
    component: RegionIslasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionIslasPageRoutingModule {}

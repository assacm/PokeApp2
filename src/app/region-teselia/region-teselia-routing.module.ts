import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionTeseliaPage } from './region-teselia.page';

const routes: Routes = [
  {
    path: '',
    component: RegionTeseliaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionTeseliaPageRoutingModule {}

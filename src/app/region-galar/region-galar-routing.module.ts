import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionGalarPage } from './region-galar.page';

const routes: Routes = [
  {
    path: '',
    component: RegionGalarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionGalarPageRoutingModule {}

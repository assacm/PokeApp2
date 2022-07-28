import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionAlolaPage } from './region-alola.page';

const routes: Routes = [
  {
    path: '',
    component: RegionAlolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionAlolaPageRoutingModule {}

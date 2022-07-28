import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionHoennPage } from './region-hoenn.page';

const routes: Routes = [
  {
    path: '',
    component: RegionHoennPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionHoennPageRoutingModule {}

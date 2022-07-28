import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionJohtoPage } from './region-johto.page';

const routes: Routes = [
  {
    path: '',
    component: RegionJohtoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionJohtoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionIslasDecoloraPage } from './region-islas-decolora.page';

const routes: Routes = [
  {
    path: '',
    component: RegionIslasDecoloraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionIslasDecoloraPageRoutingModule {}

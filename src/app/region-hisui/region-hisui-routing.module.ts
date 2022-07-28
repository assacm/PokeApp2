import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionHisuiPage } from './region-hisui.page';

const routes: Routes = [
  {
    path: '',
    component: RegionHisuiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionHisuiPageRoutingModule {}

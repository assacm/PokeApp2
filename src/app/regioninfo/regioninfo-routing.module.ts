import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegioninfoPage } from './regioninfo.page';

const routes: Routes = [
  {
    path: '',
    component: RegioninfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegioninfoPageRoutingModule {}

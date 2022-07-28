import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { POnixPage } from './p-onix.page';

const routes: Routes = [
  {
    path: '',
    component: POnixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class POnixPageRoutingModule {}

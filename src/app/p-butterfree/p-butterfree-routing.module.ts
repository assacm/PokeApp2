import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PButterfreePage } from './p-butterfree.page';

const routes: Routes = [
  {
    path: '',
    component: PButterfreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PButterfreePageRoutingModule {}
